import Info from './components/Info';
import SidebarProfile from './components/SidebarProfile';
import Wallet from './components/Wallet';

const Profile = () => {
  return (
    <main className="py-[50px] bg-[#f6f6f6]">
      <div className="container-page">
        <div>
          <div className="flex gap-[30px]">
            <SidebarProfile />
            <div className="w-3/4">
              <div className="p-[30px] rounded-[20px] bg-white">
                <div className="flex flex-wrap">
                  <Wallet />
                  <Info />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
