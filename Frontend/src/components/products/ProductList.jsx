import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from './ProductItem';
import { Scrollbar } from 'swiper/modules';

const ProductList = ({ data }) => {
  return (
    <>
      <div className="flex flex-wrap -mx-[15px] mt-10 product-list">
        <Swiper
          grabCursor={true}
          slidesPerView="auto"
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {data.length > 0 &&
            data.map(product => (
              <SwiperSlide key={product.id}>
                <ProductItem data={product} slide />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {/* <div className="separate w-full h-[4px] relative !mt-[55px] bg-yellowLighter"></div> */}
    </>
  );
};

export default ProductList;
