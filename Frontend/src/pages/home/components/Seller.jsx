import Button from '../../../components/button/Button';

const Seller = () => {
  return (
    <div className="flex flex-wrap -mx-[15px] -mt-[30px]">
      <div className="flex-grow-0 flex-shrink-0 basis-auto w-[66.6666666667%] px-[15px] mt-[30px]">
        <img src="./src/assets/img/fashion/sale/sale-banner.png" alt="" className="w-full h-[518px] object-cover" />
      </div>

      <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
        <div>
          <div className="w-full h-[310px] relative" style={{ background: '#d5e3e8' }}>
            <a href="#!">
              <img src="./src/assets/img/fashion/sale/sale1.png" alt="" className="w-full h-full object-cover" />
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
              <img src="./src/assets/img/fashion/sale/sale2.png" alt="" className="w-full h-full object-cover" />
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
              <img src="./src/assets/img/fashion/sale/sale3.png" alt="" className="w-full h-full object-cover" />
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
              <img src="./src/assets/img/fashion/sale/sale4.png" alt="" className="w-full h-full object-cover" />
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
  );
};

export default Seller;
