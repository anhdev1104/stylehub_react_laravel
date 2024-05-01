import { useEffect, useState } from 'react';
import { getCategories } from '../../../services/categories';

const ProductListCate = () => {
  const [tabs, setTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState(1);
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setTabs(data);
    })();
  }, []);

  const handleActiveTab = id => {
    return setActiveTab(id);
  };

  return (
    <div className="mt-[150px]">
      <div className="js-tabs">
        <div className="flex items-center justify-center gap-[30px]">
          {tabs.map(tab => (
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
          {/* <!-- Prod list 1 --> */}
          <div className="block">
            <div className="flex flex-wrap -mt-[30px] -mx-[15px]">
              {/* <!-- Prod list item 1 --> */}
              <article className="flex-grow-0 flex-shrink-0 w-[33.3333333333%] px-[15px] mt-[30px]">
                <div className="p-5 rounded-[15px] transition-all prod-item">
                  <div className="relative">
                    <a href="#!">
                      <figure>
                        <img
                          loading="lazy"
                          src="./src/assets/img/fashion/product/list/all/product1.png"
                          alt=""
                          className="w-full h-[310px] object-cover"
                        />
                      </figure>
                    </a>
                    <div className="items-center absolute bottom-0 left-0 w-full justify-between py-[15px] px-[35px] bg-yellow hidden">
                      <p className="text-dark text-lg font-semibold">Added to wish list</p>
                      <a href="#!" className="text-dark text-lg font-semibold">
                        View
                      </a>
                      <button>
                        <img loading="lazy" src="./src/assets/icons/close.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mt-5 justify-between">
                    <p className="text-light text-sm leading-[1.71]">Men-Cloths</p>
                    <div className="like-btn">
                      <img
                        loading="lazy"
                        src="./src/assets/icons/heart-red.svg"
                        alt=""
                        className="like-btn__icon--liked"
                      />
                      <img loading="lazy" src="./src/assets/icons/heart.svg" alt="" className="like-btn__icon" />
                    </div>
                  </div>
                  <a href="#!">
                    <h3 className="mt-1 section-heading-4">Mid Century Modern Shirt</h3>
                  </a>
                  <p className="mt-3 text-dark text-lg font-semibold">$110</p>
                  <div className="flex items-center gap-[15px] mt-3">
                    <div className="flex items-center gap-[6px]">
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                    </div>
                    <p>(540 reviews)</p>
                  </div>
                </div>
              </article>
              {/* <!-- Prod list item 2 --> */}
              <article className="flex-grow-0 flex-shrink-0 w-[33.3333333333%] px-[15px] mt-[30px]">
                <div className="p-5 rounded-[15px] transition-all prod-item">
                  <div className="relative">
                    <a href="#!">
                      <figure>
                        <img
                          loading="lazy"
                          src="./src/assets/img/fashion/product/list/all/product2.png"
                          alt=""
                          className="w-full h-[310px] object-cover"
                        />
                      </figure>
                    </a>
                    <div className="items-center absolute bottom-0 left-0 w-full justify-between py-[15px] px-[35px] bg-yellow hidden">
                      <p className="text-dark text-lg font-semibold">Added to wish list</p>
                      <a href="#!" className="text-dark text-lg font-semibold">
                        View
                      </a>
                      <button>
                        <img loading="lazy" src="./src/assets/icons/close.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mt-5 justify-between">
                    <p className="text-light text-sm leading-[1.71]">Women-Cloths</p>
                    <div className="like-btn">
                      <img
                        loading="lazy"
                        src="./src/assets/icons/heart-red.svg"
                        alt=""
                        className="like-btn__icon--liked"
                      />
                      <img loading="lazy" src="./src/assets/icons/heart.svg" alt="" className="like-btn__icon" />
                    </div>
                  </div>
                  <a href="#!">
                    <h3 className="mt-1 section-heading-4">Mid Century Modern Shirt</h3>
                  </a>
                  <p className="mt-3 text-dark text-lg font-semibold">$139</p>
                  <div className="flex items-center gap-[15px] mt-3">
                    <div className="flex items-center gap-[6px]">
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                    </div>
                    <p>(540 reviews)</p>
                  </div>
                </div>
              </article>
              {/* <!-- Prod list item 3 --> */}
              <article className="flex-grow-0 flex-shrink-0 w-[33.3333333333%] px-[15px] mt-[30px]">
                <div className="p-5 rounded-[15px] transition-all prod-item">
                  <div className="relative">
                    <a href="#!">
                      <figure>
                        <img
                          loading="lazy"
                          src="./src/assets/img/fashion/product/list/all/product3.png"
                          alt=""
                          className="w-full h-[310px] object-cover"
                        />
                      </figure>
                    </a>
                    <div className="items-center absolute bottom-0 left-0 w-full justify-between py-[15px] px-[35px] bg-yellow hidden">
                      <p className="text-dark text-lg font-semibold">Added to wish list</p>
                      <a href="#!" className="text-dark text-lg font-semibold">
                        View
                      </a>
                      <button>
                        <img loading="lazy" src="./src/assets/icons/close.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mt-5 justify-between">
                    <p className="text-light text-sm leading-[1.71]">Kids Fashion</p>
                    <div className="like-btn">
                      <img
                        loading="lazy"
                        src="./src/assets/icons/heart-red.svg"
                        alt=""
                        className="like-btn__icon--liked"
                      />
                      <img loading="lazy" src="./src/assets/icons/heart.svg" alt="" className="like-btn__icon" />
                    </div>
                  </div>
                  <a href="#!">
                    <h3 className="mt-1 section-heading-4">Mid Century T-Shirt</h3>
                  </a>
                  <p className="mt-3 text-dark text-lg font-semibold">$150</p>
                  <div className="flex items-center gap-[15px] mt-3">
                    <div className="flex items-center gap-[6px]">
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                    </div>
                    <p>(540 reviews)</p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* <!-- Prod list 2 --> */}
          <div className="hidden">
            <div className="flex flex-wrap -mt-[30px] -mx-[15px]">
              {/* <!-- Prod list item 1 --> */}
              <article className="flex-grow-0 flex-shrink-0 w-[33.3333333333%] px-[15px]">
                <div className="p-5 rounded-[15px] transition-all prod-item">
                  <div className="relative">
                    <a href="#!">
                      <figure>
                        <img
                          loading="lazy"
                          src="./src/assets/img/fashion/product/list/men/product1.jpg"
                          alt=""
                          className="w-full h-[310px] object-cover"
                        />
                      </figure>
                    </a>
                    <div className="items-center absolute bottom-0 left-0 w-full justify-between py-[15px] px-[35px] bg-yellow hidden">
                      <p className="text-dark text-lg font-semibold">Added to wish list</p>
                      <a href="#!" className="text-dark text-lg font-semibold">
                        View
                      </a>
                      <button>
                        <img loading="lazy" src="./src/assets/icons/close.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mt-5 justify-between">
                    <p className="text-light text-sm leading-[1.71]">Men-Cloths</p>
                    <div className="like-btn">
                      <img
                        loading="lazy"
                        src="./src/assets/icons/heart-red.svg"
                        alt=""
                        className="like-btn__icon--liked"
                      />
                      <img loading="lazy" src="./src/assets/icons/heart.svg" alt="" className="like-btn__icon" />
                    </div>
                  </div>
                  <a href="#!">
                    <h3 className="mt-1 section-heading-4">The Veston Man</h3>
                  </a>
                  <p className="mt-3 text-dark text-lg font-semibold">$780</p>
                  <div className="flex items-center gap-[15px] mt-3">
                    <div className="flex items-center gap-[6px]">
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                    </div>
                    <p>(540 reviews)</p>
                  </div>
                </div>
              </article>
              {/* <!-- Prod list item 2 --> */}
              <article className="flex-grow-0 flex-shrink-0 w-[33.3333333333%] px-[15px]">
                <div className="p-5 rounded-[15px] transition-all prod-item">
                  <div className="relative">
                    <a href="#!">
                      <figure>
                        <img
                          loading="lazy"
                          src="./src/assets/img/fashion/product/list/men/product2.jpg"
                          alt=""
                          className="w-full h-[310px] object-cover"
                        />
                      </figure>
                    </a>
                    <div className="items-center absolute bottom-0 left-0 w-full justify-between py-[15px] px-[35px] bg-yellow hidden">
                      <p className="text-dark text-lg font-semibold">Added to wish list</p>
                      <a href="#!" className="text-dark text-lg font-semibold">
                        View
                      </a>
                      <button>
                        <img loading="lazy" src="./src/assets/icons/close.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mt-5 justify-between">
                    <p className="text-light text-sm leading-[1.71]">Men-Shoe</p>
                    <div className="like-btn">
                      <img
                        loading="lazy"
                        src="./src/assets/icons/heart-red.svg"
                        alt=""
                        className="like-btn__icon--liked"
                      />
                      <img loading="lazy" src="./src/assets/icons/heart.svg" alt="" className="like-btn__icon" />
                    </div>
                  </div>
                  <a href="#!">
                    <h3 className="mt-1 section-heading-4">Shoe Sport Men</h3>
                  </a>
                  <p className="mt-3 text-dark text-lg font-semibold">$399</p>
                  <div className="flex items-center gap-[15px] mt-3">
                    <div className="flex items-center gap-[6px]">
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                    </div>
                    <p>(540 reviews)</p>
                  </div>
                </div>
              </article>
              {/* <!-- Prod list item 3 --> */}
              <article className="flex-grow-0 flex-shrink-0 w-[33.3333333333%] px-[15px]">
                <div className="p-5 rounded-[15px] transition-all prod-item">
                  <div className="relative">
                    <a href="#!">
                      <figure>
                        <img
                          loading="lazy"
                          src="./src/assets/img/fashion/product/list/all/product3.png"
                          alt=""
                          className="w-full h-[310px] object-cover"
                        />
                      </figure>
                    </a>
                    <div className="items-center absolute bottom-0 left-0 w-full justify-between py-[15px] px-[35px] bg-yellow hidden">
                      <p className="text-dark text-lg font-semibold">Added to wish list</p>
                      <a href="#!" className="text-dark text-lg font-semibold">
                        View
                      </a>
                      <button>
                        <img loading="lazy" src="./src/assets/icons/close.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mt-5 justify-between">
                    <p className="text-light text-sm leading-[1.71]">Men Fashion</p>
                    <div className="like-btn">
                      <img
                        loading="lazy"
                        src="./src/assets/icons/heart-red.svg"
                        alt=""
                        className="like-btn__icon--liked"
                      />
                      <img loading="lazy" src="./src/assets/icons/heart.svg" alt="" className="like-btn__icon" />
                    </div>
                  </div>
                  <a href="#!">
                    <h3 className="mt-1 section-heading-4">Cap Men Beauty</h3>
                  </a>
                  <p className="mt-3 text-dark text-lg font-semibold">$99</p>
                  <div className="flex items-center gap-[15px] mt-3">
                    <div className="flex items-center gap-[6px]">
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                    </div>
                    <p>(540 reviews)</p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* <!-- Prod list 3 --> */}
          <div className="hidden">
            <div className="flex flex-wrap -mt-[30px] -mx-[15px]">
              {/* <!-- Prod list item 1 --> */}
              <article className="flex-grow-0 flex-shrink-0 w-[33.3333333333%] px-[15px]">
                <div className="p-5 rounded-[15px] transition-all prod-item">
                  <div className="relative">
                    <a href="#!">
                      <figure>
                        <img
                          loading="lazy"
                          src="./src/assets/img/fashion/product/list/women/product1.jpg"
                          alt=""
                          className="w-full h-[310px] object-cover"
                        />
                      </figure>
                    </a>
                    <div className="items-center absolute bottom-0 left-0 w-full justify-between py-[15px] px-[35px] bg-yellow hidden">
                      <p className="text-dark text-lg font-semibold">Added to wish list</p>
                      <a href="#!" className="text-dark text-lg font-semibold">
                        View
                      </a>
                      <button>
                        <img loading="lazy" src="./src/assets/icons/close.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mt-5 justify-between">
                    <p className="text-light text-sm leading-[1.71]">Women Fashion</p>
                    <div className="like-btn">
                      <img
                        loading="lazy"
                        src="./src/assets/icons/heart-red.svg"
                        alt=""
                        className="like-btn__icon--liked"
                      />
                      <img loading="lazy" src="./src/assets/icons/heart.svg" alt="" className="like-btn__icon" />
                    </div>
                  </div>
                  <a href="#!">
                    <h3 className="mt-1 section-heading-4">The Bag Louis Vuitton</h3>
                  </a>
                  <p className="mt-3 text-dark text-lg font-semibold">$899</p>
                  <div className="flex items-center gap-[15px] mt-3">
                    <div className="flex items-center gap-[6px]">
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                    </div>
                    <p>(540 reviews)</p>
                  </div>
                </div>
              </article>
              {/* <!-- Prod list item 2 --> */}
              <article className="flex-grow-0 flex-shrink-0 w-[33.3333333333%] px-[15px]">
                <div className="p-5 rounded-[15px] transition-all prod-item">
                  <div className="relative">
                    <a href="#!">
                      <figure>
                        <img
                          loading="lazy"
                          src="./src/assets/img/fashion/product/list/women/product2.jpg"
                          alt=""
                          className="w-full h-[310px] object-cover"
                        />
                      </figure>
                    </a>
                    <div className="items-center absolute bottom-0 left-0 w-full justify-between py-[15px] px-[35px] bg-yellow hidden">
                      <p className="text-dark text-lg font-semibold">Added to wish list</p>
                      <a href="#!" className="text-dark text-lg font-semibold">
                        View
                      </a>
                      <button>
                        <img loading="lazy" src="./src/assets/icons/close.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mt-5 justify-between">
                    <p className="text-light text-sm leading-[1.71]">Women Fashion</p>
                    <div className="like-btn">
                      <img
                        loading="lazy"
                        src="./src/assets/icons/heart-red.svg"
                        alt=""
                        className="like-btn__icon--liked"
                      />
                      <img loading="lazy" src="./src/assets/icons/heart.svg" alt="" className="like-btn__icon" />
                    </div>
                  </div>
                  <a href="#!">
                    <h3 className="mt-1 section-heading-4">Branch Pink Fashion Women</h3>
                  </a>
                  <p className="mt-3 text-dark text-lg font-semibold">$1399</p>
                  <div className="flex items-center gap-[15px] mt-3">
                    <div className="flex items-center gap-[6px]">
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                    </div>
                    <p>(540 reviews)</p>
                  </div>
                </div>
              </article>
              {/* <!-- Prod list item 3 --> */}
              <article className="flex-grow-0 flex-shrink-0 w-[33.3333333333%] px-[15px]">
                <div className="p-5 rounded-[15px] transition-all prod-item">
                  <div className="relative">
                    <a href="#!">
                      <figure>
                        <img
                          loading="lazy"
                          src="./src/assets/img/fashion/product/list/women/product3.jpg"
                          alt=""
                          className="w-full h-[310px] object-cover"
                        />
                      </figure>
                    </a>
                    <div className="items-center absolute bottom-0 left-0 w-full justify-between py-[15px] px-[35px] bg-yellow hidden">
                      <p className="text-dark text-lg font-semibold">Added to wish list</p>
                      <a href="#!" className="text-dark text-lg font-semibold">
                        View
                      </a>
                      <button>
                        <img loading="lazy" src="./src/assets/icons/close.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mt-5 justify-between">
                    <p className="text-light text-sm leading-[1.71]">Women-Shoes</p>
                    <div className="like-btn">
                      <img
                        loading="lazy"
                        src="./src/assets/icons/heart-red.svg"
                        alt=""
                        className="like-btn__icon--liked"
                      />
                      <img loading="lazy" src="./src/assets/icons/heart.svg" alt="" className="like-btn__icon" />
                    </div>
                  </div>
                  <a href="#!">
                    <h3 className="mt-1 section-heading-4">Corporate Office Shoes</h3>
                  </a>
                  <p className="mt-3 text-dark text-lg font-semibold">$499</p>
                  <div className="flex items-center gap-[15px] mt-3">
                    <div className="flex items-center gap-[6px]">
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                    </div>
                    <p>(540 reviews)</p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* <!-- Prod list 4 --> */}
          <div className="hidden">
            <div className="flex flex-wrap -mt-[30px] -mx-[15px]">
              {/* <!-- Prod list item 1 --> */}
              <article className="flex-grow-0 flex-shrink-0 w-[33.3333333333%] px-[15px]">
                <div className="p-5 rounded-[15px] transition-all prod-item">
                  <div className="relative">
                    <a href="#!">
                      <figure>
                        <img
                          loading="lazy"
                          src="./src/assets/img/fashion/product/list/kids/product1.jpg"
                          alt=""
                          className="w-full h-[310px] object-cover"
                        />
                      </figure>
                    </a>
                    <div className="items-center absolute bottom-0 left-0 w-full justify-between py-[15px] px-[35px] bg-yellow hidden">
                      <p className="text-dark text-lg font-semibold">Added to wish list</p>
                      <a href="#!" className="text-dark text-lg font-semibold">
                        View
                      </a>
                      <button>
                        <img loading="lazy" src="./src/assets/icons/close.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mt-5 justify-between">
                    <p className="text-light text-sm leading-[1.71]">Kids Fashion</p>
                    <div className="like-btn">
                      <img
                        loading="lazy"
                        src="./src/assets/icons/heart-red.svg"
                        alt=""
                        className="like-btn__icon--liked"
                      />
                      <img loading="lazy" src="./src/assets/icons/heart.svg" alt="" className="like-btn__icon" />
                    </div>
                  </div>
                  <a href="#!">
                    <h3 className="mt-1 section-heading-4">Mid Century Modern Shirt</h3>
                  </a>
                  <p className="mt-3 text-dark text-lg font-semibold">$310</p>
                  <div className="flex items-center gap-[15px] mt-3">
                    <div className="flex items-center gap-[6px]">
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                    </div>
                    <p>(540 reviews)</p>
                  </div>
                </div>
              </article>
              {/* <!-- Prod list item 2 --> */}
              <article className="flex-grow-0 flex-shrink-0 w-[33.3333333333%] px-[15px]">
                <div className="p-5 rounded-[15px] transition-all prod-item">
                  <div className="relative">
                    <a href="#!">
                      <figure>
                        <img
                          loading="lazy"
                          src="./src/assets/img/fashion/product/list/kids/product2.jpg"
                          alt=""
                          className="w-full h-[310px] object-cover"
                        />
                      </figure>
                    </a>
                    <div className="items-center absolute bottom-0 left-0 w-full justify-between py-[15px] px-[35px] bg-yellow hidden">
                      <p className="text-dark text-lg font-semibold">Added to wish list</p>
                      <a href="#!" className="text-dark text-lg font-semibold">
                        View
                      </a>
                      <button>
                        <img loading="lazy" src="./src/assets/icons/close.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mt-5 justify-between">
                    <p className="text-light text-sm leading-[1.71]">Kids-Shoe</p>
                    <div className="like-btn">
                      <img
                        loading="lazy"
                        src="./src/assets/icons/heart-red.svg"
                        alt=""
                        className="like-btn__icon--liked"
                      />
                      <img loading="lazy" src="./src/assets/icons/heart.svg" alt="" className="like-btn__icon" />
                    </div>
                  </div>
                  <a href="#!">
                    <h3 className="mt-1 section-heading-4">The Shoe Size Kids</h3>
                  </a>
                  <p className="mt-3 text-dark text-lg font-semibold">$539</p>
                  <div className="flex items-center gap-[15px] mt-3">
                    <div className="flex items-center gap-[6px]">
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                    </div>
                    <p>(540 reviews)</p>
                  </div>
                </div>
              </article>
              {/* <!-- Prod list item 3 --> */}
              <article className="flex-grow-0 flex-shrink-0 w-[33.3333333333%] px-[15px]">
                <div className="p-5 rounded-[15px] transition-all prod-item">
                  <div className="relative">
                    <a href="#!">
                      <figure>
                        <img
                          loading="lazy"
                          src="./src/assets/img/fashion/product/list/kids/product3.jpg"
                          alt=""
                          className="w-full h-[310px] object-cover"
                        />
                      </figure>
                    </a>
                    <div className="items-center absolute bottom-0 left-0 w-full justify-between py-[15px] px-[35px] bg-yellow hidden">
                      <p className="text-dark text-lg font-semibold">Added to wish list</p>
                      <a href="#!" className="text-dark text-lg font-semibold">
                        View
                      </a>
                      <button>
                        <img loading="lazy" src="./src/assets/icons/close.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mt-5 justify-between">
                    <p className="text-light text-sm leading-[1.71]">Kids-Cap</p>
                    <div className="like-btn">
                      <img
                        loading="lazy"
                        src="./src/assets/icons/heart-red.svg"
                        alt=""
                        className="like-btn__icon--liked"
                      />
                      <img loading="lazy" src="./src/assets/icons/heart.svg" alt="" className="like-btn__icon" />
                    </div>
                  </div>
                  <a href="#!">
                    <h3 className="mt-1 section-heading-4">Cap Is The Kids</h3>
                  </a>
                  <p className="mt-3 text-dark text-lg font-semibold">$39</p>
                  <div className="flex items-center gap-[15px] mt-3">
                    <div className="flex items-center gap-[6px]">
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                      <img loading="lazy" src="./src/assets/icons/star-small.svg" alt="" />
                    </div>
                    <p>(540 reviews)</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListCate;
