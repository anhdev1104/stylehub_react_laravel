import { Link } from 'react-router-dom';

const ListProduct = ({ products, onClick }) => {
  return (
    <div className="w-full md:w-1/2 px-4">
      <div className="bg-white rounded-lg p-8 mr-[-4px]">
        <h2 className="text-xl font-semibold mb-4">Danh sách sản phẩm</h2>
        <div className="overflow-auto max-h-[813px] cart-scroll">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-center">Ảnh sản phẩm</th>
                <th className="text-center">Tên sản phẩm</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {products
                ?.map(product => (
                  <tr key={product._id}>
                    <td className="border p-2 w-[120px] h-[140px]">
                      <img loading="lazy" src={`../../src/assets/images/${product?.images[0]}`} alt="" className="" />
                    </td>
                    <td className="border p-2">{product.name}</td>
                    <td className="border p-2 w-24">
                      <Link
                        to={`/admin/products/${product._id}`}
                        className="block p-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white text-center mb-1"
                      >
                        Chi tiết
                      </Link>
                      <button
                        data-id={product._id}
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
