import { AuthContext } from '@/contexts/AuthContext';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SidebarAdmin = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    toast.success('Log out successfully !');
    navigate('');
  };
  return (
    <div className="fixed top-0 left-0 bottom-0 bg-gray-800 w-64">
      <div className="flex items-center justify-center bg-primary h-20">
        <img src="/assets/img/logo.png" className="w-[150px]" alt="logo" />
      </div>
      <ul className="">
        <li className="px-6 py-4 text-gray-400 border-t border-gray-700">
          <Link to="/admin" className="block text-gray-200 hover:text-white">
            <i className="fa-solid fa-house pr-2"></i>
            Dashboard
          </Link>
        </li>
        <li className="px-6 py-4 text-gray-400 border-t border-gray-700">
          <Link to="/admin/products" className="block text-gray-200 hover:text-white">
            <i className="fa-solid fa-shirt pr-2"></i>
            Quản lý sản phẩm
          </Link>
        </li>
        <li className="px-6 py-4 text-gray-400 border-t border-gray-700">
          <Link to="/admin/categories" className="block text-gray-200 hover:text-white">
            <i className="fa-solid fa-list pr-2"></i>
            Quản lý danh mục
          </Link>
        </li>
        <li className="px-6 py-4 text-gray-400 border-t border-gray-700">
          <Link to="/admin/customer" className="block text-gray-200 hover:text-white">
            <i className="fa-solid fa-users pr-2"></i>
            Quản lý khách hàng
          </Link>
        </li>
        <li className="px-6 py-4 text-gray-400 border-t border-gray-700">
          <Link to="/admin/orders" className="block text-gray-200 hover:text-white">
            <i className="fa-solid fa-cart-shopping pr-2"></i>
            Quản lý đơn hàng
          </Link>
        </li>
        <li className="px-6 py-4 text-gray-400 border-t border-gray-700">
          <button className="block text-gray-200 hover:text-white" onClick={handleLogout}>
            <i className="fa-solid fa-right-from-bracket pr-2"></i>
            Đăng xuất
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
