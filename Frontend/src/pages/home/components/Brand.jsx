import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/scss/scrollbar';
import { getBrands } from '@/services/brands';

const Brand = () => {
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getBrands();
      setBrandList(data);
    })();
  }, []);

  return (
    <div className="mt-[150px] max-md:mt-10">
      <section>
        <h2 className="w-[35%] section-heading section-heading-2 max-lg:w-[55%] max-md:w-full">Explore from popular brands</h2>
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
              <div className="flex-grow-0 flex-shrink-0 basis-auto px-[15px] group">
                <div className="w-full h-[210px] flex items-center justify-center bg-yellowLighter transition-all ease-in-out duration-300 brand-wrap__box">
                  <img src={`${brand.brand_image}`} alt="" className="w-[150px] h-[150px] object-contain" />
                </div>
                <h3 className="mt-[18px] text-center transition-all hover:text-green section-heading-4 group-hover:text-green">
                  {brand.brand_name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
