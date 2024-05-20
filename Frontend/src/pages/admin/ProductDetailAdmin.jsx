import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductDetail } from '@/services/products';
import { getCategoryDetails } from '@/services/categories';
import { getSubCategoryDetails } from '@/services/subcategories';
import LoadingSpin from '@/components/loading/LoadingSpin';

const ProductDetailAdmin = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      setProduct(await getProductDetail(id));
      product.category_id && setCategory(await getCategoryDetails(product.category_id));
      product.subcat_id && setSubCategory(await getSubCategoryDetails(product.subcat_id));
      setLoading(false);
    })();
  }, [id, product.category_id, product.subcat_id]);

  return (
    <div className="flex flex-1 px-6 py-8 bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-full">
        <div className="overflow-x-auto">
          {loading && <LoadingSpin />}
          {!loading && (
            <>
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">Tên sản phẩm</th>
                    <th className="px-4 py-2">Giá gốc</th>
                    <th className="px-4 py-2">Giảm giá</th>
                    <th className="px-4 py-2">Giá sale</th>
                    <th className="px-4 py-2">Số lượng size</th>
                    <th className="px-4 py-2">Mô tả</th>
                    <th className="px-4 py-2">Danh mục</th>
                    <th className="px-4 py-2">Danh mục con</th>
                    <th className="px-4 py-2">Trạng thái</th>
                    <th className="px-4 py-2">Tùy chọn</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 text-center">{product?.product_name}</td>
                    <td className="border p-2 text-center">${product?.initial_price}</td>
                    <td className="border p-2 text-center">{product?.discount}%</td>
                    <td className="border p-2 text-center">${product?.price}</td>
                    <td className="border p-2 text-center w-36">
                      {product?.sizes?.map((item, index) => (
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
                        value={product?.description}
                        disabled
                        style={{ resize: 'none' }}
                      ></textarea>
                    </td>
                    <td className="border p-2 text-center w-36 capitalize">{category?.category_name}</td>
                    <td className="border p-2 text-center w-36 capitalize">{subcategory?.subcat_name}</td>
                    <td className="border p-2 text-center">{product?.is_active === 'active' ? 'Hiển Thị' : 'Ẩn'}</td>
                    <td className="border p-2 text-center w-28">
                      <Link
                        to={`/admin/updateproduct/${id}`}
                        className="block p-2 rounded-md bg-yellow hover:bg-yellowLight text-white text-center mb-1"
                      >
                        Chỉnh sửa
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="table-auto w-full mt-10">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">Hình ảnh sản phẩm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 w-[130px]">
                      <div className="flex items-center gap-5 overflow-x-auto">
                        {product?.images?.map(image => (
                          <img src={image.image} alt="" className="h-[250px] object-cover" key={image.id} />
                        ))}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailAdmin;
