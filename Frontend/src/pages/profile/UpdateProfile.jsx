import FormUpdateInfo from './components/FormUpdateInfo';
import SidebarProfile from './components/SidebarProfile';

const UpdateProfile = () => {
  return (
    <main className="py-[50px] bg-[#f6f6f6]">
      <div className="container-page">
        <div>
          <div className="flex gap-[30px]">
            <SidebarProfile />
            <div className="w-3/4">
              <div className="p-[30px] rounded-[20px] bg-white">
                <FormUpdateInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UpdateProfile;
