import Info from './components/Info';
import SidebarProfile from './components/SidebarProfile';
import Wallet from './components/Wallet';

const Profile = () => {
  return (
    <main className="py-[50px] bg-[#f6f6f6]">
      <div className="container-page">
        <div className="max-xl:w-[1000px] max-xl:mx-auto max-lg:w-[650px] max-md:w-[500px] max-sm:w-[95%]">
          <div className="flex gap-[30px] max-md:flex-col">
            <SidebarProfile />
            <div className="w-3/4 max-lg:w-[60%] max-md:mx-auto max-md:w-[90%] max-sm:w-full">
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
