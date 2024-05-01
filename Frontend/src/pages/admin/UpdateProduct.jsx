import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductDetail, updatedProductApi } from '../../services/products';
import { getAllCategory } from '../../services/category';

const UpdateProduct = () => {
  const [category, setCategory] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const { id } = useParams();
  const [updateProduct, setUpdateProduct] = useState({
    _id: id,
    name: '',
    images: '',
    priceOrigin: '',
    price: '',
    description: '',
    size: [],
    categoryID: '',
    isActive: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProductDetail(id);
        const categories = await getAllCategory();
        setUpdateProduct(productData);
        setCategory(categories);
        setIsDataLoaded(true);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [id]);

  const handleImages = e => {
    const listImages = e.target.files;
    const images = [...listImages].map(image => image.name);
    setUpdateProduct({ ...updateProduct, images });
  };

  const handleSizeQuantityChange = (e, index) => {
    const newSizeList = [...updateProduct.size];
    newSizeList[index].quantity = +e.target.value;
    setUpdateProduct({ ...updateProduct, size: newSizeList });
  };

  const navigate = useNavigate();

  const handleUpdateProduct = async e => {
    e.preventDefault();
    await updatedProductApi(id, updateProduct);
    navigate(`/admin/products/${id}`);
  };
  return (
    <div className="flex flex-1 px-6 py-8 bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-full">
        <div className="overflow-x-auto">
          {isDataLoaded && (
            <form className="px-6 py-4 w-full" id="formUpdate" onSubmit={handleUpdateProduct}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Tên sản phẩm</label>
                <input
                  type="text"
                  value={updateProduct.name}
                  name="nameProduct"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={e => setUpdateProduct({ ...updateProduct, name: e.target.value })}
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block text-gray-700 font-semibold mb-2">Hình ảnh</label>
                <div className="flex gap-3 w-[1103px] overflow-x-auto">
                  <div className="flex-shrink-0">
                    <div className="flex gap-3">
                      {updateProduct.images?.map((image, index) => (
                        <img key={index} src={`../../src/assets/images/${image}`} alt="" className="w-52 mb-5" />
                      ))}
                    </div>
                    <input
                      type="file"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={handleImages}
                      multiple
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Giá gốc</label>
                <input
                  type="text"
                  name="priceOrigin"
                  value={updateProduct.priceOrigin}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={e => setUpdateProduct({ ...updateProduct, priceOrigin: +e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Giá sale</label>
                <input
                  type="text"
                  name="price"
                  value={updateProduct.price}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={e => setUpdateProduct({ ...updateProduct, price: +e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-700 text-sm font-bold mb-2 block">
                  <span>Size</span>
                </label>
                <div className="flex flex-col gap-3 mt-2">
                  {updateProduct.size?.map((productSize, index) => (
                    <div className="flex items-center gap-5" key={index}>
                      <label className="inline-flex items-center">
                        <span className="ml-2 font-bold">{productSize.label}</span>
                      </label>
                      <input
                        className="shadow appearance-none border rounded min-w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline quantitySize"
                        type="text"
                        placeholder="Nhập số lượng"
                        value={productSize.quantity}
                        onChange={e => handleSizeQuantityChange(e, index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Mô tả</label>
                <input
                  type="text"
                  name="description"
                  value={updateProduct.description}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={e => setUpdateProduct({ ...updateProduct, description: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Danh mục sản phẩm</label>
                <select
                  className="block appearance-none w-full border rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="category"
                  onChange={e => setUpdateProduct({ ...updateProduct, categoryID: e.target.value })}
                >
                  {category?.map(categoryItem => (
                    <option
                      key={categoryItem._id}
                      value={categoryItem._id}
                      selected={categoryItem._id === updateProduct.categoryID}
                    >
                      {categoryItem.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Trạng thái sản phẩm</label>
                <select
                  className="block appearance-none w-full border rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="statusProduct"
                  onChange={e => setUpdateProduct({ ...updateProduct, isActive: +e.target.value })}
                >
                  <option value="1" selected={updateProduct.isActive === 1}>
                    Hiển thị sản phẩm
                  </option>
                  <option value="0" selected={updateProduct.isActive === 0}>
                    Ẩn sản phẩm
                  </option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Lưu thay đổi
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
