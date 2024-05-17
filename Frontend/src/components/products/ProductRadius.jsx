import { useState } from 'react';

const ProductRadius = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px] group">
      <div className="relative">
        <a href="#!">
          <figure>
            <img
              loading="lazy"
              src="../src/assets/img/fashion/product/list/all/product1.png"
              alt=""
              className="w-full h-[274px] rounded-[10px]"
            />
          </figure>
        </a>
        <div className="items-center absolute bottom-0 left-0 w-full justify-between py-[15px] px-[35px] bg-yellow hidden">
          <p className="text-lg font-semibold leading-[1.67]">Added to wish list</p>
          <a href="#!" className="ml-auto underline text-lg font-semibold leading-[1.67]">
            View
          </a>
          <button>
            <img loading="lazy" src="../src/assets/icons/close.svg" alt="" />
          </button>
        </div>
        <a
          href="#!"
          className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 py-[14px] px-[26px] rounded-lg bg-green text-white text-sm font-bold opacity-0 invisible transition-all ease-out hover:text-yellow group-hover:opacity-100 group-hover:visible"
        >
          Add to cart
        </a>
      </div>
      <div className="flex items-center mt-5 justify-between">
        <p className="text-light text-sm leading-[1.71]">Men-Cloths</p>
        <div className="like-btn cursor-pointer" onClick={() => setIsFavorite(!isFavorite)}>
          {isFavorite ? (
            <img loading="lazy" src="../src/assets/icons/heart-red.svg" alt="" />
          ) : (
            <img loading="lazy" src="../src/assets/icons/heart.svg" alt="" className="like-btn__icon" />
          )}
        </div>
      </div>
      <a href="#!">
        <h3 className="mt-1 section-heading-4">Mid Century Modern Shirt</h3>
      </a>
      <p className="text-lg mt-3 text-dark font-semibold">$110</p>
      <div className="flex items-center gap-[15px] mt-3">
        <div className="flex items-center gap-[6px]">
          <img loading="lazy" src="../src/assets/icons/star-small.svg" alt="" />
          <img loading="lazy" src="../src/assets/icons/star-small.svg" alt="" />
          <img loading="lazy" src="../src/assets/icons/star-small.svg" alt="" />
          <img loading="lazy" src="../src/assets/icons/star-small.svg" alt="" />
          <img loading="lazy" src="../src/assets/icons/star-small.svg" alt="" />
        </div>
        <p>(540 reviews)</p>
      </div>
    </article>
  );
};

export default ProductRadius;
