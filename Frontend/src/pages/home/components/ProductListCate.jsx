import { useEffect, useState } from 'react';
import { getCategories } from '../../../services/categories';
import ProductItem, { ProductItemSkeleton } from '@/components/products/ProductItem';
import { getProductsOnCategory } from '@/services/products';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProductListCate = () => {
  const [products, setProducts] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState(1);
  const [activeTab, setActiveTab] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await getProductsOnCategory(currentTab);
      setLoading(false);
      setProducts(data);
    })();
  }, [currentTab]);

  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setTabs(data);
    })();
  }, []);

  const handleActiveTab = id => {
    setCurrentTab(id);
    setActiveTab(id);
  };

  return (
    <div className="mt-[150px]">
      <div className="js-tabs">
        <div className="flex items-center justify-center gap-[30px]">
          {tabs?.map(tab => (
            <div
              className={`py-[13px] px-[36px] rounded-full border-2 border-green text-lg leading-[1.67] ${
                activeTab === tab.id ? 'text-white bg-green cursor-default' : 'text-dark cursor-pointer'
              }`}
              key={tab.id}
              onClick={() => handleActiveTab(tab.id)}
            >
              {tab.category_name}
            </div>
          ))}
        </div>
        <div className="mt-[70px]">
          {loading && (
            <div className="flex -mx-[15px]">
              {new Array(3).fill(0).map((item, index) => (
                <ProductItemSkeleton key={index} />
              ))}
            </div>
          )}

          <div className="flex flex-wrap -mx-[15px] product-list">
            <Swiper grabCursor={'true'} slidesPerView={'auto'}>
              {!loading &&
                products.length > 0 &&
                products.map(product => (
                  <SwiperSlide key={product.id}>
                    <ProductItem data={product} slide />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListCate;
