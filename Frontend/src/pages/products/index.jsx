import { useState } from 'react';
import ProductRadius from '../../layouts/products/ProductRadius';
import Button from '../../components/button';

const ProductsPage = () => {
  const [showDropdown, setShowDropDown] = useState(false);

  return (
    <main className="container-page">
      <div className="pt-[100px] pb-[150px]">
        <section className="flex items-center flex-col">
          <h2 className="section-heading section-heading-2">List Of Men&apos;s Products</h2>
          <p className="mt-5 section-desc-2">
            We hear what you need. We plan, design & develop visionary concept websites.
          </p>
        </section>
        <div className="mt-[70px]">
          <div className="flex gap-[30px]">
            <div className="flex-grow-0 flex-shrink-0 basis-auto w-[75%]">
              <div className="flex items-center">
                <div className="flex items-center w-full justify-between mb-[50px]">
                  <p className="text-light">Search 1-15 of 22 results</p>
                  <div className="relative">
                    <button
                      className="flex items-center gap-[21px] py-2 px-[15px] border border-[#c4d1d0] text-dark rounded-[5px] section-desc-1"
                      onClick={() => setShowDropDown(!showDropdown)}
                    >
                      Sort by latest
                      <img src="../src/assets/icons/arrow-down-small.svg" alt="" />
                    </button>
                    <div
                      className={`w-full absolute left-0 -translate-y-1 z-10 flex flex-col gap-[15px] py-2 px-[15px] bg-white border border-[#c4d1d0] rounded-b-[5px] ${
                        showDropdown ? 'block' : 'hidden'
                      }`}
                      style={{ borderTop: 'initial' }}
                    >
                      <a href="#!" className="section-desc-2">
                        A to Z
                      </a>
                      <a href="#!" className="section-desc-2">
                        Price
                      </a>
                      <a href="#!" className="section-desc-2">
                        New
                      </a>
                      <a href="#!" className="section-desc-2">
                        Sale
                      </a>
                      <a href="#!" className="section-desc-2">
                        Best Seller
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center flex-wrap -mx-[15px]">
                {new Array(9).fill(0).map((item, index) => (
                  <ProductRadius key={index} />
                ))}
                {/* PAGINATION */}
              </div>
            </div>
            <div className="flex-shrink-0 flex-grow-0 w-[25%]">
              <div className="w-full py-[25px] px-[30px] rounded-[15px] border border-[#e5e5e5] bg-white">
                <h3 className="section-heading-4">Catagoryes</h3>
                <ul className="mt-[25px]">
                  <li className="pb-[5px] border-b border-[#e5e5e5] text-black text-base leading-[1.67] py-2 cursor-pointer product-left__item--active">
                    All Category(42)
                  </li>
                  <li className="pb-[5px] border-b border-[#e5e5e5] text-black text-base leading-[1.67] py-2 cursor-pointer">
                    Man Cloth(15)
                  </li>
                  <li className="pb-[5px] border-b border-[#e5e5e5] text-black text-base leading-[1.67] py-2 cursor-pointer">
                    Man T-shirt(10)
                  </li>
                  <li className="pb-[5px] border-b border-[#e5e5e5] text-black text-base leading-[1.67] py-2 cursor-pointer">
                    Man Shoes(9)
                  </li>
                  <li className="pb-[5px] border-b border-[#e5e5e5] text-black text-base leading-[1.67] py-2 cursor-pointer">
                    Man Cap(5)
                  </li>
                  <li className="pb-[5px] text-black text-base leading-[1.67] py-2 cursor-pointer">Man Glass(3)</li>
                </ul>
              </div>

              <div className="w-full py-[25px] px-[30px] rounded-[15px] border border-[#e5e5e5] bg-white mt-[30px]">
                <h3 className="section-heading-4">Newsletter</h3>
                <p className="mt-[5px] section-desc-3">We won’t spam you :)</p>

                <form action="" className="flex flex-col gap-[15px] mt-[25px]">
                  <input
                    className="py-[11px] px-[15px] rounded-[5px] border border-[#e5e5e5] bg-white text-dark text-sm leading-[1.71] outline-none"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                  />
                  <input
                    className="py-[11px] px-[15px] rounded-[5px] border border-[#e5e5e5] bg-white text-dark text-sm leading-[1.71] outline-none"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                  {/* <button className="product-left__btn-bot btn-1"></button> */}
                  <Button classname="rounded-[5px] text-sm">Subscribe</Button>
                </form>
              </div>

              <div className="product-slide">
                {/* <!-- Slide 1 --> */}
                <div className="product-slide__wrap mySlides">
                  <img src="../src/assets/img/slide/men/slide1.jpg" alt="" className="product-slide__img" />
                </div>
                {/* <!-- Slide 2 --> */}
                <div className="product-slide__wrap mySlides">
                  <img src="../src/assets/img/slide/men/slide2.jpg" alt="" className="product-slide__img" />
                </div>
                {/* <!-- Slide 3 --> */}
                <div className="product-slide__wrap mySlides">
                  <img src="../src/assets/img/slide/men/slide3.jpg" alt="" className="product-slide__img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
