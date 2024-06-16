const Wallet = () => {
  return (
    <div className="flex-shrink-0 flex-grow-0 basis-auto w-full">
      <h2 className="section-heading section-heading-2">My Wallet</h2>
      <p className="section-desc-1 mb-4">Payment methods</p>

      <div className="grid grid-cols-3 basis-auto w-full gap-[30px] max-xl:grid-cols-2 max-lg:grid-cols-1">
        <div className="">
          <article className="relative z-0 h-full p-5 rounded-[10px] text-white bg-[#1e2e69]">
            <img
              src="/assets/img/card/fly-bg.svg"
              alt=""
              className="absolute top-0 right-0 z-[-1] pointer-events-none"
            />
            <div className="flex items-center gap-[6px]">
              <img src="/assets/img/card/fly.svg" alt="" />
              <span className="text-sm font-medium">FeatherCard</span>
            </div>
            <div className="mt-[37px] font-medium text-lg">1234 4567 8901 2221</div>
            <div className="flex items-center mt-5 justify-between">
              <div>
                <p className="font-medium text-[8px]">Card Holder</p>
                <p className="font-medium text-[10px]">Imran Khan</p>
              </div>
              <div className="payment-cart__expired">
                <p className="font-medium text-[8px]">Expired</p>
                <p className="font-medium text-[10px]">10/22</p>
              </div>
              <div className="payment-cart__circle"></div>
            </div>
          </article>
        </div>

        <div className="">
          <article className="relative z-0 h-full p-5 rounded-[10px] text-white bg-[#354151]">
            <img
              src="/assets/img/card/leaf-bg.svg"
              alt=""
              className="absolute top-0 right-0 z-[-1] pointer-events-none"
            />
            <div className="flex items-center gap-[6px]">
              <img src="/assets/img/card/leaf.svg" alt="" />
              <span className="text-sm font-medium">FeatherCard</span>
            </div>
            <div className="mt-[37px] font-medium text-lg">4567 8901 2221 1234</div>
            <div className="flex items-center mt-5 justify-between">
              <div>
                <p className="font-medium text-[8px]">Card Holder</p>
                <p className="font-medium text-[10px]">Imran Khan</p>
              </div>
              <div className="payment-cart__expired">
                <p className="font-medium text-[8px]">Expired</p>
                <p className="font-medium text-[10px]">11/22</p>
              </div>
              <div className="payment-cart__circle"></div>
            </div>
          </article>
        </div>

        <div className="">
          <a
            href="./add-new-card.html"
            className="flex flex-col items-center justify-center gap-[14px] min-h-[170px] h-full border border-dashed border-[#d2d1d6] rounded-[10px]"
          >
            <img src="/assets/icons/plus.svg" alt="" />
            <p className="font-medium">Add New Card</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
