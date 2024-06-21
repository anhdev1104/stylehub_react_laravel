import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import OurService from './components/OurService';
import ProductListCate from './components/ProductListCate';
import StyleBoy from './components/StyleBoy';
import ProductList from '@/components/products/ProductList';
import TextSlide from './components/TextSlide';
import Seller from './components/Seller';
import Brand from './components/Brand';
import Feedback from './components/Feedback';
import Blog from './components/Blog';
import Subscribe from './components/Subscribe';
import Button from '@/components/button';
import { getProductType } from '@/services/products';
import { ProductItemSkeleton } from '@/components/products/ProductItem';

const HomePage = () => {
  const [productsNew, setProductsNew] = useState([]);
  const [productsPopular, setProductsPopular] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const dataProductsNew = await getProductType('new-products');
      const dataProductsPopular = await getProductType('popular-products');
      setProductsNew(dataProductsNew);
      setProductsPopular(dataProductsPopular);
      setLoading(false);
    })();
  }, []);

  return (
    <main>
      <Banner />
      <div className="container-page lg:mt-[-100px] max-lg:w-[700px] max-md:w-[90%] max-sm:w-full">
        <StyleBoy />
        <OurService />
        <ProductListCate />
        <div className="mt-[150px] max-md:mt-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="section-heading section-heading-2 capitalize">Our New Products</h2>
              <p className="w-[70%] mt-[18px] text-light section-desc-1">
                Browse our new products and make your day more beautiful and glorious.
              </p>
            </div>
            <Button classname="max-md:hidden">Browse All</Button>
          </div>
          {loading ? (
            <div className="flex -mx-[15px] mt-10">
              {new Array(3).fill(0).map((item, index) => (
                <ProductItemSkeleton key={index} />
              ))}
            </div>
          ) : (
            <ProductList data={productsNew} isTag="New Product" />
          )}
        </div>
        <div className="mt-[150px] max-md:mt-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="section-heading section-heading-2 capitalize">Meet our popular</h2>
              <p className="w-[70%] mt-[18px] text-light section-desc-1">
                Browse our most popular products and make your day more beautiful and glorious.
              </p>
            </div>
            <Button classname="max-md:hidden">Browse All</Button>
          </div>
          {loading ? (
            <div className="flex -mx-[15px] mt-10">
              {new Array(3).fill(0).map((item, index) => (
                <ProductItemSkeleton key={index} />
              ))}
            </div>
          ) : (
            <ProductList data={productsPopular} isTag="Popular Product" />
          )}
        </div>
      </div>
      <TextSlide />
      <div className="container-page max-lg:w-[700px] max-md:w-[90%] max-sm:w-full">
        <div className="mt-[112px] max-md:mt-5">
          <section className="flex items-end justify-between mb-[70px]">
            <h2 className="w-[35%] section-heading section-heading-2 max-lg:w-[50%] max-md:w-full">
              Hurry, don’t miss out on this offers
            </h2>
            <Button classname="max-md:hidden">Browse All</Button>
          </section>
          <Seller />
        </div>
        <Brand />
        <Feedback />
        <Blog />
        <Subscribe />
      </div>
    </main>
  );
};

export default HomePage;
