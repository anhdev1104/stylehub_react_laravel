import { Outlet } from 'react-router-dom';
import SidebarAdmin from '../pages/admin/components/SidebarAdmin';

const AdminLayout = () => {
  return (
    <>
      <main className="bg-gray-200">
        <div className="flex h-screen bg-gray-200 ml-[256px]">
          <SidebarAdmin />
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between h-20 px-6 bg-white border-b flex-shrink-0">
              <span className="text-xl font-semibold px-4">Bảng điều khiển</span>
              <div className="rounded-[100rem] w-11 h-11 overflow-hidden">
                <img src="https://avatars.githubusercontent.com/u/121429011?v=4" alt="" className="object-cover" />
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
