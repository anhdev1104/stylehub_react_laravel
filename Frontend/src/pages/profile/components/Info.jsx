import { AuthContext } from '@/contexts/AuthContext';
import { useContext } from 'react';

const Info = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex-shrink-0 flex-grow-0 basis-auto w-full mt-[30px]">
      <h2 className="section-heading section-heading-3">Account info</h2>
      <p className="section-desc-1 mb-4">Addresses, contact information and password</p>
      <div className="flex flex-wrap justify-between -mx-[15px]">
        <div className="w-2/4 px-[15px] mb-[30px] max-lg:w-full">
          <article className="flex items-center gap-[10px] p-[10px] rounded-[10px] bg-[#f6f6f6] overflow-hidden">
            <div className="p-[18px] rounded-lg bg-white">
              <img src="/assets/icons/mail-info.svg" alt="" />
            </div>
            <div>
              <h3 className="section-heading-4 max-md:text-[18px]">Email Address</h3>
              <p className="section-desc-2 profile-info__desc">{user?.email}</p>
            </div>
          </article>
        </div>

        <div className="w-2/4 px-[15px] mb-[30px] max-lg:w-full">
          <article className="flex items-center gap-[10px] p-[10px] rounded-[10px] bg-[#f6f6f6] overflow-hidden">
            <div className="p-[18px] rounded-lg bg-white">
              <img src="/assets/icons/phone-info.svg" alt="" />
            </div>
            <div>
              <h3 className="section-heading-4 max-md:text-[18px]">Phone number</h3>
              <p className="section-desc-2">{user?.phone || 'Not updated yet'}</p>
            </div>
          </article>
        </div>

        <div className="w-2/4 px-[15px] mb-[30px] max-lg:w-full">
          <article className="flex items-center gap-[10px] p-[10px] rounded-[10px] bg-[#f6f6f6] overflow-hidden">
            <div className="p-[18px] rounded-lg bg-white">
              <img src="/assets/icons/location-info.svg" alt="" />
            </div>
            <div>
              <h3 className="section-heading-4 max-md:text-[18px]">Add an address</h3>
              <p className="section-desc-2">{user?.address || 'Not updated yet'}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Info;
