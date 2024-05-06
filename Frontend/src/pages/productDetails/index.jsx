import { useEffect, useState } from 'react';
import Button from '../../components/button';
import ProductList from '../../layouts/products/ProductList';
import axios from 'axios';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);

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

  const productBest = products.filter(product => product.category === 'bestproduct');

  return (
    <main className="container-page">
      <div className="pt-[100px] pb-[150px]">
        <div className="flex">
          <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4 pr-[45px]">
            <div>
              <figure>
                <img src="../src/assets/img/product/detail/detail1.png" alt="" className="w-full object-cover" />
                <img src="../src/assets/img/product/detail/detail2.png" alt="" className="w-full object-cover hidden" />
                <img src="../src/assets/img/product/detail/detail3.png" alt="" className="w-full object-cover hidden" />
                <img src="../src/assets/img/product/detail/detail4.png" alt="" className="w-full object-cover hidden" />
              </figure>
              <div className="flex items-center justify-center gap-5 mt-[18px]">
                <button>
                  <img src="../src/assets/icons/arrow-left-big.svg" alt="" />
                </button>
                <img
                  src="../src/assets/img/product/detail/detail1.png"
                  alt=""
                  className="w-[100px] h-[100px] object-cover border border-dark"
                />
                <img
                  src="../src/assets/img/product/detail/detail2.png"
                  alt=""
                  className="w-[100px] h-[100px] object-cover"
                />
                <img
                  src="../src/assets/img/product/detail/detail3.png"
                  alt=""
                  className="w-[100px] h-[100px] object-cover"
                />
                <img
                  src="../src/assets/img/product/detail/detail4.png"
                  alt=""
                  className="w-[100px] h-[100px] object-cover"
                />
                <button>
                  <img src="../src/assets/icons/arrow-right-big.svg" alt="" />
                </button>
              </div>
            </div>
            <section className="mt-[55px]">
              <h3 className="section-heading-4">About this product</h3>
              <p className="mt-[18px] section-desc-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, nostrud ipsum consectetur sed do.
              </p>
              <ul className="mt-[30px] ml-[30px] list-disc section-desc-1">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              </ul>
              <p className="mt-[30px] section-desc-1">
                <strong className="text-dark text-lg font-semibold leading-[1.67]">Note:</strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, nostrud ipsum consectetur sed do.
              </p>
            </section>
          </div>
          <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4 px-[45px]">
            <p className="section-desc-3">Women-Cloths</p>
            <h3 className="mt-1 section-heading-3">Modern Green Sweater</h3>
            <div className="flex items-center gap-2 mt-3">
              <p className="text-light text-lg leading-[1.67] line-through">$120</p>
              <p className="text-lg leading-[1.67] text-orange font-semibold">$60</p>
            </div>
            <div className="mt-[12px] flex items-center gap-[10px]">
              <img src="../src/assets/icons/star-small.svg" alt="" />
              <p className="section-desc-1">
                5.0
                <strong className="ml-1">(37)</strong>
              </p>
            </div>
            <div className="mt-[21px]">
              <div className="flex items-center gap-[14px]">
                <p className="w-[53px] text-lg font-semibold">Color:</p>
                <div className="flex items-center gap-3">
                  <span className="relative w-[24px] h-[24px] bg-[#90a338] flex items-center justify-center text-white">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  <span className="relative w-[24px] h-[24px] cursor-pointer bg-[#2a2a2a]"></span>
                  <span className="relative w-[24px] h-[24px] cursor-pointer bg-[#ef8195]"></span>
                  <span className="relative w-[24px] h-[24px] cursor-pointer border border-[#c4d1d0] bg-white"></span>
                </div>
              </div>
              <div className="flex items-center gap-[14px] mt-5">
                <p className="w-[53px] text-lg font-semibold">Size:</p>
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-[24px] h-[24px] cursor-default text-white bg-green section-desc-3">
                    S
                  </span>
                  <span className="flex items-center justify-center w-[24px] h-[24px] border border-grey cursor-pointer hover:border-none hover:text-white hover:bg-green section-desc-3">
                    M
                  </span>
                  <span className="flex items-center justify-center w-[24px] h-[24px] border border-grey cursor-pointer hover:border-none hover:text-white hover:bg-green section-desc-3">
                    L
                  </span>
                  <span className="flex items-center justify-center  w-[24px] h-[24px] border border-grey cursor-pointer hover:border-none hover:text-white hover:bg-green section-desc-3">
                    XL
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[14px] mt-5">
                <p className="text-lg font-semibold">Quantity:</p>
                <div className="flex items-center gap-3">
                  <button className="px-3 font-medium text-lg justify-center flex items-center bg-[#c4d1d0] text-dark section-desc-3">
                    -
                  </button>
                  <span className="px-3 font-medium text-lg justify-center flex items-center border border-[#c4d1d0] text-dark section-desc-3">
                    1
                  </span>
                  <button className="px-3 font-medium text-lg justify-center flex items-center bg-[#c4d1d0] text-dark section-desc-3">
                    +
                  </button>
                </div>
              </div>
            </div>
            <p className="w-[78%] mt-[28px] section-desc-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam,
            </p>
            <Button classname="w-[470px] mt-[40px]">Add to cart</Button>
            <Button classname="w-[470px] mt-[18px] border-none hover:bg-yellow hover:text-dark hover:opacity-70 bg-yellow text-dark">
              Checkout
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap mt-[55px]">
          <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4">
            <h3 className="section-heading-4">Customer Reviews</h3>
            <div className="w-full mt-[18px] ">
              <h4 className="text-lg font-semibold leading-[1.67]">77 Reviews</h4>
              <div className="flex items-center gap-1 mt-[8px]">
                <img src="../src/assets/icons/star-meny.svg" alt="" />
                <img src="../src/assets/icons/star-meny.svg" alt="" />
                <img src="../src/assets/icons/star-meny.svg" alt="" />
                <img src="../src/assets/icons/star-meny.svg" alt="" />
                <img src="../src/assets/icons/star-meny.svg" alt="" />
              </div>
              <div className="mt-[30px]">
                {/* <!-- Product review item 1 --> */}
                <div className="flex items-center gap-[30px] mb-3">
                  <p className="text-dark section-desc-1">5 Stars</p>
                  <div className="product-review__separate relative w-[433px] h-1 bg-grey"></div>
                  <p className="text-dark section-desc-1">37</p>
                </div>
                {/* <!-- Product review item 2 --> */}
                <div className="flex items-center gap-[30px] mb-3">
                  <p className="text-dark section-desc-1">4 Stars</p>
                  <div className="product-review__separate relative w-[433px] h-1 bg-grey"></div>
                  <p className="text-dark section-desc-1">37</p>
                </div>
                {/* <!-- Product review item 3 --> */}
                <div className="flex items-center gap-[30px] mb-3">
                  <p className="text-dark section-desc-1">3 Stars</p>
                  <div className="product-review__separate relative w-[433px] h-1 bg-grey"></div>
                  <p className="text-dark section-desc-1">37</p>
                </div>
                {/* <!-- Product review item 4 --> */}
                <div className="flex items-center gap-[30px] mb-3">
                  <p className="text-dark section-desc-1">2 Stars</p>
                  <div className="product-review__separate relative w-[433px] h-1 bg-grey"></div>
                  <p className="text-dark section-desc-1">37</p>
                </div>
                {/* <!-- Product review item 5 --> */}
                <div className="flex items-center gap-[30px] mb-3">
                  <p className="text-dark section-desc-1">1 Stars</p>
                  <div className="product-review__separate relative w-[433px] h-1 bg-grey"></div>
                  <p className="text-dark section-desc-1">37</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4">
            <div className="px-[45px]">
              <h3 className="section-heading-4">How would you rate this?</h3>
              <div className="flex items-center gap-1 mt-[8px]">
                <img src="../src/assets/icons/star-black.svg" alt="" />
                <img src="../src/assets/icons/star-black.svg" alt="" />
                <img src="../src/assets/icons/star-black.svg" alt="" />
                <img src="../src/assets/icons/star-black.svg" alt="" />
                <img src="../src/assets/icons/star-black.svg" alt="" />
              </div>
              <form action="" className="flex flex-col mt-[31px]">
                <div className="mb-[31px]">
                  <label className="text-lg font-semibold leading-[1.67]" htmlFor="summaryWrite">
                    Ad a headline
                  </label>
                  <input
                    id="summaryWrite"
                    name="summaryWrite"
                    className="w-full p-[15px] mt-3 border border-grey bg-white text-dark text-lg leading-[1.67] placeholder:text-light outline-none"
                    type="text"
                    placeholder="Write a summary of your review"
                    maxLength="100"
                  />
                </div>
                <div className="mb-[31px]">
                  <label className="text-lg font-semibold leading-[1.67]" htmlFor="reviewWrite">
                    Write a review
                  </label>
                  <textarea
                    className="w-full p-[15px] mt-3 border border-grey bg-white text-dark text-lg leading-[1.67] placeholder:text-light outline-none"
                    name="reviewWrite"
                    id="reviewWrite"
                    cols="30"
                    rows="10"
                    placeholder="Tell us what do you think"
                    maxLength="200"
                  ></textarea>
                </div>
                <Button classname="mt-[31px] w-[200px]">Submit Review</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-[70px]">
          {/* <!-- Product feedback list 1 --> */}
          <div className="flex flex-wrap -mx-[15px]">
            {/* <!-- Product feedback item 1 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div className="p-7 border border-grey bg-white transition-all product-feedback__wrap">
                <img
                  src="../src/assets/img/fashion/feedback/feedback-avt11.jpg"
                  alt=""
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />
                <p className="mt-3 text-lg font-semibold leading-[1.67]">Sarah Taylor</p>
                <div className="flex items-center gap-1">
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                </div>
                <p className="mt-[28px] section-heading-4">Beautiful Sweater</p>
                <blockquote className="mt-4 text-ellipsis line-clamp-3 section-desc-2">
                  “Really a beautiful sweater for women. I am really lucky that I could buy this sweater very easily”
                </blockquote>
              </div>
            </article>
            {/* <!-- Product feedback item 2 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div className="p-7 border border-grey bg-white transition-all product-feedback__wrap">
                <img
                  src="../src/assets/img/fashion/feedback/feedback-avt2.jpg"
                  alt=""
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />
                <p className="mt-3 text-lg font-semibold leading-[1.67]">Meg Lanning</p>
                <div className="flex items-center gap-1">
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                </div>
                <p className="mt-[28px] section-heading-4">Awesome Sweater</p>
                <blockquote className="mt-4 text-ellipsis line-clamp-3 section-desc-2">
                  “Really a beautiful sweater for women. I am really lucky that I could buy this sweater very easily”
                </blockquote>
              </div>
            </article>
            {/* <!-- Product feedback item 3 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div className="p-7 border border-grey bg-white transition-all product-feedback__wrap">
                <img
                  src="../src/assets/img/fashion/feedback/feedback-avt3.jpg"
                  alt=""
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />
                <p className="mt-3 text-lg font-semibold leading-[1.67]">Wonderful Sweater</p>
                <div className="flex items-center gap-1">
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                </div>
                <p className="mt-[28px] section-heading-4">Beautiful Sweater</p>
                <blockquote className="mt-4 text-ellipsis line-clamp-3 section-desc-2">
                  “Really a beautiful sweater for women. I am really lucky that I could buy this sweater very easily”
                </blockquote>
              </div>
            </article>
            {/* <!-- Product feedback item 4 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div className="p-7 border border-grey bg-white transition-all product-feedback__wrap">
                <img
                  src="../src/assets/img/fashion/feedback/feedback-avt4.jpg"
                  alt=""
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />
                <p className="mt-3 text-lg font-semibold leading-[1.67]">Ellyse PerrySarah Taylor</p>
                <div className="flex items-center gap-1">
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                </div>
                <p className="mt-[28px] section-heading-4">Best Sweater</p>
                <blockquote className="mt-4 text-ellipsis line-clamp-3 section-desc-2">
                  “Really a beautiful sweater for women. I am really lucky that I could buy this sweater very easily”
                </blockquote>
              </div>
            </article>
            {/* <!-- Product feedback item 5 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div className="p-7 border border-grey bg-white transition-all product-feedback__wrap">
                <img
                  src="../src/assets/img/fashion/feedback/feedback-avt5.jpg"
                  alt=""
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />
                <p className="mt-3 text-lg font-semibold leading-[1.67]">Beth Mooney</p>
                <div className="flex items-center gap-1">
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                </div>
                <p className="mt-[28px] section-heading-4">Good Sweater</p>
                <blockquote className="mt-4 text-ellipsis line-clamp-3 section-desc-2">
                  “Really a beautiful sweater for women. I am really lucky that I could buy this sweater very easily”
                </blockquote>
              </div>
            </article>
            {/* <!-- Product feedback item 6 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div className="p-7 border border-grey bg-white transition-all product-feedback__wrap">
                <img
                  src="../src/assets/img/fashion/feedback/feedback-avt6.jpg"
                  alt=""
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />
                <p className="mt-3 text-lg font-semibold leading-[1.67]">Megan Schutt</p>
                <div className="flex items-center gap-1">
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                </div>
                <p className="mt-[28px] section-heading-4">Nice Sweater</p>
                <blockquote className="mt-4 text-ellipsis line-clamp-3 section-desc-2">
                  “Really a beautiful sweater for women. I am really lucky that I could buy this sweater very easily”
                </blockquote>
              </div>
            </article>
          </div>

          {/* <!-- Product feedback list 2 --> */}
          <div className="flex-wrap hidden">
            {/* <!-- Product feedback item 1 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div className="p-7 border border-grey bg-white transition-all product-feedback__wrap">
                <img
                  src="../src/assets/img/fashion/feedback/feedback-avt1.jpg"
                  alt=""
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />
                <p className="mt-3 text-lg font-semibold leading-[1.67]">Sarah Taylor</p>
                <div className="flex items-center gap-1">
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                </div>
                <p className="mt-[28px] section-heading-4">Beautiful Sweater</p>
                <blockquote className="mt-4 text-ellipsis line-clamp-3 section-desc-2">
                  “Really a beautiful sweater for women. I am really lucky that I could buy this sweater very easily”
                </blockquote>
              </div>
            </article>
            {/* <!-- Product feedback item 2 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div className="p-7 border border-grey bg-white transition-all product-feedback__wrap">
                <img
                  src="../src/assets/img/fashion/feedback/feedback-avt7.jpg"
                  alt=""
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />
                <p className="mt-3 text-lg font-semibold leading-[1.67]">Meg Lanning</p>
                <div className="flex items-center gap-1">
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                </div>
                <p className="mt-[28px] section-heading-4">Awesome Sweater</p>
                <blockquote className="mt-4 text-ellipsis line-clamp-3 section-desc-2">
                  “Really a beautiful sweater for women. I am really lucky that I could buy this sweater very easily”
                </blockquote>
              </div>
            </article>
            {/* <!-- Product feedback item 3 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div className="p-7 border border-grey bg-white transition-all product-feedback__wrap">
                <img
                  src="../src/assets/img/fashion/feedback/feedback-avt8.jpg"
                  alt=""
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />
                <p className="mt-3 text-lg font-semibold leading-[1.67]">Wonderful Sweater</p>
                <div className="flex items-center gap-1">
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                </div>
                <p className="mt-[28px] section-heading-4">Beautiful Sweater</p>
                <blockquote className="mt-4 text-ellipsis line-clamp-3 section-desc-2">
                  “Really a beautiful sweater for women. I am really lucky that I could buy this sweater very easily”
                </blockquote>
              </div>
            </article>
            {/* <!-- Product feedback item 4 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div className="p-7 border border-grey bg-white transition-all product-feedback__wrap">
                <img
                  src="../src/assets/img/fashion/feedback/feedback-avt9.jpg"
                  alt=""
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />
                <p className="mt-3 text-lg font-semibold leading-[1.67]">Ellyse PerrySarah Taylor</p>
                <div className="flex items-center gap-1">
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                </div>
                <p className="mt-[28px] section-heading-4">Best Sweater</p>
                <blockquote className="mt-4 text-ellipsis line-clamp-3 section-desc-2">
                  “Really a beautiful sweater for women. I am really lucky that I could buy this sweater very easily”
                </blockquote>
              </div>
            </article>
            {/* <!-- Product feedback item 5 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div className="p-7 border border-grey bg-white transition-all product-feedback__wrap">
                <img
                  src="../src/assets/img/fashion/feedback/feedback-avt10.jpg"
                  alt=""
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />
                <p className="mt-3 text-lg font-semibold leading-[1.67]">Beth Mooney</p>
                <div className="flex items-center gap-1">
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                </div>
                <p className="mt-[28px] section-heading-4">Good Sweater</p>
                <blockquote className="mt-4 text-ellipsis line-clamp-3 section-desc-2">
                  “Really a beautiful sweater for women. I am really lucky that I could buy this sweater very easily”
                </blockquote>
              </div>
            </article>
            {/* <!-- Product feedback item 6 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div className="p-7 border border-grey bg-white transition-all product-feedback__wrap">
                <img
                  src="../src/assets/img/fashion/feedback/feedback-avt12.jpg"
                  alt=""
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />
                <p className="mt-3 text-lg font-semibold leading-[1.67]">Megan Schutt</p>
                <div className="flex items-center gap-1">
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                </div>
                <p className="mt-[28px] section-heading-4">Nice Sweater</p>
                <blockquote className="mt-4 text-ellipsis line-clamp-3 section-desc-2">
                  “Really a beautiful sweater for women. I am really lucky that I could buy this sweater very easily”
                </blockquote>
              </div>
            </article>
          </div>

          {/* <!-- Product feedback list 3 --> */}
          <div className="flex-wrap hidden">
            {/* <!-- Product feedback item 1 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div className="p-7 border border-grey bg-white transition-all product-feedback__wrap">
                <img
                  src="../src/assets/img/fashion/feedback/feedback-avt6.jpg"
                  alt=""
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />
                <p className="mt-3 text-lg font-semibold leading-[1.67]">Sarah Taylor</p>
                <div className="flex items-center gap-1">
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                </div>
                <p className="mt-[28px] section-heading-4">Beautiful Sweater</p>
                <blockquote className="mt-4 text-ellipsis line-clamp-3 section-desc-2">
                  “Really a beautiful sweater for women. I am really lucky that I could buy this sweater very easily”
                </blockquote>
              </div>
            </article>
            {/* <!-- Product feedback item 2 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div className="p-7 border border-grey bg-white transition-all product-feedback__wrap">
                <img
                  src="../src/assets/img/fashion/feedback/feedback-avt3.jpg"
                  alt=""
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />
                <p className="mt-3 text-lg font-semibold leading-[1.67]">Meg Lanning</p>
                <div className="flex items-center gap-1">
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                </div>
                <p className="mt-[28px] section-heading-4">Awesome Sweater</p>
                <blockquote className="mt-4 text-ellipsis line-clamp-3 section-desc-2">
                  “Really a beautiful sweater for women. I am really lucky that I could buy this sweater very easily”
                </blockquote>
              </div>
            </article>
            {/* <!-- Product feedback item 3 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div className="p-7 border border-grey bg-white transition-all product-feedback__wrap">
                <img
                  src="../src/assets/img/fashion/feedback/feedback-avt9.jpg"
                  alt=""
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />
                <p className="mt-3 text-lg font-semibold leading-[1.67]">Wonderful Sweater</p>
                <div className="flex items-center gap-1">
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                </div>
                <p className="mt-[28px] section-heading-4">Beautiful Sweater</p>
                <blockquote className="mt-4 text-ellipsis line-clamp-3 section-desc-2">
                  “Really a beautiful sweater for women. I am really lucky that I could buy this sweater very easily”
                </blockquote>
              </div>
            </article>
            {/* <!-- Product feedback item 4 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div className="p-7 border border-grey bg-white transition-all product-feedback__wrap">
                <img
                  src="../src/assets/img/fashion/feedback/feedback-avt11.jpg"
                  alt=""
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />
                <p className="mt-3 text-lg font-semibold leading-[1.67]">Ellyse PerrySarah Taylor</p>
                <div className="flex items-center gap-1">
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                </div>
                <p className="mt-[28px] section-heading-4">Best Sweater</p>
                <blockquote className="mt-4 text-ellipsis line-clamp-3 section-desc-2">
                  “Really a beautiful sweater for women. I am really lucky that I could buy this sweater very easily”
                </blockquote>
              </div>
            </article>
            {/* <!-- Product feedback item 5 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div className="p-7 border border-grey bg-white transition-all product-feedback__wrap">
                <img
                  src="../src/assets/img/fashion/feedback/feedback-avt2.jpg"
                  alt=""
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />
                <p className="mt-3 text-lg font-semibold leading-[1.67]">Beth Mooney</p>
                <div className="flex items-center gap-1">
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                </div>
                <p className="mt-[28px] section-heading-4">Good Sweater</p>
                <blockquote className="mt-4 text-ellipsis line-clamp-3 section-desc-2">
                  “Really a beautiful sweater for women. I am really lucky that I could buy this sweater very easily”
                </blockquote>
              </div>
            </article>
            {/* <!-- Product feedback item 6 --> */}
            <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
              <div className="p-7 border border-grey bg-white transition-all product-feedback__wrap">
                <img
                  src="../src/assets/img/fashion/feedback/feedback-avt1.jpg"
                  alt=""
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />
                <p className="mt-3 text-lg font-semibold leading-[1.67]">Megan Schutt</p>
                <div className="flex items-center gap-1">
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                  <img src="../src/assets/icons/star-meny.svg" alt="" />
                </div>
                <p className="mt-[28px] section-heading-4">Nice Sweater</p>
                <blockquote className="mt-4 text-ellipsis line-clamp-3 section-desc-2">
                  “Really a beautiful sweater for women. I am really lucky that I could buy this sweater very easily”
                </blockquote>
              </div>
            </article>
          </div>

          <div className="flex items-center gap-[8px] mt-[32px] mx-auto">
            <span className="rounded-full cursor-default bg-orange h-3 w-3"></span>
            <span className="w-[8px] h-[8px] rounded-full bg-grey cursor-pointer"></span>
            <span className="w-[8px] h-[8px] rounded-full bg-grey cursor-pointer"></span>
          </div>
        </div>

        <ProductList
          headingList="Meet our best sellers"
          descList="Browse our most popular products and make your day more beautiful and glorious"
          data={productBest}
        />
      </div>
    </main>
  );
};

export default ProductDetails;
