import { useEffect, useState } from 'react';
import { getAccounts } from '@/services/auth';

const Customer = () => {
  const [users, setUsers] = useState([]);
  console.log('🚀 ~ Customer ~ users:', users);
  useEffect(() => {
    (async () => {
      const data = await getAccounts();
      setUsers(data);
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
                  <th className="px-4 py-2">Hình đại diện</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Số điện thoại</th>
                  <th className="px-4 py-2">Địa chỉ</th>
                  <th className="px-4 py-2">Vai trò</th>
                  <th className="px-4 py-2">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {users?.map(user => (
                  <tr key={user.id}>
                    <td className="border p-2 text-center">{user.user_name}</td>
                    <td className="border p-2 text-center">
                      <img src={user.avatar} alt="" className="w-20 h-20 mx-auto rounded-full" />
                    </td>
                    <td className="border p-2 text-center">{user.email}</td>
                    <td className="border p-2 text-center">{user.phonenumber || 'Chưa cập nhập'}</td>
                    <td className="border p-2 text-center">{user.address || 'Chưa cập nhập'}</td>
                    <td className="border p-2 text-center">
                      {(user.role.name === 'customer' && 'Khách hàng') ||
                        (user.role.name === 'admin' && 'Quản trị viên')}
                    </td>
                    <td className="border p-2 text-center">
                      {user.status === 'active' ? 'Đã xác thực' : 'Chưa xác thực' || 'Chưa cập nhập'}
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

export default Customer;
