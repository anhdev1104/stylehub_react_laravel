import { getOrders } from '@/services/orders';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrdersAdmin = () => {
  const [orders, setOrders] = useState([]);
  console.log('🚀 ~ OrdersAdmin ~ orders:', orders);

  useEffect(() => {
    (async () => {
      const data = await getOrders();
      data && setOrders(data);
    })();
  }, []);

  return (
    <>
      <div className="flex flex-1 px-6 py-8 bg-gray-200">
        <div className="bg-white p-8 rounded shadow-md w-full">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Tên khách hàng</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Số điện thoại</th>
                  <th className="px-4 py-2">Địa chỉ</th>
                  <th className="px-4 py-2">Ghi chú</th>
                  <th className="px-4 py-2">Phương thức</th>
                  <th className="px-4 py-2">Trạng thái</th>
                  <th className="px-4 py-2">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 &&
                  orders?.map(item => (
                    <tr key={item.id}>
                      <td className="border p-2 text-center">{item.user.user_name}</td>
                      <td className="border p-2 text-center">{item.user.email}</td>
                      <td className="border p-2 text-center">{item.number_phone}</td>
                      <td className="border p-2 text-center">{item.shipping_address}</td>
                      <td className="border p-2 text-center">{item.order_note}</td>
                      <td className="border p-2 text-center">{item.payment.payment_method}</td>
                      <td className="border p-2 text-center">{item.status}</td>
                      <td className="border p-2 text-center">
                        <Link
                          to={`/admin/orders/${item.id}`}
                          className="block rounded-md p-2 bg-blue-500 hover:bg-blue-600 text-white text-center mb-1"
                        >
                          Chi tiết
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersAdmin;
