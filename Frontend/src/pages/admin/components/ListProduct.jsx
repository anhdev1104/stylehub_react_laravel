import LoadingSpin from '@/components/loading/LoadingSpin';
import { Link } from 'react-router-dom';

const ListProduct = ({ products, onClick, loading }) => {
  return (
    <div className="w-full md:w-1/2 px-4">
      <div className="bg-white rounded-lg p-8 mr-[-4px]">
        <h2 className="text-xl font-semibold mb-4">Danh sách sản phẩm</h2>
        <div className="overflow-auto max-h-[900px] cart-modal">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-center">Ảnh sản phẩm</th>
                <th className="text-center">Tên sản phẩm</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td></td>
                  <td>
                    <LoadingSpin />
                  </td>
                  <td></td>
                </tr>
              )}

              {!loading &&
                products?.length > 0 &&
                products
                  ?.map(product => (
                    <tr key={product?.id}>
                      <td className="border p-2 w-[120px] h-[140px]">
                        <img src={product?.images[0].image} alt="" className="w-full h-full object-cover" />
                      </td>
                      <td className="border p-2 font-medium text-center">{product?.product_name}</td>
                      <td className="border p-2 w-24">
                        <Link
                          to={`/admin/products/${product?.id}`}
                          className="block p-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white text-center mb-1"
                        >
                          Chi tiết
                        </Link>
                        <button
                          data-id={product?.id}
                          className="btn-delete min-w-24 p-2 rounded-md bg-red-500 hover:bg-red-600 text-white text-center"
                          onClick={e => onClick(e)}
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
  );
};

export default ListProduct;
