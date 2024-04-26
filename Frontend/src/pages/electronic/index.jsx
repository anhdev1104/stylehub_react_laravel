import { useEffect, useState } from 'react';
import Button from '../../components/button/Button';
import TypeProducts from '../../layouts/typeproducts/TypeProducts';
import axios from 'axios';

const Electronic = () => {
  const [typeProductElectronic, setTypeProdutElectronic] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/typeproduct_electronic');
        setTypeProdutElectronic(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <main>
      {/* <!-- Banner --> */}
      <div className="bg-yellowLighter">
        <div className="container-page">
          <div className="flex items-start gap-[200px] relative pt-[103px] pb-[160px]">
            <section className="flex-shrink-0 w-2/4">
              <h1 className="mb-5 section-heading section-heading-1">Choose Your Latest Electronics Products</h1>
              <p className="w-[70%] text-dark section-desc-1">
                The most wanted styles is waiting for you. Find the best styles of modern shoes for you. Still, the
                second option holds promised. could make the tagline.
              </p>
              <Button classname="max-w-[215px] mt-[34px] rounded-[7px]">Explore Product</Button>
            </section>
            <div className="relative">
              <img
                src="./src/assets/img/electronic/banner/banner2.png"
                alt=""
                className="w-[435px] h-[485px] relative z-[2] rounded-[30px]"
              />
              <img
                src="./src/assets/img/electronic/banner/banner-missing2.1.png"
                alt=""
                className="absolute z-[1] -top-[30px] -left-[30px]"
              />
              <img
                src="./src/assets/img/electronic/banner/banner-missing2.2.png"
                alt=""
                className="absolute z-[1] -right-[30px] -bottom-[30px]"
              />
            </div>
            <div
              className="flex items-center w-full h-[184px] rounded-[10px] bg-white absolute -bottom-[84px] left-0 justify-between"
              style={{ boxShadow: '0px 40px 150px -35px rgba(0, 0, 0, 0.2)' }}
            >
              <div className="gap-[10px] px-[35px] flex items-center">
                <img src="./src/assets/icons/shipping.svg" alt="" />
                <div>
                  <h3 className="text-black text-xl font-semibold">Free Shipping</h3>
                  <p className="mt-[8px] text-dark section-desc-3">Free Shipping On All Order</p>
                </div>
              </div>
              <div className="gap-[10px] px-[35px] flex items-center">
                <img src="./src/assets/icons/support.svg" alt="" />
                <div>
                  <h3 className="text-black text-xl font-semibold">Support 24/7</h3>
                  <p className="mt-[8px] text-dark section-desc-3">Support 24 hours a day</p>
                </div>
              </div>
              <div className="gap-[10px] px-[35px] flex items-center">
                <img src="./src/assets/icons/money.svg" alt="" />
                <div>
                  <h3 className="text-black text-xl font-semibold">Money return</h3>
                  <p className="mt-[8px] text-dark section-desc-3">Back guaramtee under 5 days</p>
                </div>
              </div>
              <div className="gap-[10px] px-[35px] flex items-center">
                <img src="./src/assets/icons/order.svg" alt="" />
                <div>
                  <h3 className="text-black text-xl font-semibold">Order Discounts</h3>
                  <p className="mt-[8px] text-dark section-desc-3">Onevery order over $150</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Product + Menu --> */}
      <div className="container-page">
        {/* <!-- Prod --> */}
        <div className="mt-[234px]">
          {/* <!-- Product Best --> */}
          <div>
            <section className="flex items-center justify-between mt-[70px]">
              <h2 className="section-heading section-heading-2">Our Best Collection</h2>
              <div className="flex items-center gap-5">
                <button className="py-[21px] px-[34px] rounded-[4px] border border-[#005d63] transition-all hover:bg-[#005d63]">
                  <img src="./src/assets/icons/arrow-left-large.svg" alt="" />
                </button>
                <button className="py-[21px] px-[34px] rounded-[4px] border border-[#005d63] transition-all hover:bg-[#005d63] rotate-180">
                  <img src="./src/assets/icons/arrow-left-large.svg" alt="" />
                </button>
              </div>
            </section>
            <div className="mt-[70px]">
              <div className="flex flex-wrap -mx-[15px] -mt-[30px]">
                {/* <!-- Prod Best item 1 --> */}
                <a href="#!" className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
                  <div className="rounded-[15px] bg-white transition-all ease-in-out prod-elec__containers">
                    <div className="pt-5 px-5 pb-[25px]">
                      <img
                        src="./src/assets/img/electronic/product/best/prod-best1.png"
                        alt=""
                        className="w-full object-cover rouded-[15px]"
                      />
                      <div className="flex items-center justify-between mt-5">
                        <h3 className="mt-[5px] section-heading-4">Apple Watch Series 6</h3>
                        <img src="./src/assets/icons/heart-red.svg" alt="" />
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-start gap-2">
                          <img src="./src/assets/icons/star-small.svg" alt="" />
                          <p className="section-desc-1">5.0 (18)</p>
                        </div>
                        <p className="text-lg font-semibold">$110</p>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <!-- Prod Best item 2 --> */}
                <a href="#!" className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
                  <div className="rounded-[15px] bg-white transition-all ease-in-out prod-elec__containers">
                    <div className="pt-5 px-5 pb-[25px]">
                      <img
                        src="./src/assets/img/electronic/product/best/prod-best2.png"
                        alt=""
                        className="w-full object-cover rouded-[15px]"
                      />
                      <div className="flex items-center justify-between mt-5">
                        <h3 className="mt-[5px] section-heading-4">iPhone 14 Max Pro</h3>
                        <img src="./src/assets/icons/heart-red.svg" alt="" />
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-start gap-2">
                          <img src="./src/assets/icons/star-small.svg" alt="" />
                          <p className="section-desc-1">5.0 (18)</p>
                        </div>
                        <p className="text-lg font-semibold">$500</p>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <!-- Prod Best item 3 --> */}
                <a href="#!" className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
                  <div className="rounded-[15px] bg-white transition-all ease-in-out prod-elec__containers">
                    <div className="pt-5 px-5 pb-[25px]">
                      <img
                        src="./src/assets/img/electronic/product/best/prod-best3.png"
                        alt=""
                        className="w-full object-cover rouded-[15px]"
                      />
                      <div className="flex items-center justify-between mt-5">
                        <h3 className="mt-[5px] section-heading-4">Alarm Clock</h3>
                        <img src="./src/assets/icons/heart-red.svg" alt="" />
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-start gap-2">
                          <img src="./src/assets/icons/star-small.svg" alt="" />
                          <p className="section-desc-1">5.0 (18)</p>
                        </div>
                        <p className="text-lg font-semibold">$150</p>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <!-- Prod Best item 4 --> */}
                <a href="#!" className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
                  <div className="rounded-[15px] bg-white transition-all ease-in-out prod-elec__containers">
                    <div className="pt-5 px-5 pb-[25px]">
                      <img
                        src="./src/assets/img/electronic/product/best/prod-best4.png"
                        alt=""
                        className="w-full object-cover rouded-[15px]"
                      />
                      <div className="flex items-center justify-between mt-5">
                        <h3 className="mt-[5px] section-heading-4">Apple Watch Series 5</h3>
                        <img src="./src/assets/icons/heart-red.svg" alt="" />
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-start gap-2">
                          <img src="./src/assets/icons/star-small.svg" alt="" />
                          <p className="section-desc-1">5.0 (14)</p>
                        </div>
                        <p className="text-lg font-semibold">$110</p>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <!-- Prod Best item 5 --> */}
                <a href="#!" className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
                  <div className="rounded-[15px] bg-white transition-all ease-in-out prod-elec__containers">
                    <div className="pt-5 px-5 pb-[25px]">
                      <img
                        src="./src/assets/img/electronic/product/best/prod-best5.png"
                        alt=""
                        className="w-full object-cover rouded-[15px]"
                      />
                      <div className="flex items-center justify-between mt-5">
                        <h3 className="mt-[5px] section-heading-4">Normal Watch</h3>
                        <img src="./src/assets/icons/heart-red.svg" alt="" />
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-start gap-2">
                          <img src="./src/assets/icons/star-small.svg" alt="" />
                          <p className="section-desc-1">5.0 (19)</p>
                        </div>
                        <p className="text-lg font-semibold">$210</p>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <!-- Prod Best item 6 --> */}
                <a href="#!" className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
                  <div className="rounded-[15px] bg-white transition-all ease-in-out prod-elec__containers">
                    <div className="pt-5 px-5 pb-[25px]">
                      <img
                        src="./src/assets/img/electronic/product/best/prod-best6.png"
                        alt=""
                        className="w-full object-cover rouded-[15px]"
                      />
                      <div className="flex items-center justify-between mt-5">
                        <h3 className="mt-[5px] section-heading-4">Headphone</h3>
                        <img src="./src/assets/icons/heart-red.svg" alt="" />
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-start gap-2">
                          <img src="./src/assets/icons/star-small.svg" alt="" />
                          <p className="section-desc-1">5.0 (20)</p>
                        </div>
                        <p className="text-lg font-semibold">$450</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Product New --> */}
          <div className="mt-[150px]">
            <section className="flex items-center justify-between mt-[70px]">
              <h2 className="section-heading section-heading-2">New Arrivals</h2>
              <div className="flex items-center gap-5">
                <button className="py-[21px] px-[34px] rounded border border-[#005d63] bg-white transition-all hover:bg-[#005d63]">
                  <img src="./src/assets/icons/arrow-left-large.svg" alt="" />
                </button>
                <button className="py-[21px] px-[34px] rounded border border-[#005d63] bg-white transition-all hover:bg-[#005d63] rotate-180">
                  <img src="./src/assets/icons/arrow-left-large.svg" alt="" />
                </button>
              </div>
            </section>
            <div className="mt-[70px]">
              <div className="flex flex-wrap -mx-[15px] -mt-[30px]">
                {/* <!-- Prod Best item 1 --> */}
                <a href="#!" className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
                  <div className="rounded-[15px] bg-white transition-all ease-in-out prod-elec__containers">
                    <div className="pt-5 px-5 pb-[25px]">
                      <img
                        src="./src/assets/img/electronic/product/new/prod-new-elec1.png"
                        alt=""
                        className="w-full object-cover rouded-[15px]"
                      />
                      <div className="flex items-center justify-between mt-5">
                        <p className="section-desc-3">New Product</p>
                        <img src="./src/assets/icons/heart-red.svg" alt="" />
                      </div>
                      <h3 className="mt-[5px] section-heading-4">Microsoft Surface Pro</h3>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-start gap-2">
                          <img src="./src/assets/icons/star-small.svg" alt="" />
                          <p className="section-desc-1">5.0 (18)</p>
                        </div>
                        <p className="text-lg font-semibold">$110</p>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <!-- Prod Best item 2 --> */}
                <a href="#!" className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
                  <div className="rounded-[15px] bg-white transition-all ease-in-out prod-elec__containers">
                    <div className="pt-5 px-5 pb-[25px]">
                      <img
                        src="./src/assets/img/electronic/product/new/prod-new-elec2.png"
                        alt=""
                        className="w-full object-cover rouded-[15px]"
                      />
                      <div className="flex items-center justify-between mt-5">
                        <p className="section-desc-3">New Product</p>
                        <img src="./src/assets/icons/heart-red.svg" alt="" />
                      </div>
                      <h3 className="mt-[5px] section-heading-4">Smart Watch</h3>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-start gap-2">
                          <img src="./src/assets/icons/star-small.svg" alt="" />
                          <p className="section-desc-1">5.0 (18)</p>
                        </div>
                        <p className="text-lg font-semibold">$500</p>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <!-- Prod Best item 3 --> */}
                <a href="#!" className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
                  <div className="rounded-[15px] bg-white transition-all ease-in-out prod-elec__containers">
                    <div className="pt-5 px-5 pb-[25px]">
                      <img
                        src="./src/assets/img/electronic/product/new/prod-new-elec3.png"
                        alt=""
                        className="w-full object-cover rouded-[15px]"
                      />
                      <div className="flex items-center justify-between mt-5">
                        <p className="section-desc-3">Apple Laptop</p>
                        <img src="./src/assets/icons/heart-red.svg" alt="" />
                      </div>
                      <h3 className="mt-[5px] section-heading-4">Microsoft Surface Pro</h3>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-start gap-2">
                          <img src="./src/assets/icons/star-small.svg" alt="" />
                          <p className="section-desc-1">5.0 (18)</p>
                        </div>
                        <p className="text-lg font-semibold">$150</p>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <!-- Prod Best item 4 --> */}
                <a href="#!" className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
                  <div className="rounded-[15px] bg-white transition-all ease-in-out prod-elec__containers">
                    <div className="pt-5 px-5 pb-[25px]">
                      <img
                        src="./src/assets/img/electronic/product/new/prod-new-elec4.png"
                        alt=""
                        className="w-full object-cover rouded-[15px]"
                      />
                      <div className="flex items-center justify-between mt-5">
                        <p className="section-desc-3">New Product</p>
                        <img src="./src/assets/icons/heart-red.svg" alt="" />
                      </div>
                      <h3 className="mt-[5px] section-heading-4">Apple Watch Series 5</h3>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-start gap-2">
                          <img src="./src/assets/icons/star-small.svg" alt="" />
                          <p className="section-desc-1">5.0 (14)</p>
                        </div>
                        <p className="text-lg font-semibold">$110</p>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <!-- Prod Best item 5 --> */}
                <a href="#!" className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
                  <div className="rounded-[15px] bg-white transition-all ease-in-out prod-elec__containers">
                    <div className="pt-5 px-5 pb-[25px]">
                      <img
                        src="./src/assets/img/electronic/product/new/prod-new-elec5.png"
                        alt=""
                        className="w-full object-cover rouded-[15px]"
                      />
                      <div className="flex items-center justify-between mt-5">
                        <p className="section-desc-3">New Product</p>
                        <img src="./src/assets/icons/heart-red.svg" alt="" />
                      </div>
                      <h3 className="mt-[5px] section-heading-4">Laptop</h3>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-start gap-2">
                          <img src="./src/assets/icons/star-small.svg" alt="" />
                          <p className="section-desc-1">5.0 (19)</p>
                        </div>
                        <p className="text-lg font-semibold">$210</p>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <!-- Prod Best item 6 --> */}
                <a href="#!" className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
                  <div className="rounded-[15px] bg-white transition-all ease-in-out prod-elec__containers">
                    <div className="pt-5 px-5 pb-[25px]">
                      <img
                        src="./src/assets/img/electronic/product/new/prod-new-elec6.png"
                        alt=""
                        className="w-full object-cover rouded-[15px]"
                      />
                      <div className="flex items-center justify-between mt-5">
                        <p className="section-desc-3">New Product</p>
                        <img src="./src/assets/icons/heart-red.svg" alt="" />
                      </div>
                      <h3 className="mt-[5px] section-heading-4">Smart Watch</h3>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-start gap-2">
                          <img src="./src/assets/icons/star-small.svg" alt="" />
                          <p className="section-desc-1">5.0 (20)</p>
                        </div>
                        <p className="text-lg font-semibold">$450</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Menu --> */}
        <TypeProducts typeProducts={typeProductElectronic} />
        {/* <!-- Prod Best seller --> */}
        <div className="mt-[150px]">
          <section className="flex items-center justify-between mt-[70px]">
            <h2 className="section-heading section-heading-2">Our Best Sellers</h2>
            <div className="flex items-center gap-5">
              <button className="py-[21px] px-[34px] rounded border border-[#005d63] bg-white transition-all hover:bg-[#005d63]">
                <img src="./src/assets/icons/arrow-left-large.svg" alt="" />
              </button>
              <button className="py-[21px] px-[34px] rounded border border-[#005d63] bg-white transition-all hover:bg-[#005d63] rotate-180">
                <img src="./src/assets/icons/arrow-left-large.svg" alt="" />
              </button>
            </div>
          </section>
          <div className="mt-[70px]">
            <div className="flex flex-wrap -mx-[15px] -mt-[30px]">
              {/* <!-- Prod Best item 1 --> */}
              <a href="#!" className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
                <div className="rounded-[15px] bg-white transition-all ease-in-out prod-elec__containers">
                  <div className="pt-5 px-5 pb-[25px]">
                    <img
                      src="./src/assets/img/electronic/product/seller/prod-seller-elec1.png"
                      alt=""
                      className="w-full object-cover rouded-[15px]"
                    />
                    <div className="flex items-center justify-between mt-5">
                      <p className="section-desc-3">Best Sellers</p>
                      <img src="./src/assets/icons/heart-red.svg" alt="" />
                    </div>
                    <h3 className="mt-[5px] section-heading-4">Apple Watch Series 6</h3>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-start gap-2">
                        <img src="./src/assets/icons/star-small.svg" alt="" />
                        <p className="section-desc-1">5.0 (18)</p>
                      </div>
                      <p className="text-lg font-semibold">$110</p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- Prod Best item 2 --> */}
              <a href="#!" className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
                <div className="rounded-[15px] bg-white transition-all ease-in-out prod-elec__containers">
                  <div className="pt-5 px-5 pb-[25px]">
                    <img
                      src="./src/assets/img/electronic/product/seller/prod-seller-elec2.png"
                      alt=""
                      className="w-full object-cover rouded-[15px]"
                    />
                    <div className="flex items-center justify-between mt-5">
                      <p className="section-desc-3">Best Sellers</p>
                      <img src="./src/assets/icons/heart-red.svg" alt="" />
                    </div>
                    <h3 className="mt-[5px] section-heading-4">iPhone 14 Max Pro</h3>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-start gap-2">
                        <img src="./src/assets/icons/star-small.svg" alt="" />
                        <p className="section-desc-1">5.0 (18)</p>
                      </div>
                      <p className="text-lg font-semibold">$500</p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- Prod Best item 3 --> */}
              <a href="#!" className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
                <div className="rounded-[15px] bg-white transition-all ease-in-out prod-elec__containers">
                  <div className="pt-5 px-5 pb-[25px]">
                    <img
                      src="./src/assets/img/electronic/product/seller/prod-seller-elec3.png"
                      alt=""
                      className="w-full object-cover rouded-[15px]"
                    />
                    <div className="flex items-center justify-between mt-5">
                      <p className="section-desc-3">Best Sellers</p>
                      <img src="./src/assets/icons/heart-red.svg" alt="" />
                    </div>
                    <h3 className="mt-[5px] section-heading-4">Alarm Clock</h3>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-start gap-2">
                        <img src="./src/assets/icons/star-small.svg" alt="" />
                        <p className="section-desc-1">5.0 (18)</p>
                      </div>
                      <p className="text-lg font-semibold">$150</p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- Prod Best item 4 --> */}
              <a href="#!" className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
                <div className="rounded-[15px] bg-white transition-all ease-in-out prod-elec__containers">
                  <div className="pt-5 px-5 pb-[25px]">
                    <img
                      src="./src/assets/img/electronic/product/seller/prod-seller-elec4.png"
                      alt=""
                      className="w-full object-cover rouded-[15px]"
                    />
                    <div className="flex items-center justify-between mt-5">
                      <p className="section-desc-3">Best Sellers</p>
                      <img src="./src/assets/icons/heart-red.svg" alt="" />
                    </div>
                    <h3 className="mt-[5px] section-heading-4">Apple Watch Series 5</h3>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-start gap-2">
                        <img src="./src/assets/icons/star-small.svg" alt="" />
                        <p className="section-desc-1">5.0 (14)</p>
                      </div>
                      <p className="text-lg font-semibold">$110</p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- Prod Best item 5 --> */}
              <a href="#!" className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
                <div className="rounded-[15px] bg-white transition-all ease-in-out prod-elec__containers">
                  <div className="pt-5 px-5 pb-[25px]">
                    <img
                      src="./src/assets/img/electronic/product/seller/prod-seller-elec5.png"
                      alt=""
                      className="w-full object-cover rouded-[15px]"
                    />
                    <div className="flex items-center justify-between mt-5">
                      <p className="section-desc-3">Best Sellers</p>
                      <img src="./src/assets/icons/heart-red.svg" alt="" />
                    </div>
                    <h3 className="mt-[5px] section-heading-4">Normal Watch</h3>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-start gap-2">
                        <img src="./src/assets/icons/star-small.svg" alt="" />
                        <p className="section-desc-1">5.0 (19)</p>
                      </div>
                      <p className="text-lg font-semibold">$210</p>
                    </div>
                  </div>
                </div>
              </a>
              {/* <!-- Prod Best item 6 --> */}
              <a href="#!" className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
                <div className="rounded-[15px] bg-white transition-all ease-in-out prod-elec__containers">
                  <div className="pt-5 px-5 pb-[25px]">
                    <img
                      src="./src/assets/img/electronic/product/seller/prod-seller-elec6.png"
                      alt=""
                      className="w-full object-cover rouded-[15px]"
                    />
                    <div className="flex items-center justify-between mt-5">
                      <p className="section-desc-3">Best Sellers</p>
                      <img src="./src/assets/icons/heart-red.svg" alt="" />
                    </div>
                    <h3 className="mt-[5px] section-heading-4">Smart Watch</h3>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-start gap-2">
                        <img src="./src/assets/icons/star-small.svg" alt="" />
                        <p className="section-desc-1">5.0 (20)</p>
                      </div>
                      <p className="text-lg font-semibold">$450</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Deal --> */}
        <div className="flex items-center gap-[130px] mt-[150px]">
          <div className="relative">
            <img
              src="./src/assets/img/electronic/deal/banner.png"
              alt=""
              className="w-[570px] h-[578px] object-contain rounded-lg"
            />
            <img src="./src/assets/icons/balloon-top.svg" alt="" className="absolute top-[78px] right-[22px]" />
            <img src="./src/assets/icons/balloon-bot.svg" alt="" className="absolute right-[53px] bottom-[65px]" />
          </div>
          <section className="w-[35%]">
            <h2 className="section-heading section-heading-2">Beautiful ad templates</h2>
            <p className="mt-[18px] text-lighter leading-relaxed section-desc-2">
              Start with a pre-designed template to create a Facebook ad that`s visually appealing and engaging. Select
              a professionally designed Facebook ad template or create your video ad, then simply customize the content
              to fit your brand.
            </p>
            <Button classname="max-w-[170px] mt-[34px] rounded-lg">Make a Ads</Button>
          </section>
        </div>

        {/* <!-- feedback --> */}
        <div className="mt-[150px]">
          <section className="mx-auto text-center w-[60%]">
            <h2 className="text-[#1e2a39] section-heading section-heading-2">
              Companies that crush customer engagement with us
            </h2>
          </section>
          <div>
            <div>
              {/* <!-- Feedback list 1 --> */}
              <div className="mt-[58px] grid-cols-3 gap-[30px] grid">
                {/* <!-- Feedback item 1 --> */}
                <article className="p-7 rounded-md transition-all hover:scale-100 duration-300 feedback-container">
                  <div className="flex items-center gap-[5px]">
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                  </div>
                  <h3 className="mt-5 text-[#1e2a39] section-heading-4">It reducing cost</h3>
                  <blockquote className="w-[85%] mt-3 text-[#696c74] text-ellipsis line-clamp-4 section-desc-3">
                    &quot;The ChatBot platform has become a key part of our proposition. It`s fully flexible and has
                    allowed us to drive 30% more leads while dramatically reducing our cost to serve.&quot;
                  </blockquote>
                  <div className="flex items-center gap-[13px] mt-[28px]">
                    <img
                      src="./src/assets/img/electronic/feedback/feedback-avt1.jpg"
                      alt=""
                      className="w-[46px] h-[46px] object-cover rounded-full"
                    />
                    <div>
                      <p className="text-[#1e2a39] font-bold leading-[1.75]">Sarah Rose</p>
                      <p className="text-[#a4a7b0] section-desc-3">Co- Founder of Web Design</p>
                    </div>
                  </div>
                </article>
                {/* <!-- Feedback item 2 --> */}
                <article className="p-7 rounded-md transition-all hover:scale-100 duration-300 feedback-container">
                  <div className="flex items-center gap-[5px]">
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                  </div>
                  <h3 className="mt-5 text-[#1e2a39] section-heading-4">It reducing cost</h3>
                  <blockquote className="w-[85%] mt-3 text-[#696c74] text-ellipsis line-clamp-4 section-desc-3">
                    &quot;The ChatBot platform has become a key part of our proposition. It`s fully flexible and has
                    allowed us to drive 30% more leads while dramatically reducing our cost to serve. I am very much
                    thrilled about that now I can chat live and can monitor my customemrs screen&quot;.
                  </blockquote>
                  <div className="flex items-center gap-[13px] mt-[28px]">
                    <img
                      src="./src/assets/img/electronic/feedback/feedback-avt2.jpg"
                      alt=""
                      className="w-[46px] h-[46px] object-cover rounded-full"
                    />
                    <div>
                      <p className="text-[#1e2a39] font-bold leading-[1.75]">Meghan Scutt</p>
                      <p className="text-[#a4a7b0] section-desc-3">Co- Founder of Vector CX</p>
                    </div>
                  </div>
                </article>
                {/* <!-- Feedback item 3 --> */}
                <article className="p-7 rounded-md transition-all hover:scale-100 duration-300 feedback-container">
                  <div className="flex items-center gap-[5px]">
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                  </div>
                  <h3 className="mt-5 text-[#1e2a39] section-heading-4">It reducing cost</h3>
                  <blockquote className="w-[85%] mt-3 text-[#696c74] text-ellipsis line-clamp-4 section-desc-3">
                    &quot;The ChatBot platform has become a key part of our proposition. It`s fully flexible and has
                    allowed us to drive 30% more leads while dramatically reducing our cost to serve.&quot;.
                  </blockquote>
                  <div className="flex items-center gap-[13px] mt-[28px]">
                    <img
                      src="./src/assets/img/electronic/feedback/feedback-avt3.jpg"
                      alt=""
                      className="w-[46px] h-[46px] object-cover rounded-full"
                    />
                    <div>
                      <p className="text-[#1e2a39] font-bold leading-[1.75]">Valentina</p>
                      <p className="text-[#a4a7b0] section-desc-3">Founder of Web UI</p>
                    </div>
                  </div>
                </article>
              </div>
              {/* <!-- Feedback list 2 --> */}
              <div className="mt-[58px] grid-cols-3 gap-[30px] hidden">
                {/* <!-- Feedback item 1 --> */}
                <article className="p-7 rounded-md transition-all hover:scale-100 duration-300 feedback-container">
                  <div className="flex items-center gap-[5px]">
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                  </div>
                  <h3 className="mt-5 text-[#1e2a39] section-heading-4">It reducing cost</h3>
                  <blockquote className="w-[85%] mt-3 text-[#696c74] text-ellipsis line-clamp-4 section-desc-3">
                    &quot;The ChatBot platform has become a key part of our proposition. It`s fully flexible and has
                    allowed us to drive 30% more leads while dramatically reducing our cost to server&quot;
                  </blockquote>
                  <div className="flex items-center gap-[13px] mt-[28px]">
                    <img
                      src="./src/assets/img/electronic/feedback/feedback-avt4.jpg"
                      alt=""
                      className="w-[46px] h-[46px] object-cover rounded-full"
                    />
                    <div>
                      <p className="text-[#1e2a39] font-bold leading-[1.75]">Sarah Rose</p>
                      <p className="text-[#a4a7b0] section-desc-3">Co- Founder of Web Design</p>
                    </div>
                  </div>
                </article>
                {/* <!-- Feedback item 2 --> */}
                <article className="p-7 rounded-md transition-all hover:scale-100 duration-300 feedback-container">
                  <div className="flex items-center gap-[5px]">
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                  </div>
                  <h3 className="mt-5 text-[#1e2a39] section-heading-4">It reducing cost</h3>
                  <blockquote className="w-[85%] mt-3 text-[#696c74] text-ellipsis line-clamp-4 section-desc-3">
                    &quot;The ChatBot platform has become a key part of our proposition. It`s fully flexible and has
                    allowed us to drive 30% more leads while dramatically reducing our cost to serve. I am very much
                    thrilled about that now I can chat live and can monitor my customemrs screen.&quot;
                  </blockquote>
                  <div className="flex items-center gap-[13px] mt-[28px]">
                    <img
                      src="./src/assets/img/electronic/feedback/feedback-avt5.jpg"
                      alt=""
                      className="w-[46px] h-[46px] object-cover rounded-full"
                    />
                    <div>
                      <p className="text-[#1e2a39] font-bold leading-[1.75]">Meghan Scutt</p>
                      <p className="text-[#a4a7b0] section-desc-3">Co- Founder of Vector CX</p>
                    </div>
                  </div>
                </article>
                {/* <!-- Feedback item 3 --> */}
                <article className="p-7 rounded-md transition-all hover:scale-100 duration-300 feedback-container">
                  <div className="flex items-center gap-[5px]">
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                  </div>
                  <h3 className="mt-5 text-[#1e2a39] section-heading-4">It reducing cost</h3>
                  <blockquote className="w-[85%] mt-3 text-[#696c74] text-ellipsis line-clamp-4 section-desc-3">
                    &quot;The ChatBot platform has become a key part of our proposition. It`s fully flexible and has
                    allowed us to drive 30% more leads while dramatically reducing our cost to server.&quot;
                  </blockquote>
                  <div className="flex items-center gap-[13px] mt-[28px]">
                    <img
                      src="./src/assets/img/electronic/feedback/feedback-avt6.jpg"
                      alt=""
                      className="w-[46px] h-[46px] object-cover rounded-full"
                    />
                    <div>
                      <p className="text-[#1e2a39] font-bold leading-[1.75]">Valentina</p>
                      <p className="text-[#a4a7b0] section-desc-3">Founder of Web UI</p>
                    </div>
                  </div>
                </article>
              </div>
              {/* <!-- Feedback list 3 --> */}
              <div className="mt-[58px] grid-cols-3 gap-[30px] hidden">
                {/* <!-- Feedback item 1 --> */}
                <article className="p-7 rounded-md transition-all hover:scale-100 duration-300 feedback-container">
                  <div className="flex items-center gap-[5px]">
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                  </div>
                  <h3 className="mt-5 text-[#1e2a39] section-heading-4">It reducing cost</h3>
                  <blockquote className="w-[85%] mt-3 text-[#696c74] text-ellipsis line-clamp-4 section-desc-3">
                    &quot;The ChatBot platform has become a key part of our proposition. It`s fully flexible and has
                    allowed us to drive 30% more leads while dramatically reducing our cost to server.&quot;
                  </blockquote>
                  <div className="flex items-center gap-[13px] mt-[28px]">
                    <img
                      src="./src/assets/img/electronic/feedback/feedback-avt7.jpg"
                      alt=""
                      className="w-[46px] h-[46px] object-cover rounded-full"
                    />
                    <div>
                      <p className="text-[#1e2a39] font-bold leading-[1.75]">Sarah Rose</p>
                      <p className="text-[#a4a7b0] section-desc-3">Co- Founder of Web Design</p>
                    </div>
                  </div>
                </article>
                {/* <!-- Feedback item 2 --> */}
                <article className="p-7 rounded-md transition-all hover:scale-100 duration-300 feedback-container">
                  <div className="flex items-center gap-[5px]">
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                  </div>
                  <h3 className="mt-5 text-[#1e2a39] section-heading-4">It reducing cost</h3>
                  <blockquote className="w-[85%] mt-3 text-[#696c74] text-ellipsis line-clamp-4 section-desc-3">
                    &quot;The ChatBot platform has become a key part of our proposition. It`s fully flexible and has
                    allowed us to drive 30% more leads while dramatically reducing our cost to serve. I am very much
                    thrilled about that now I can chat live and can monitor my customemrs screen.&quot;
                  </blockquote>
                  <div className="flex items-center gap-[13px] mt-[28px]">
                    <img
                      src="./src/assets/img/electronic/feedback/feedback-avt8.jpg"
                      alt=""
                      className="w-[46px] h-[46px] object-cover rounded-full"
                    />
                    <div>
                      <p className="text-[#1e2a39] font-bold leading-[1.75]">Meghan Scutt</p>
                      <p className="text-[#a4a7b0] section-desc-3">Co- Founder of Vector CX</p>
                    </div>
                  </div>
                </article>
                {/* <!-- Feedback item 3 --> */}
                <article className="p-7 rounded-md transition-all hover:scale-100 duration-300 feedback-container">
                  <div className="flex items-center gap-[5px]">
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                    <img src="./src/assets/icons/star-meny.svg" alt="" />
                  </div>
                  <h3 className="mt-5 text-[#1e2a39] section-heading-4">It reducing cost</h3>
                  <blockquote className="w-[85%] mt-3 text-[#696c74] text-ellipsis line-clamp-4 section-desc-3">
                    &quot;The ChatBot platform has become a key part of our proposition. It`s fully flexible and has
                    allowed us to drive 30% more leads while dramatically reducing our cost to server&quot;
                  </blockquote>
                  <div className="flex items-center gap-[13px] mt-[28px]">
                    <img
                      src="./src/assets/img/electronic/feedback/feedback-avt9.jpg"
                      alt=""
                      className="w-[46px] h-[46px] object-cover rounded-full"
                    />
                    <div>
                      <p className="text-[#1e2a39] font-bold leading-[1.75]">Valentina</p>
                      <p className="text-[#a4a7b0] section-desc-3">Founder of Web UI</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 mt-[94px]">
              <span className="w-3 h-3 rounded-full bg-[#ffa654] feedback-list__item--active"></span>
              <span className="w-2 h-2 rounded-full bg-[#dac1ab] cursor-pointer"></span>
              <span className="w-2 h-2 rounded-full bg-[#dac1ab] cursor-pointer"></span>
            </div>
          </div>
          <a href="#!" className="flex justify-center items-center mt-7 text-[#1e2a39] text-lg font-semibold">
            <span>See more customer love &gt;</span>
          </a>
        </div>

        {/* <!-- Blog --> */}
        <div className="mt-[150px]">
          <section className="flex items-end justify-between">
            <div>
              <h2 className="text-[#181817] section-heading section-heading-2">Read our blogs</h2>
              <p className="mt-[18px] w-[60%] section-desc-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum
                turpis.
              </p>
            </div>
            <Button classname="rounded-2xl">Read All Blogs</Button>
          </section>

          <div className="flex items-center mt-[70px] -mx-[15px]">
            {/* <!-- Blog item 1 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-2/4 px-[15px]">
              <a href="#!" className="w-full h-[313px] block overflow-hidden">
                <img
                  src="./src/assets/img/electronic/blog/blog-elec-1.png"
                  alt=""
                  className="w-full h-full object-cover transition-all duration-1000 ease-linear hover:scale-110"
                />
              </a>
              <p className="mt-6 mb-1 text-green font-semibold leading-[1.87]">April 30, 2024</p>
              <h3 className="section-heading-3">How to collaborate with companies</h3>
              <p className="mt-1 text-lighter line-clamp-3 text-ellipsis section-desc-1">
                I will say this will be a game-changer for designers. They have a very interesting idea of sorting
                resources (templates and blocks) with a huge collection of resources. This will make the design work
                faster.
              </p>
              <a href="#!" className="block mt-5 text-[#181817] text-[23px] font-bold uppercase underline">
                Read More
              </a>
            </article>
            {/* <!-- Blog item 2 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-2/4 px-[15px]">
              <a href="#!" className="w-full h-[313px] block overflow-hidden">
                <img
                  src="./src/assets/img/electronic/blog/blog-elec-2.png"
                  alt=""
                  className="w-full h-full object-cover transition-all duration-1000 ease-linear hover:scale-110"
                />
              </a>
              <p className="mt-6 mb-1 text-green font-semibold leading-[1.87]">April 30, 2024</p>
              <h3 className="section-heading-3">About social media advertising</h3>
              <p className="mt-1 text-lighter line-clamp-3 text-ellipsis section-desc-1">
                I will say this will be a game-changer for designers. They have a very interesting idea of sorting
                resources (templates and blocks) with a huge collection of resources. This will make the design work
                faster.
              </p>
              <a href="#!" className="block mt-5 text-[#181817] text-[23px] font-bold uppercase underline">
                Read More
              </a>
            </article>
          </div>
        </div>

        {/* <!-- Subscribe --> */}
        <div className="relative flex flex-col items-center mt-[194px] py-[70px] rounded-[20px] bg-[#005d63]">
          <section>
            <h2 className="text-white section-heading-2 section-heading">Subscribe our newsletter</h2>
            <p className="mt-[10px] w-[80%] text-center text-gray-300 mx-auto section-desc-2">
              Reciev latest news, update, and many other things every week.
            </p>
          </section>

          <form action="" className="w-[450px] h-[60px] relative flex items-center mt-[32px] rounded-xl bg-white">
            <input
              type="email"
              className="w-full pr-[70px] pl-[26px] text-sm font-medium leading-[1.71] placeholder:text-[#b3b4b5] outline-none"
              placeholder="Enter your email"
            />
            <button type="submit" className="absolute top-0 right-0">
              <img src="./src/assets/icons/submit.svg" alt="" />
            </button>
          </form>

          <img src="./src/assets/icons/triangle.svg" alt="" className="absolute -top-5 left-[79px]" />
          <img src="./src/assets/icons/half-circle.svg" alt="" className="absolute right-[139px] bottom-[77px]" />
        </div>
      </div>
    </main>
  );
};

export default Electronic;
