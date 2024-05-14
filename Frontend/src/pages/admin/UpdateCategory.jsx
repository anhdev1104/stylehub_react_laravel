import { getCategoryDetails, updatedCategory } from '@/services/categories';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateCategory() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const { id } = useParams();
  const [updateCategory, setUpdateCategory] = useState({
    id,
    category_name: '',
    position: '',
  });

  useEffect(() => {
    (async () => {
      const category = await getCategoryDetails(id);
      setUpdateCategory(category);
      setIsDataLoaded(true);
    })();
  }, [id]);

  const navigate = useNavigate();

  const handleUpdateCategory = async e => {
    e.preventDefault();
    await updatedCategory(id, updateCategory);
    navigate('/admin/categories');
  };

  return (
    <div className="flex flex-1 px-6 py-8 bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-full">
        <div className="overflow-x-auto">
          {isDataLoaded && (
            <form onSubmit={handleUpdateCategory} className="px-6 py-4 w-full" id="formUpdate">
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Tên danh mục</label>
                <input
                  type="text"
                  value={updateCategory?.category_name}
                  name="category_name"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={e => setUpdateCategory({ ...updateCategory, [e.target.name]: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Vị trí sắp xếp</label>
                <input
                  type="text"
                  name="position"
                  value={updateCategory?.position}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={e => setUpdateCategory({ ...updateCategory, [e.target.name]: +e.target.value })}
                />
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
}

export default UpdateCategory;
