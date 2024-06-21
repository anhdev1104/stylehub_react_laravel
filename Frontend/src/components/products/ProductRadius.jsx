import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalFavorite } from '../modal';
import SkeletonLoading from '../loading/SkeletonLoading';
import Button from '../button';
import { toast } from 'react-toastify';
import { FavoriteContext } from '@/contexts/favoriteContext';
import ShoppingCart from '@/helpers/ShoppingCart';

const ProductRadius = ({ data }) => {
  const [openModalBase, setOpenModalBase] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites, addFavorite } = useContext(FavoriteContext);

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
      <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px] group max-xl:w-[48%] max-lg:w-[90%] max-sm:w-full">
        <div className="relative">
          <Link to={`/product/${data.id}`}>
            <figure>
              <img src={data.images[0].image} alt="" className="w-full h-[274px] object-cover rounded-[10px]" />
            </figure>
          </Link>
          <Button
            className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 py-[14px] px-[26px] rounded-lg bg-green text-white text-sm font-bold opacity-0 invisible transition-all ease-out hover:text-yellow group-hover:opacity-100 group-hover:visible"
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>
        </div>
        <div className="flex items-center mt-5 justify-between">
          <p className="text-light text-sm leading-[1.71]">{data.subcategories?.subcat_name}</p>
          <div className="cursor-pointer" onClick={handleFavorite}>
            {isFavorite ? (
              <img src="/assets/icons/heart-red.svg" alt="" />
            ) : (
              <img src="/assets/icons/heart.svg" alt="" />
            )}
          </div>
        </div>
        <Link to={`/product/${data.id}`}>
          <h3 className="mt-1 section-heading-4 line-clamp-1 capitalize">{data.product_name}</h3>
        </Link>
        <div className="mt-3 flex items-center gap-3">
          <p className="text-lg font-semibold text-gray-500 line-through">${Math.ceil(data.initial_price)}</p>
          <p className="text-lg text-orange font-semibold">${Math.ceil(data.price)}</p>
        </div>
        <div className="flex items-center gap-5 mt-3">
          <div className="flex items-center gap-1">
            <img src="/assets/icons/star-small.svg" alt="" className="w-5" />
            <img src="/assets/icons/star-small.svg" alt="" className="w-5" />
            <img src="/assets/icons/star-small.svg" alt="" className="w-5" />
            <img src="/assets/icons/star-small.svg" alt="" className="w-5" />
            <img src="/assets/icons/star-small.svg" alt="" className="w-5" />
          </div>
          <p>(540 reviews)</p>
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

export function ProductRadiusSkeleton() {
  return (
    <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px] group max-xl:w-[48%] max-lg:w-[90%] max-sm:w-full">
      <div className="relative">
        <SkeletonLoading className="w-full h-[274px] rounded-[10px]" />
      </div>
      <div className="flex items-center mt-5 justify-between mb-3">
        <SkeletonLoading className="w-20 h-5" />
        <SkeletonLoading className="w-5 h-4" />
      </div>
      <SkeletonLoading className="w-full h-[30px]" />
      <div className="mt-3 flex items-center gap-3">
        <SkeletonLoading className="w-10 h-5" />
        <SkeletonLoading className="w-10 h-5" />
      </div>
      <div className="flex items-center gap-5 mt-3">
        <SkeletonLoading className="w-[200px] h-5" />
      </div>
    </article>
  );
}

export default ProductRadius;
