import axios from 'axios';
import ProductList from '../../layouts/products/ProductList';
import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import TypeProducts from '../../layouts/typeproducts/TypeProducts';
import Button from '../../components/button/Button';
import TextSlide from './components/TextSlide';
import Brand from './components/Brand';
import Service from './components/Service';
import Blog from './components/Blog';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [typeProducts, setTypeProduts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/products');
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/typeproduct');
        setTypeProduts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // filter category product
  const productPopular = products.filter(product => product.category === 'popular');
  const productNew = products.filter(product => product.category === 'newproduct');
  const productBest = products.filter(product => product.category === 'bestproduct');

  return (
    <main>
      <Banner />

      <div className="container-page">
        <TypeProducts typeProducts={typeProducts} />
        <div className="mt-[150px]">
          <ProductList
            headingList="Our popular products"
            descList="Browse our most popular products and make your day more beautiful and glorious Browse All"
            data={productPopular}
          />

          <div className="mt-[150px]">
            <ProductList
              headingList="Our New Products"
              descList="Browse our new products and make your day more beautiful and glorious."
              data={productNew}
            />
          </div>

          <div className="mt-[150px]">
            <ProductList
              headingList="Meet our best sellers"
              descList="Browse our most popular products and make your day more beautiful and glorious"
              data={productBest}
            />
          </div>
        </div>
      </div>

      <TextSlide />

      {/* Seller  */}
      <div className="container-page">
        <div className="mt-[112px]">
          <section className="flex items-end justify-between mb-[70px]">
            <h2 className="w-[35%] section-heading section-heading-2">Hurry, don’t miss out on this offers</h2>
            <Button>Browse All</Button>
          </section>
          <div className="flex flex-wrap -mx-[15px] -mt-[30px]">
            <div className="flex-grow-0 flex-shrink-0 basis-auto w-[66.6666666667%] px-[15px] mt-[30px]">
              <img src="./src/assets/img/home/sale/sale-banner.png" alt="" className="w-full h-[518px] object-cover" />
            </div>

            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div>
                <div className="w-full h-[310px] relative" style={{ background: '#d5e3e8' }}>
                  <a href="#!">
                    <img src="./src/assets/img/home/sale/sale1.png" alt="" className="w-full h-full object-contain" />
                  </a>
                  <div className="w-full absolute left-0 bottom-0 py-[15px] px-[35px] bg-yellow hidden">
                    <p className="text-[18px] font-semibold leading-relaxed">Added to wish list</p>
                    <a href="#!" className="text-[18px] font-semibold leading-relaxed">
                      View
                    </a>
                    <button className="ml-5">
                      <img src="./src/assets/icons/close.svg" alt="" />
                    </button>
                  </div>
                  <p className="w-full absolute left-0 top-2/4 py-[15px] text-center bg-orange text-lg font-semibold text-white">
                    OUT OF STOCK
                  </p>
                </div>
                <div className="flex items-center justify-between mt-5">
                  <p className="section-desc-3">Furniture</p>
                  <div className="cursor-pointer">
                    <img src="./src/assets/icons/heart.svg" alt="" />
                  </div>
                </div>
                <a href="#!">
                  <h3 className="mt-1 section-heading-4">Modern Black Chair</h3>
                </a>
                <div className="flex items-center justify-between py-3 mb-7">
                  <div className="flex items-center gap-2">
                    <img src="./src/assets/icons/star-small.svg" alt="" />
                    <p className="section-desc-1">5.0 (132)</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold text-light line-through">$110</p>
                    <p className="text-lg font-semibold text-orange">$90</p>
                  </div>
                </div>
                <Button>Add to cart</Button>
              </div>
            </article>
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div>
                <div className="w-full h-[310px] relative" style={{ background: '#d1edea' }}>
                  <a href="#!">
                    <img src="./src/assets/img/home/sale/sale2.png" alt="" className="w-full h-full object-contain" />
                  </a>
                  <div className="w-full absolute left-0 bottom-0 py-[15px] px-[35px] bg-yellow hidden">
                    <p className="text-[18px] font-semibold leading-relaxed">Added to wish list</p>
                    <a href="#!" className="text-[18px] font-semibold leading-relaxed">
                      View
                    </a>
                    <button className="ml-5">
                      <img src="./src/assets/icons/close.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-5">
                  <p className="section-desc-3">Women-Cloths</p>
                  <div className="cursor-pointer">
                    <img src="./src/assets/icons/heart.svg" alt="" />
                  </div>
                </div>
                <a href="#!">
                  <h3 className="mt-1 section-heading-4">Modern Green Sweater</h3>
                </a>
                <div className="flex items-center justify-between py-3 mb-7">
                  <div className="flex items-center gap-2">
                    <img src="./src/assets/icons/star-small.svg" alt="" />
                    <p className="section-desc-1">5.0 (37)</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold text-light line-through">$110</p>
                    <p className="text-lg font-semibold text-orange">$85</p>
                  </div>
                </div>
                <Button>Add to cart</Button>
              </div>
            </article>
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div>
                <div className="w-full h-[310px] relative" style={{ background: '#ffadb2' }}>
                  <a href="#!">
                    <img src="./src/assets/img/home/sale/sale3.png" alt="" className="w-full h-full object-contain" />
                  </a>
                  <div className="w-full absolute left-0 bottom-0 py-[15px] px-[35px] bg-yellow hidden">
                    <p className="text-[18px] font-semibold leading-relaxed">Added to wish list</p>
                    <a href="#!" className="text-[18px] font-semibold leading-relaxed">
                      View
                    </a>
                    <button className="ml-5">
                      <img src="./src/assets/icons/close.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-5">
                  <p className="section-desc-3">Women-Fashion</p>
                  <div className="cursor-pointer">
                    <img src="./src/assets/icons/heart.svg" alt="" />
                  </div>
                </div>
                <a href="#!">
                  <h3 className="mt-1 section-heading-4">Modern Headphones</h3>
                </a>
                <div className="flex items-center justify-between py-3 mb-7">
                  <div className="flex items-center gap-2">
                    <img src="./src/assets/icons/star-small.svg" alt="" />
                    <p className="section-desc-1">5.0 (49)</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold text-light line-through">$180</p>
                    <p className="text-lg font-semibold text-orange">$90</p>
                  </div>
                </div>
                <Button>Add to cart</Button>
              </div>
            </article>
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div>
                <div className="w-full h-[310px] relative" style={{ background: '#f7f5eb' }}>
                  <a href="#!">
                    <img src="./src/assets/img/home/sale/sale4.png" alt="" className="w-full h-full object-contain" />
                  </a>
                  <div className="w-full absolute left-0 bottom-0 py-[15px] px-[35px] bg-yellow hidden">
                    <p className="text-[18px] font-semibold leading-relaxed">Added to wish list</p>
                    <a href="#!" className="text-[18px] font-semibold leading-relaxed">
                      View
                    </a>
                    <button className="ml-5">
                      <img src="./src/assets/icons/close.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-5">
                  <p className="section-desc-3">Women-Fashion</p>
                  <div className="cursor-pointer">
                    <img src="./src/assets/icons/heart.svg" alt="" />
                  </div>
                </div>
                <a href="#!">
                  <h3 className="mt-1 section-heading-4">Modern Purse Bag</h3>
                </a>
                <div className="flex items-center justify-between py-3 mb-7">
                  <div className="flex items-center gap-2">
                    <img src="./src/assets/icons/star-small.svg" alt="" />
                    <p className="section-desc-1">5.0 (69)</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold text-light line-through">$210</p>
                    <p className="text-lg font-semibold text-orange">$105</p>
                  </div>
                </div>
                <Button>Add to cart</Button>
              </div>
            </article>
          </div>
        </div>

        <div className="mt-[150px]">
          <Brand />
        </div>
      </div>
      <Service />
      <Blog />
      {/* Subscribe  */}
      <div className="mt-[150px] bg-green">
        <div className="container-page">
          <div className="flex items-center justify-between py-[100px]">
            <section className="w-[35%]">
              <h2 className="text-white section-heading-2 section-heading">
                Subscribe our newsletter to get latest product updates
              </h2>
              <form className="flex items-center gap-4 mt-[38px]">
                <input
                  type="email"
                  className="w-[297px] h-[60px] bg-green2 outline-none px-4 leading-7 text-white"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="w-[157px] h-[60px] bg-yellow text-green text-lg font-semibold hover:opacity-80 translate-y-0 focus:translate-y-1"
                >
                  Subscribe
                </button>
              </form>
            </section>
            <div className="">
              <img
                src="./src/assets/img/home/subscribe/sub1.png"
                alt=""
                className="ml-auto w-[470px] h-[470px] object-cover "
              />
              <div className="w-[570px] relative">
                <img
                  src="./src/assets/img/home/subscribe/sub-missing.png"
                  alt=""
                  className="absolute w-full z-[1] bottom-0 left-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
