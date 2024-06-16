import { AuthContext } from '@/contexts/AuthContext';
import { format } from 'date-fns';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const SidebarProfile = () => {
  const { user } = useContext(AuthContext);
  const formattedDate = user?.updated_at && format(new Date(user?.updated_at), 'yyyy-MM-dd HH:mm:ss');

  return (
    <div className="flex-shrink-0 flex-grow-0 basis-auto w-1/4 max-lg:w-[40%] max-md:mx-auto max-md:w-[90%] max-sm:w-full">
      <aside className="pb-[30px] rounded-[20px] bg-white shadoư-xs overflow-hidden">
        <div className="flex flex-col items-center pt-[35px] px-5 profile-user py-2">
          <img
            src={user?.preview || user?.avatar}
            alt=""
            className="w-[121px] h-[121px] border-[5px] border-[#ffffff33] rounded-full object-cover shadow-sm bg-[#ccc]"
          />
          <h1 className="mt-[15px] text-lg font-bold text-white">{user?.user_name}</h1>
          <p className="mt-1 text-[15px] font-medium leading-[1.46] text-white">Registered: {formattedDate || ''}</p>
        </div>

        <div className="mt-[30px] px-[30px]">
          <h3 className="text-lg font-medium">Manage Account</h3>
          <ul className="mt-[11px]">
            <li>
              <Link
                to={`/updateinfo/${user?.id}`}
                className="flex items-center gap-[10px] h-[32px] px-1 rounded text-[15px] leading-[1.46] transition-all hover:bg-[#ebebeb]"
              >
                <span className="flex items-center justify-center w-6 h-full">
                  <img src="/assets/icons/user-profile.svg" alt="" className="icon" />
                </span>
                Personal info
              </Link>
            </li>
            <li>
              <a
                href="#!"
                className="flex items-center gap-[10px] h-[32px] px-1 rounded text-[15px] leading-[1.46] transition-all hover:bg-[#ebebeb]"
              >
                <span className="flex items-center justify-center w-6 h-full">
                  <img src="/assets/icons/location-info.svg" alt="" className="icon" />
                </span>
                Addresses
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="flex items-center gap-[10px] h-[32px] px-1 rounded text-[15px] leading-[1.46] transition-all hover:bg-[#ebebeb]"
              >
                <span className="flex items-center justify-center w-6 h-full">
                  <img src="/assets/icons/mail-info.svg" alt="" className="icon" />
                </span>
                Communications & privacy
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-[30px] px-[30px]">
          <h3 className="text-lg font-medium leading-[1.46]">My items</h3>
          <ul className="mt-[11px]">
            <li>
              <a
                href="#!"
                className="flex items-center gap-[10px] h-[32px] px-1 rounded text-[15px] leading-[1.46] transition-all hover:bg-[#ebebeb]"
              >
                <span className="flex items-center justify-center w-6 h-full">
                  <img src="/assets/icons/reorder.svg" alt="" className="icon" />
                </span>
                Reorder
              </a>
            </li>
            <li>
              <a
                href="./with-list-login.html"
                className="flex items-center gap-[10px] h-[32px] px-1 rounded text-[15px] leading-[1.46] transition-all hover:bg-[#ebebeb]"
              >
                <span className="flex items-center justify-center w-6 h-full">
                  <img src="/assets/icons/heart.svg" alt="" />
                </span>
                Lists
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="flex items-center gap-[10px] h-[32px] px-1 rounded text-[15px] leading-[1.46] transition-all hover:bg-[#ebebeb]"
              >
                <span className="flex items-center justify-center w-6 h-full">
                  <img src="/assets/icons/registries.svg" alt="" className="icon" />
                </span>
                Gifts
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-[30px] px-[30px]">
          <h3 className="text-lg font-medium leading-[1.46]">Subscriptions & plans</h3>
          <ul className="mt-[11px]">
            <li>
              <a
                href="#!"
                className="flex items-center gap-[10px] h-[32px] px-1 rounded text-[15px] leading-[1.46] transition-all hover:bg-[#ebebeb]"
              >
                <span className="flex items-center justify-center w-6 h-full">
                  <img src="/assets/icons/protection.svg" alt="" className="icon" />
                </span>
                Protection plans
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-[30px] px-[30px]">
          <h3 className="text-lg font-medium leading-[1.46]">Customer Service</h3>
          <ul className="mt-[11px]">
            <li>
              <a
                href="#!"
                className="flex items-center gap-[10px] h-[32px] px-1 rounded text-[15px] leading-[1.46] transition-all hover:bg-[#ebebeb]"
              >
                <span className="flex items-center justify-center w-6 h-full">
                  <img src="/assets/icons/help.svg" alt="" className="icon" />
                </span>
                Help
              </a>
            </li>
            <li>
              <a
                href="#!"
                className="flex items-center gap-[10px] h-[32px] px-1 rounded text-[15px] leading-[1.46] transition-all hover:bg-[#ebebeb]"
              >
                <span className="flex items-center justify-center w-6 h-full">
                  <img src="/assets/icons/terms.svg" alt="" className="icon" />
                </span>
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SidebarProfile;
