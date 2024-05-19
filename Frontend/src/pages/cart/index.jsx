import Button from '@/components/button';
import Counter from '../productDetails/components/controlQuantity/Counter';

const CartPage = () => {
  return (
    <main className="container-page">
      <div className="pt-[100px] pb-[150px]">
        <div className="flex flex-wrap justify-between">
          <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4">
            <article>
              <div className="flex gap-8 mt-[18px] pb-[18px] border-b border-grey">
                <img src="./src/assets/img/product/detail/detail1.png" alt="" className="w-[150px] h-[150px]" />
                <div className="w-full">
                  <p className="text-lg font-semibold">Modern Green Sweater</p>
                  <p className="mt-1 mb-2 section-desc-2">Cart ID: 12345678910</p>
                  <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold text-gray-500 line-through">$160</p>
                    <p className="text-lg font-semibold text-orange">$60</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <Counter />
                    <div className="flex items-center gap-[30px] cursor-pointer text-xl text-red-500">
                      <i className="fa-solid fa-trash-can"></i>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article>
              <div className="flex gap-8 mt-[18px] pb-[18px] border-b border-grey">
                <img src="./src/assets/img/product/detail/detail1.png" alt="" className="w-[150px] h-[150px]" />
                <div className="w-full">
                  <p className="text-lg font-semibold">Modern Green Sweater</p>
                  <p className="mt-1 mb-2 section-desc-2">Cart ID: 12345678910</p>
                  <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold text-gray-500 line-through">$160</p>
                    <p className="text-lg font-semibold text-orange">$60</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <Counter />
                    <div className="flex items-center gap-[30px] cursor-pointer text-xl text-red-500">
                      <i className="fa-solid fa-trash-can"></i>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article>
              <div className="flex gap-8 mt-[18px] pb-[18px] border-b border-grey">
                <img src="./src/assets/img/product/detail/detail1.png" alt="" className="w-[150px] h-[150px]" />
                <div className="w-full">
                  <p className="text-lg font-semibold">Modern Green Sweater</p>
                  <p className="mt-1 mb-2 section-desc-2">Cart ID: 12345678910</p>
                  <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold text-gray-500 line-through">$160</p>
                    <p className="text-lg font-semibold text-orange">$60</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <Counter />
                    <div className="flex items-center gap-[30px] cursor-pointer text-xl text-red-500">
                      <i className="fa-solid fa-trash-can"></i>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article>
              <div className="flex gap-8 mt-[18px] pb-[18px] border-b border-grey">
                <img src="./src/assets/img/product/detail/detail1.png" alt="" className="w-[150px] h-[150px]" />
                <div className="w-full">
                  <p className="text-lg font-semibold">Modern Green Sweater</p>
                  <p className="mt-1 mb-2 section-desc-2">Cart ID: 12345678910</p>
                  <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold text-gray-500 line-through">$160</p>
                    <p className="text-lg font-semibold text-orange">$60</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <Counter />
                    <div className="flex items-center gap-[30px] cursor-pointer text-xl text-red-500">
                      <i className="fa-solid fa-trash-can"></i>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-auto w-2/4">
            <div className="ml-[130px]">
              <p className="pb-[18px] border-b border-grey section-heading-4">Order Summury</p>
              <div className="py-[18px]">
                <div className="flex items-center justify-between mb-3">
                  <p className="section-desc-3">Original Price</p>
                  <p className="font-bold section-desc-3">$582.00</p>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <p className="section-desc-3">Savings</p>
                  <p className="font-bold section-desc-3">$82.00</p>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <p className="section-desc-3">Shipping</p>
                  <p className="font-bold section-desc-3">FREE</p>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <p className="section-desc-3">Estimated Sales Tax</p>
                  <p className="font-bold section-desc-3">$3.50</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-[18px] border-t border-grey">
                <p className="text-dark text-xl font-bold">Total</p>
                <p className="text-orange text-xl font-bold">$582.00</p>
              </div>
              <Button classname="w-full mt-[44px] bg-yellow border-none text-dark hover:bg-yellow hover:text-dark hover:bg-opacity-60">
                Proceed to Check Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
