import { useEffect, useState } from 'react';
import { getProductRandom } from '@/services/products';
import ProductItem from '@/components/products/ProductItem';

const Seller = () => {
  const [productSale, setProductSale] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getProductRandom(4);
      setProductSale(data);
    })();
  }, []);

  return (
    <div className="flex flex-wrap -mx-[15px] -mt-[30px]">
      <div className="flex-grow-0 flex-shrink-0 basis-auto w-[66.6666666667%] max-lg:w-full px-[15px] mt-[30px]">
        <img src="/assets/img/fashion/sale/sale-banner.png" alt="" className="w-full h-[518px] object-cover max-md:h-auto" />
      </div>
      {productSale?.length > 0 && productSale.map(product => <ProductItem key={product.id} data={product} />)}
      {/* <article className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] mt-[30px]">
        <div>
          <div className="w-full h-[310px] relative" style={{ background: '#d5e3e8' }}>
            <a href="#!">
              <img src="/assets/img/fashion/sale/sale1.png" alt="" className="w-full h-full object-cover" />
            </a>
            <div className="w-full absolute left-0 bottom-0 py-[15px] px-[35px] bg-yellow hidden">
              <p className="text-[18px] font-semibold leading-relaxed">Added to wish list</p>
              <a href="#!" className="text-[18px] font-semibold leading-relaxed">
                View
              </a>
              <button className="ml-5">
                <img src="/assets/icons/close.svg" alt="" />
              </button>
            </div>
            <p className="w-full absolute left-0 top-2/4 py-[15px] text-center bg-orange text-lg font-semibold text-white">
              OUT OF STOCK
            </p>
          </div>
          <div className="flex items-center justify-between mt-5">
            <p className="section-desc-3">Furniture</p>
            <div className="cursor-pointer">
              <img src="/assets/icons/heart.svg" alt="" />
            </div>
          </div>
          <a href="#!">
            <h3 className="mt-1 section-heading-4">Modern Black Chair</h3>
          </a>
          <div className="flex items-center justify-between py-3 mb-7">
            <div className="flex items-center gap-2">
              <img src="/assets/icons/star-small.svg" alt="" />
              <p className="section-desc-1">5.0 (132)</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-lg font-semibold text-light line-through">$110</p>
              <p className="text-lg font-semibold text-orange">$90</p>
            </div>
          </div>
          <Button>Add to cart</Button>
        </div>
      </article> */}
    </div>
  );
};

export default Seller;
