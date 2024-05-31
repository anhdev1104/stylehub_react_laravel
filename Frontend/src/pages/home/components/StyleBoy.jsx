const StyleBoy = () => {
  return (
    <div className="mt-[458px]">
      <div className="flex flex-wrap -mx-[15px] -mt-[15px]">
        <div className="flex-grow-0 flex-shrink-0 basis-auto w-[58.3333333333%] mt-[15px] px-[15px]">
          <div className="relative">
            <figure>
              <img
                loading="lazy"
                src="/assets/img/fashion/menu/menu-fa1.png"
                alt=""
                className="w-full object-cover h-[501px]"
              />
            </figure>
            <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
              <h3 className="relative z-[2] text-white text-[25px] font-bold leading-[1.37] tracking-[18px]">
                STREETSTYLE
              </h3>
              <div className="absolute top-[16px] -left-5 w-[402px] h-7 bg-yellow"></div>
            </div>
          </div>
        </div>
        <div className="flex-grow-0 flex-shrink-0 basis-auto w-[41.6666666667%]">
          <div className="flex flex-wrap">
            <div className="flex-grow-0 flex-shrink-0 basis-auto w-full mt-[15px] px-[15px]">
              <div className="relative">
                <figure>
                  <img
                    loading="lazy"
                    src="/assets/img/fashion/menu/menu-fa2.png"
                    alt=""
                    className="w-full object-cover h-[243px]"
                  />
                </figure>
                <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                  <h3 className="relative z-[2] text-white text-[15px] font-bold leading-[1.37] tracking-[10px]">
                    FORMAL BOY
                  </h3>
                  <div className="absolute top-[10px] -left-[15px] w-[211px] h-[15px] bg-yellowLight"></div>
                </div>
              </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 basis-auto w-full mt-[15px] px-[15px]">
              <div className="relative">
                <figure>
                  <img
                    loading="lazy"
                    src="/assets/img/fashion/menu/menu-fa3.png"
                    alt=""
                    className="w-full object-cover h-[243px]"
                  />
                </figure>
                <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                  <h3 className="relative z-[2] text-white text-[15px] font-bold leading-[1.37] tracking-[10px]">
                    CASUAL BOY
                  </h3>
                  <div className="absolute top-[10px] -left-[15px] w-[211px] h-[15px] bg-orange"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleBoy;
