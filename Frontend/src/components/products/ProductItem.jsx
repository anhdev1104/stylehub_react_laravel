import Button from '@/components/button/';
import { ModalFavorite } from '@/components/modal';
import { useContext, useEffect, useState } from 'react';
import SkeletonLoading from '../loading/SkeletonLoading';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FavoriteContext } from '@/contexts/favoriteContext';
import ShoppingCart from '@/helpers/ShoppingCart';

const ProductItem = ({ data, isTag = '', slide = false }) => {
  const [openModalBase, setOpenModalBase] = useState(false);
  const { favorites, addFavorite } = useContext(FavoriteContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.includes(data.id));
  }, [data.id, favorites]);

  const handleFavorite = () => {
    setIsFavorite(true);
    isFavorite && setOpenModalBase(true);

    if (!favorites.includes(data.id)) {
      // Thêm sản phẩm vào danh sách yêu thích
      addFavorite(data.id);
      toast.success('Successfully added to wish list.');
    }
  };

  const handleAddToCart = () => {
    const cart = new ShoppingCart();
    if (cart) {
      cart.addToCart(data.id, data.price);
      toast.success('Successfully added to cart.');
    }
  };

  return (
    <>
      <article
        className={`flex-grow-0 flex-shrink-0 basis-auto px-[15px] mt-[30px] ${
          slide ? 'w-full' : 'w-[33.3333333333%] max-lg:w-[50%] max-md:w-full'
        }`}
      >
        <div>
          <Link to={`/product/${data.id}`} className="w-full h-[310px] block relative">
            <img src={data?.images[0].image} alt="" className="w-full h-full object-cover select-none" />
            {isTag && (
              <p className="text-white absolute left-4 top-4 py-[6px] px-[10px] bg-dark section-desc-3">{isTag}</p>
            )}
          </Link>
          <div className="flex items-center justify-between mt-5">
            <p className="section-desc-3">{data.subcategory?.subcat_name}</p>
            <div className="cursor-pointer" onClick={handleFavorite}>
              {isFavorite ? (
                <img src="/assets/icons/heart-red.svg" alt="" />
              ) : (
                <img src="/assets/icons/heart.svg" alt="" />
              )}
            </div>
          </div>
          <Link to={`/product/${data.id}`}>
            <h3 className="mt-1 capitalize section-heading-4">{data?.product_name}</h3>
          </Link>
          <div className="flex items-center justify-between py-3 mb-7">
            <div className="flex items-center gap-2">
              <img src="/assets/icons/star-small.svg" alt="" />
              <p className="section-desc-1">5.0 (168)</p>
            </div>
            <div className="flex items-center gap-2">
              <p className={`text-lg font-semibold leading-relaxed ${data?.price && 'text-lighter line-through'}`}>
                ${Math.ceil(data?.initial_price)}
              </p>
              {data?.price && (
                <p className="text-[18px] font-semibold leading-relaxed text-orange">${Math.ceil(data?.price)}</p>
              )}
            </div>
          </div>
          <Button onClick={handleAddToCart} classname="w-full">
            Add to cart
          </Button>
        </div>
      </article>
      <ModalFavorite
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
        setIsFavorite={setIsFavorite}
        id={data.id}
      />
    </>
  );
};

export const ProductItemSkeleton = () => {
  return (
    <article className="flex-grow-0 flex-shrink-0 basis-auto px-[15px] mt-[30px] max-md:w-full max-lg:w-2/4 w-[33.3333333333%]">
      <div>
        <div className="w-full h-[310px] relative">
          <SkeletonLoading className="w-full h-[310px]" />
        </div>
        <div className="flex items-center justify-between mt-5">
          <SkeletonLoading className="w-[90px] h-4" />
          <SkeletonLoading className="w-5 h-4" />
        </div>
        <SkeletonLoading className="mt-3 w-[200px] h-4" />
        <div className="flex items-center justify-between py-3 mb-7">
          <SkeletonLoading className="w-[100px] h-3" />
          <SkeletonLoading className="w-[100px] h-3" />
        </div>
        <SkeletonLoading className="h-[50px] w-full" />
      </div>
    </article>
  );
};

export default ProductItem;
