import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCategories } from '@/services/categories';
import { getProductDetail } from '@/services/products';
import { getSubCategories } from '@/services/subcategories';
import { updatedProductApi } from '@/api/products';
import LoadingSpin from '@/components/loading/LoadingSpin';

const UpdateProduct = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const { id } = useParams();
  const [updateProduct, setUpdateProduct] = useState({
    id,
    product_name: '',
    images: [],
    initial_price: '',
    description: '',
    sizes: [],
    discount: '',
    category_id: '',
    subcat_id: '',
    is_active: '',
  });
  const [imagePreview, setImagePreview] = useState();

  console.log('🚀 ~ UpdateProduct ~ updateProduct:', updateProduct);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProductDetail(id);
        const categories = await getCategories();
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
    setUpdateProduct({ ...updateProduct, images: [...listImages] });
    const imagesPreview = [...listImages]?.map(image => {
      image.preview = URL.createObjectURL(image);
      return image;
    });
    setImagePreview(imagesPreview);
  };

  useEffect(() => {
    return () => {
      imagePreview?.map(image => URL.revokeObjectURL(image.preview));
    };
  }, [imagePreview]);

  const handleSizeQuantityChange = (e, index) => {
    const newSizeList = [...updateProduct.sizes];
    newSizeList[index].quantity = +e.target.value;
    setUpdateProduct({ ...updateProduct, sizes: newSizeList });
  };

  const handleCheckSubcategory = async idCategory => {
    setSubcategory(await getSubCategories(idCategory));
  };

  useEffect(() => {
    (async () => {
      setSubcategory(await getSubCategories(updateProduct?.category_id));
    })();
  }, [updateProduct?.category_id]);

  const navigate = useNavigate();

  const handleUpdateProduct = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('_method', 'PUT');
    for (let key in updateProduct) {
      if (key === 'images') {
        updateProduct[key].forEach((image, index) => formData.append(`${key}[${index}]`, image));
      } else if (key === 'sizes') {
        updateProduct[key].forEach((size, index) => {
          formData.append(`${key}[${index}][label]`, size.label);
          formData.append(`${key}[${index}][quantity]`, size.quantity);
        });
      } else {
        formData.append(key, updateProduct[key]);
      }
    }
    await updatedProductApi(id, formData);
    navigate(`/admin/products/${id}`);
  };

  return (
    <div className="flex flex-1 px-6 py-8 bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-full">
        <div className="overflow-x-auto">
          {!isDataLoaded && <LoadingSpin />}
          {isDataLoaded && (
            <form className="px-6 py-4 w-full" id="formUpdate" onSubmit={handleUpdateProduct}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Tên sản phẩm</label>
                <input
                  type="text"
                  value={updateProduct?.product_name}
                  name="product_name"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={e => setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value })}
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block text-gray-700 font-semibold mb-2">Hình ảnh</label>
                <div className="flex gap-3 w-[1103px] overflow-x-auto">
                  <div className="flex-shrink-0">
                    <div className="flex gap-3">
                      {imagePreview?.map((image, index) => (
                        <img src={image.preview} alt="" key={index} className="w-52 mb-5" />
                      )) ||
                        updateProduct.images?.map((image, index) => (
                          <img key={index} src={image.image} alt="" className="w-52 mb-5" />
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
                  name="initial_price"
                  value={updateProduct?.initial_price}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={e => setUpdateProduct({ ...updateProduct, [e.target.name]: +e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Phần trăm giảm giá</label>
                <input
                  type="text"
                  name="discount"
                  value={updateProduct?.discount}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={e => setUpdateProduct({ ...updateProduct, [e.target.name]: +e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-700 text-sm font-bold mb-2 block">
                  <span>Size</span>
                </label>
                <div className="flex flex-col gap-3 mt-2">
                  {updateProduct.sizes?.map((productSize, index) => (
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
                  value={updateProduct?.description}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={e => setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Danh mục sản phẩm</label>
                <select
                  className="block appearance-none w-full border rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="category_id"
                  name="category_id"
                  onChange={e => {
                    setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value });
                    handleCheckSubcategory(e.target.value);
                  }}
                >
                  {category?.map(categoryItem => (
                    <option
                      key={categoryItem.id}
                      value={categoryItem.id}
                      selected={categoryItem.id === +updateProduct?.category_id}
                    >
                      {categoryItem?.category_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Danh mục con</label>
                <select
                  className="block appearance-none w-full border rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subcat_id"
                  name="subcat_id"
                  onChange={e => setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value })}
                >
                  {subcategory?.map(categoryItem => (
                    <option
                      key={categoryItem.id}
                      value={categoryItem.id}
                      selected={categoryItem.id === +updateProduct?.subcat_id}
                    >
                      {categoryItem?.subcat_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Trạng thái sản phẩm</label>
                <select
                  className="block appearance-none w-full border rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="statusProduct"
                  name="is_active"
                  onChange={e => setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value })}
                >
                  <option value="active" selected={updateProduct?.is_active === 'active'}>
                    Hiển thị sản phẩm
                  </option>
                  <option value="inactive" selected={updateProduct?.is_active === 'inactive'}>
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
