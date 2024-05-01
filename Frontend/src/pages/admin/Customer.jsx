import { useEffect, useRef, useState } from 'react';
import { deleteAccount, getAccounts } from '../../services/account';
import Toast from '../../components/Toast';

const Customer = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const accessToken = localStorage.getItem('accessToken');

      const data = await getAccounts(accessToken);

      setUsers(data);
    })();
  }, []);

  const handleDeleteUser = async e => {
    const isDelete = confirm('Bạn muốn xoá tài khoản này ?');
    if (!isDelete) return;
    const id = e.target.dataset.id;
    if (id) {
      const accessToken = localStorage.getItem('accessToken');
      await deleteAccount(id, accessToken);
      setUsers(currentUser => currentUser.filter(user => user._id !== id));
      Toast(toastRef, {
        title: 'Đã xoá !',
        message: 'Khánh hàng đã được xoá.',
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
        <div className="bg-white p-8 rounded shadow-md w-full">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Tên khách hàng</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Số điện thoại</th>
                  <th className="px-4 py-2">Địa chỉ</th>
                  <th className="px-4 py-2">Vai trò</th>
                  <th className="px-4 py-2">Tùy chọn</th>
                </tr>
              </thead>
              <tbody>
                {users?.map(user => (
                  <tr key={user._id}>
                    <td className="border p-2 text-center">{user.fullname}</td>
                    <td className="border p-2 text-center">{user.email}</td>
                    <td className="border p-2 text-center">{user.phonenumber}</td>
                    <td className="border p-2 text-center">{user.address}</td>
                    <td className="border p-2 text-center">
                      {(user.role === 'customer' && 'Khách hàng') || (user.role === 'admin' && 'Quản trị viên')}
                    </td>
                    <td className="border p-2 text-center w-28">
                      <button
                        data-id={user._id}
                        className="btn-delete min-w-24 p-2 rounded-md bg-red-500 hover:bg-red-600 text-white text-center"
                        onClick={handleDeleteUser}
                      >
                        Block
                      </button>
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
