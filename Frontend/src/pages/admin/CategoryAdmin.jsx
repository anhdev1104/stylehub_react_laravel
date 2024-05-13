import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Toast from '@/components/Toast';
import { addCategory, deleteCategory, getCategories } from '@/services/categories';

const CategoryAdmin = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    category_name: '',
    position: '',
  });

  console.log('🚀 ~ CategoryAdmin ~ newCategory:', newCategory);
  useEffect(() => {
    (async () => {
      setCategories(await getCategories());
    })();
  }, []);

  const validateForm = () => {
    if (!newCategory.category_name || !newCategory.position) {
      Toast(toastRef, {
        title: 'Thất bại !',
        message: 'Vui lòng nhập đầy đủ thông tin dạnh mục.',
        type: 'error',
        duration: 3000,
      });
      return false;
    }

    Toast(toastRef, {
      title: 'Thành công !',
      message: 'Thêm dạnh mục thành công.',
      type: 'success',
      duration: 3000,
    });
    return true;
  };
  const handleAddCategory = async e => {
    e.preventDefault();
    if (validateForm()) {
      const newCategoryAdd = await addCategory(newCategory);
      setCategories(currentCategory => [...currentCategory, newCategoryAdd]);
      formRef.current && formRef.current.reset();
      setNewCategory({
        category_name: '',
        position: '',
      });
    }
  };

  const handleDeleteCategory = async e => {
    const isDelete = confirm('Bạn muốn xoá danh mục này khỏi trang web ?');
    if (!isDelete) return;
    const id = +e.target.dataset.id;
    if (id) {
      await deleteCategory(id);
      setCategories(currentCategory => currentCategory.filter(category => category.id !== id));
      Toast(toastRef, {
        title: 'Đã xoá !',
        message: 'Danh mục đã được xoá khỏi trang.',
        type: 'success',
        duration: 3000,
      });
    }
  };

  const formRef = useRef();
  const toastRef = useRef();

  return (
    <>
      <div id="toast" className="fixed top-8 right-8 z-50" ref={toastRef}></div>
      <div className="flex flex-1 px-6 py-8 bg-gray-200">
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-4">Thêm danh mục mới</h2>
            <form ref={formRef} id="addCategories" onSubmit={handleAddCategory}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameCategories">
                  Tên danh mục
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nameCategories"
                  name="category_name"
                  type="text"
                  placeholder="Nhập tên danh mục"
                  onChange={e => setNewCategory({ ...newCategory, [e.target.name]: e.target.value })}
                />
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="position">
                  Thứ tự danh mục
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="position"
                  name="position"
                  placeholder="Nhập vị trí sắp xếp danh mục"
                  onChange={e => setNewCategory({ ...newCategory, [e.target.name]: +e.target.value })}
                />
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
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white rounded-lg p-8 mr-[-4px]">
            <h2 className="text-xl font-semibold mb-4">Danh sách danh mục</h2>
            <div className="overflow-auto max-h-screen cart-scroll">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-center">Tên danh mục</th>
                    <th className="text-center">Vị trí sắp xếp</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.length > 0 &&
                    categories
                      ?.map(category => (
                        <tr key={category?.id}>
                          <td className="border p-2 text-center capitalize">{category && category.category_name}</td>
                          <td className="border p-2 text-center">{category && category.position}</td>
                          <td className="border p-2 w-24">
                            <Link
                              to={`/admin/categories/${category?.id}`}
                              className="block p-2 rounded-md bg-yellow hover:bg-yellowLight text-white text-center mb-1"
                            >
                              Sửa
                            </Link>

                            <button
                              className="btn-delete min-w-24 p-2 rounded-md bg-red-500 hover:bg-red-600 text-white text-center"
                              onClick={handleDeleteCategory}
                              data-id={category?.id}
                            >
                              Xoá
                            </button>
                          </td>
                        </tr>
                      ))
                      .reverse()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryAdmin;
