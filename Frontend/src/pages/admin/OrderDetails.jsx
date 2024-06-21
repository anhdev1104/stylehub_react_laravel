import { getOrderDetails } from '@/services/orders';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  const [order, setOrder] = useState([]);
  console.log('🚀 ~ OrderDetails ~ order:', order);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getOrderDetails(id);
      data && setOrder(data);
    })();
  }, [id]);

  return (
    <>
      <div className="flex flex-1 px-6 py-8 bg-gray-200">
        <div className="bg-white p-8 rounded shadow-md w-full">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">ID Sản phẩm</th>
                  <th className="px-4 py-2">Giá</th>
                  <th className="px-4 py-2">Số lượng</th>
                </tr>
              </thead>
              <tbody>
                {order?.order_details?.length > 0 &&
                  order.order_details.map((item, index) => (
                    <tr key={item.id}>
                      <td className="border p-2 text-center">{index + 1}</td>
                      <td className="border p-2 text-center">{item.product_id}</td>
                      <td className="border p-2 text-center">${item.price}</td>
                      <td className="border p-2 text-center">{item.quantity}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="mt-5 flex items-center justify-end w-full">
              <div className="flex gap-5 items-center">
                <span className="font-bold">Tổng tiền: </span>
                <span className="font-bold text-orange">${order.total_amount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
