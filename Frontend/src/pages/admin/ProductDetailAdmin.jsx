import { useEffect, useState } from 'react';
import { getProductDetail } from '../../services/products';
import { Link, useParams } from 'react-router-dom';
import { getDetailCategory } from '../../services/category';

const ProductDetailAdmin = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setProduct(await getProductDetail(id));
      setCategory(await getDetailCategory(product?.categoryID));
    })();
  }, [id, product?.categoryID]);

  return (
    <div className="flex flex-1 px-6 py-8 bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-full">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Tên sản phẩm</th>
                <th className="px-4 py-2">Ảnh 1</th>
                <th className="px-4 py-2">Ảnh 2</th>
                <th className="px-4 py-2">Giá sale</th>
                <th className="px-4 py-2">Giá gốc</th>
                <th className="px-4 py-2">Số lượng size</th>
                <th className="px-4 py-2">Mô tả</th>
                <th className="px-4 py-2">Danh mục</th>
                <th className="px-4 py-2">Trạng thái</th>
                <th className="px-4 py-2">Tùy chọn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 text-center">{product?.name}</td>
                <td className="border p-2 w-[130px]">
                  <img src={`../../src/assets/images/${product?.images?.[0]}`} alt="" className="object-contain" />
                </td>
                <td className="border p-2 w-[130px]">
                  <img src={`../../src/assets/images/${product?.images?.[1]}`} alt="" className="object-contain" />
                </td>
                <td className="border p-2 text-center">
                  {product?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
                </td>
                <td className="border p-2 text-center">
                  {product?.priceOrigin?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ
                </td>
                <td className="border p-2 text-center w-36">
                  {product?.size?.map((item, index) => (
                    <div className="mb-2" key={index}>
                      <span className="font-medium mr-2">{item?.label}</span>
                      còn <span className="font-medium mx-1">{item?.quantity}</span> sp
                    </div>
                  ))}
                </td>
                <td className="border p-2 text-center">
                  <textarea
                    cols="15"
                    rows="7"
                    value={product.description}
                    disabled
                    style={{ resize: 'none' }}
                  ></textarea>
                </td>
                <td className="border p-2 text-center w-36 capitalize">{category.name}</td>
                <td className="border p-2 text-center">{product.isActive === 1 ? 'Hiển thị' : 'Ẩn'}</td>
                <td className="border p-2 text-center w-28">
                  <Link
                    to={`/admin/updateproduct/${id}`}
                    className="block p-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white text-center mb-1"
                  >
                    Chỉnh sửa
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailAdmin;
