import { useEffect, useRef, useState } from 'react';
import { addProduct, deleteProduct, getAllProduct } from '../../services/products';

import { getAllCategory } from '../../services/category';
import { API_URL } from '../../api/config';
import ListProduct from './components/ListProduct';
import Toast from '../../components/Toast';

const ProductAdmin = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    images: '',
    priceOrigin: '',
    price: '',
    description: '',
    size: [],
    categoryID: '',
    isActive: '',
  });

  const validateForm = () => {
    // Kiểm tra các trường cần thiết
    if (
      !newProduct.name ||
      !newProduct.images.length ||
      !newProduct.priceOrigin ||
      !newProduct.price ||
      !newProduct.size.length ||
      !newProduct.categoryID ||
      newProduct.isActive === ''
    ) {
      Toast(toastRef, {
        title: 'Thất bại !',
        message: 'Vui lòng nhập đầy đủ thông tin sản phẩm.',
        type: 'error',
        duration: 3000,
      });
      return false; // Trả về false nếu có trường nào đó rỗng
    }
    Toast(toastRef, {
      title: 'Thành công !',
      message: 'Thêm sản phẩm thành công.',
      type: 'success',
      duration: 3000,
    });
    return true; // Trả về true nếu tất cả các trường đã được nhập
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (validateForm()) {
      const newProductAdd = await addProduct(newProduct);
      setProducts(prevProducts => [...prevProducts, newProductAdd]);
      formRef.current && formRef.current.reset();
      setNewProduct({
        name: '',
        images: '',
        priceOrigin: '',
        price: '',
        description: '',
        size: [],
        categoryID: '',
        isActive: '',
      });
    }
  };

  const handleImages = e => {
    const listImages = e.target.files;
    const images = [...listImages].map(image => image.name);
    setNewProduct({ ...newProduct, images });
  };

  const formRef = useRef();

  const sizeSRef = useRef(null);
  const sizeMRef = useRef(null);
  const sizeLRef = useRef(null);

  const sizeSQuantityRef = useRef(null);
  const sizeMQuantityRef = useRef(null);
  const sizeLQuantityRef = useRef(null);

  const handleSizeChange = (sizeLabel, quantity = null, isChecked = null) => {
    setNewProduct(prevState => {
      const sizeIndex = prevState.size.findIndex(size => size.label === sizeLabel);
      // Nếu kích cỡ không tồn tại trong mảng và được chọn, thêm nó vào
      if (sizeIndex === -1 && isChecked) {
        return {
          ...prevState,
          size: [...prevState.size, { label: sizeLabel, quantity: parseInt(quantity) || 0 }],
        };
      } else if (sizeIndex !== -1) {
        // Nếu kích cỡ tồn tại và không được chọn, loại bỏ nó
        if (isChecked === false) {
          return {
            ...prevState,
            size: prevState.size.filter(size => size.label !== sizeLabel),
          };
        }
        // Nếu kích cỡ tồn tại và số lượng được cập nhật
        const newSize = { ...prevState.size[sizeIndex], quantity: parseInt(quantity) || 0 };
        return {
          ...prevState,
          size: [...prevState.size.slice(0, sizeIndex), newSize, ...prevState.size.slice(sizeIndex + 1)],
        };
      }
      return prevState; // Trong trường hợp không có thay đổi
    });
  };

  useEffect(() => {
    (async () => {
      const data = await getAllProduct();
      setProducts(data);
      setCategory(await getAllCategory());
    })();
  }, []);

  const handleDeleteProduct = async e => {
    const isDelete = confirm('Bạn muốn xoá sản phẩm này khỏi trang web ?');
    if (!isDelete) return;
    const id = e.target.dataset.id;
    if (id) {
      await deleteProduct(id);
      setProducts(currentProducts => currentProducts.filter(product => product._id !== id));
      Toast(toastRef, {
        title: 'Đã xoá !',
        message: 'Sản phẩm đã được xoá khỏi trang.',
        type: 'success',
        duration: 3000,
      });
    }
  };
  const toastRef = useRef();

  return (
    <>
      <div id="toast" className="fixed top-8 right-8 z-50" ref={toastRef}></div>
      <div className="flex flex-1 px-6 py-8 bg-gray-200">
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-4">Thêm sản phẩm mới</h2>
            <form
              onSubmit={handleSubmit}
              action={`${API_URL}/products`}
              encType="multipart/form-data"
              id="addProduct"
              ref={formRef}
            >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameProduct">
                  Tên sản phẩm
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nameProduct"
                  name="name"
                  type="text"
                  placeholder="Nhập tên sản phẩm"
                  onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagesProduct">
                  Hình ảnh (giữ Ctrl để chọn nhiều ảnh)
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="imagesProduct"
                  name="images"
                  type="file"
                  placeholder="Nhập hình ảnh sản phẩm"
                  multiple
                  onChange={handleImages}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priceProduct">
                  Giá sản phẩm
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="priceProduct"
                  name="priceOrigin"
                  type="text"
                  placeholder="Nhập giá sản phẩm"
                  onChange={e => setNewProduct({ ...newProduct, priceOrigin: +e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priceSaleProduct">
                  Giá sale sản phẩm
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="priceSaleProduct"
                  name="price"
                  type="text"
                  placeholder="Nhập giá sale sản phẩm"
                  onChange={e => setNewProduct({ ...newProduct, price: +e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descriptionProduct">
                  Mô tả sản phẩm
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="descriptionProduct"
                  name="description"
                  type="text"
                  placeholder="Nhập mô tả sản phẩm"
                  onChange={e => setNewProduct({ ...newProduct, description: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-700 text-sm font-bold mb-2 block">
                  <span>Size</span>
                </label>
                <div className="flex flex-col gap-3 mt-2">
                  <div className="flex items-center justify-evenly gap-5">
                    <label className="inline-flex items-center" htmlFor="sizeS">
                      <input
                        type="checkbox"
                        className="form-checkbox text-blue-500"
                        id="sizeS"
                        name="sizeS"
                        ref={sizeSRef}
                        onChange={e => handleSizeChange('S', sizeSQuantityRef.current.value, e.target.checked)}
                      />
                      <span className="ml-2">S</span>
                    </label>
                    <input
                      className="shadow appearance-none border rounded min-w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Nhập số lượng"
                      id="quantitySizeS"
                      ref={sizeSQuantityRef}
                      onBlur={() => handleSizeChange('S', sizeSQuantityRef.current.value, sizeSRef.current.checked)}
                    />
                  </div>
                  <div className="flex items-center justify-evenly gap-5">
                    <label className="inline-flex items-center" htmlFor="sizeM">
                      <input
                        type="checkbox"
                        className="form-checkbox text-blue-500"
                        id="sizeM"
                        ref={sizeMRef}
                        onChange={e => handleSizeChange('M', sizeMQuantityRef.current.value, e.target.checked)}
                      />
                      <span className="ml-2">M</span>
                    </label>
                    <input
                      className="shadow appearance-none border rounded min-w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline translate-x-[-2px]"
                      type="text"
                      placeholder="Nhập số lượng"
                      id="quantitySizeM"
                      ref={sizeMQuantityRef}
                      onBlur={() => handleSizeChange('M', sizeMQuantityRef.current.value, sizeMRef.current.checked)}
                    />
                  </div>
                  <div className="flex items-center justify-evenly gap-5">
                    <label className="inline-flex items-center" htmlFor="sizeL">
                      <input
                        type="checkbox"
                        className="form-checkbox text-blue-500"
                        id="sizeL"
                        ref={sizeLRef}
                        onChange={e => handleSizeChange('L', sizeLQuantityRef.current.value, e.target.checked)}
                      />
                      <span className="ml-2">L</span>
                    </label>
                    <input
                      className="shadow appearance-none border rounded min-w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Nhập số lượng"
                      id="quantitySizeL"
                      ref={sizeLQuantityRef}
                      onBlur={() => handleSizeChange('L', sizeLQuantityRef.current.value, sizeLRef.current.checked)}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                  Danh mục sản phẩm
                </label>
                <select
                  className="block appearance-none w-full border rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="category"
                  name="categoryID"
                  onChange={e => setNewProduct({ ...newProduct, categoryID: e.target.value })}
                >
                  <option value="">Chọn danh mục</option>
                  {category?.map(category => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="statusProduct">
                  Trạng thái sản phẩm
                </label>
                <select
                  className="block appearance-none w-full border rounded px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="statusProduct"
                  name="isActive"
                  onChange={e => setNewProduct({ ...newProduct, isActive: +e.target.value })}
                >
                  <option value="">Chọn trạng thái</option>
                  <option value="1">Hiển thị sản phẩm</option>
                  <option value="0">Ẩn sản phẩm</option>
                </select>
              </div>
              <div className="mb-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  id="btnAdd"
                >
                  Thêm sản phẩm
                </button>
              </div>
            </form>
          </div>
        </div>
        <ListProduct products={products} onClick={handleDeleteProduct} />
      </div>
    </>
  );
};

export default ProductAdmin;
