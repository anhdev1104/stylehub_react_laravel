import Button from '@/components/button';
import LoadingSpin from '@/components/loading/LoadingSpin';
import ProductItem from '@/components/products/ProductItem';
import { FavoriteContext } from '@/contexts/favoriteContext';
import { getProducts } from '@/services/products';
import { useContext, useEffect, useState, useMemo } from 'react';

const WishList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const { favorites } = useContext(FavoriteContext);

  const productWishlist = useMemo(() => {
    return products.filter(product => favorites.includes(product.id));
  }, [products, favorites]);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await getProducts();
      if (data) {
        setProducts(data);
      }
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    const total = productWishlist.reduce((acc, curr) => acc + +curr.price, 0);
    setTotalPrice(total);
  }, [productWishlist]);

  return (
    <main className="container-page">
      <div className="pt-[100px] pb-[150px]">
        <section className="flex justify-between pb-[30px] border-b border-grey">
          <section>
            <h2 className="section-heading section-heading-2">Wish List</h2>
            <p className="mt-[18px] section-desc-1">
              <strong>{favorites.length}</strong> items in your wishlist
            </p>
          </section>
          <div>
            <p className="section-heading-4">${Math.ceil(totalPrice)}</p>
            <p className="mt-[6px] section-desc-1">Estimated total</p>
            <Button classname="mt-[18px] w-[390px]">Add all to cart</Button>
          </div>
        </section>
        <div className="mt-[30px] flex flex-wrap -mx-[15px]">
          {loading && <LoadingSpin />}
          {!loading && favorites.length > 0
            ? productWishlist.map(product => <ProductItem key={product.id} data={product} />)
            : !loading && (
                <div className="mx-auto w-[500px]">
                  <img src="/assets/img/empty_favorites.jpg" alt="Empty Favorites" className="w-full" />
                </div>
              )}
        </div>
      </div>
    </main>
  );
};

export default WishList;
