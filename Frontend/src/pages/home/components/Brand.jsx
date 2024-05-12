import axios from 'axios';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Scrollbar } from 'swiper/modules';
// Import Swiper styles
import 'swiper/scss/scrollbar';

const Brand = () => {
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/brand');
        setBrandList(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <section>
        <h2 className="w-[35%] section-heading section-heading-2">Explore from popular brands</h2>
      </section>

      <div className="brand-slide mt-[70px] -mx-[15px]">
        <Swiper
          grabCursor={true}
          slidesPerView="auto"
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {brandList?.map(brand => (
            <SwiperSlide key={brand.id}>
              <div className="flex-grow-0 flex-shrink-0 basis-auto mb-[55px] px-[15px] group">
                <div className="w-full h-[210px] flex items-center justify-center bg-yellowLighter transition-all ease-in-out duration-300 brand-wrap__box">
                  <img src={`${brand.brandLogo}`} alt="" className="w-[150px] h-[150px] object-contain" />
                </div>
                <h3 className="mt-[18px] text-center transition-all hover:text-green section-heading-4 group-hover:text-green">
                  {brand.brandName}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Brand;
