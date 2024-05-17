import Button from '@/components/button/Button';
import { ModalCart, ModalFavorite } from '@/components/modal';
import { useState } from 'react';

const ProductItem = ({ item }) => {
  const [openModalBase, setOpenModalBase] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { background, image, subCate, productName, rating, countRating, price, priceSale, isTag } = item;
  const [openModalCart, setOpenModalCart] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(true);
    isFavorite && setOpenModalBase(true);
  };

  return (
    <>
      <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
        <div>
          <div className="w-full h-[310px] relative" style={{ background: `${background}` }}>
            <a href="#!">
              <img src={`${image}`} alt="" className="w-full h-full object-cover" />
            </a>
            <div className="w-full absolute left-0 bottom-0 py-[15px] px-[35px] bg-yellow items-center gap-5 hidden">
              <p className="text-[18px] font-semibold leading-relaxed">Added to wish list</p>
              <a href="#!" className="text-[18px] font-semibold leading-relaxed ml-auto underline">
                View
              </a>
              <button className="ml-5">
                <img src="../src/assets/icons/close.svg" alt="" />
              </button>
            </div>
            {isTag && (
              <p className="text-white absolute left-4 top-4 py-[6px] px-[10px] bg-dark section-desc-3">{isTag}</p>
            )}
          </div>
          <div className="flex items-center justify-between mt-5">
            <p className="section-desc-3">{subCate}</p>
            <div className="cursor-pointer" onClick={handleFavorite}>
              {isFavorite ? (
                <img src="../src/assets/icons/heart-red.svg" alt="" />
              ) : (
                <img src="../src/assets/icons/heart.svg" alt="" />
              )}
            </div>
          </div>
          <a href="#!">
            <h3 className="mt-1 section-heading-4">{productName}</h3>
          </a>
          <div className="flex items-center justify-between py-3 mb-7">
            <div className="flex items-center gap-2">
              <img src="../src/assets/icons/star-small.svg" alt="" />
              <p className="section-desc-1">{`${rating} (${countRating})`}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className={`text-lg font-semibold leading-relaxed ${priceSale && 'text-lighter line-through'}`}>
                ${price}
              </p>
              {priceSale && <p className="text-[18px] font-semibold leading-relaxed text-orange">${priceSale}</p>}
            </div>
          </div>
          <Button onClick={() => setOpenModalCart(true)}>Add to cart</Button>
        </div>
      </article>
      <ModalFavorite visible={openModalBase} onClose={() => setOpenModalBase(false)} />
      <ModalCart visible={openModalCart} onClose={() => setOpenModalCart(false)} />
    </>
  );
};

export default ProductItem;
