import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from './ProductItem';
import { Scrollbar } from 'swiper/modules';

const ProductList = ({ data, isTag }) => {
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
                <ProductItem data={product} isTag={isTag} slide />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductList;
