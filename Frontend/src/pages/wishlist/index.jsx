import Button from '@/components/button';
import ProductItem from '@/components/products/ProductItem';
import axios from 'axios';
import { useEffect, useState } from 'react';

const WishList = () => {
  const [productFavorite, setProductFavorite] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/products');
        setProductFavorite(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const productNew = productFavorite?.filter(product => product.category === 'newproduct');

  return (
    <main className="container-page">
      <div className="pt-[100px] pb-[150px]">
        <section className="flex justify-between pb-[30px] border-b border-grey">
          <section>
            <h2 className="section-heading section-heading-2">Wish List</h2>
            <p className="mt-[18px] section-desc-1">
              <strong>3</strong> items in your wishlist
            </p>
          </section>
          <div>
            <p className="section-heading-4">$648</p>
            <p className="mt-[6px] section-desc-1">Estimated total</p>
            <Button classname="mt-[18px] w-[390px]">Add all to cart</Button>
          </div>
        </section>
        <div className="mt-[30px] flex flex-wrap -mx-[15px]">
          {productNew?.map(product => (
            <ProductItem key={product.id} item={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default WishList;
