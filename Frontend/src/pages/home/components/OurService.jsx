const OurService = () => {
  return (
    <div className="mt-[150px] max-md:mt-20">
      <div className="flex flex-wrap max-xl:w-full max-xl:mx-auto max-lg:flex-col max-lg:gap-10">
        {/* <!-- Service 1 --> */}
        <div className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] max-xl:flex max-xl:justify-center max-lg:w-full">
          <article className="flex items-center justify-center w-[370px] h-[268px] flex-col bg-[#fafafa] transition-all ease-in-out service__container max-xl:w-[90%]">
            <div className="bg-[#e5e5e5] rounded-full">
              <img loading="lazy" src="/assets/icons/delivery1.svg" alt="" className="p-[30px]" />
            </div>
            <h3 className="w-[75%] mt-5 text-center text-[25px] font-bold leading-[1.37]">
              Super Fast and Free Delivery
            </h3>
          </article>
        </div>
        {/* <!-- Service 2 --> */}
        <div className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] max-xl:flex max-xl:justify-center max-lg:w-full">
          <article className="flex items-center justify-center w-[370px] h-[268px] flex-col bg-[#fafafa] transition-all ease-in-out service__container max-xl:w-[90%]">
            <div className="bg-[#e5e5e5] rounded-full">
              <img loading="lazy" src="/assets/icons/money1.svg" alt="" className="p-[30px]" />
            </div>
            <h3 className="w-[75%] mt-5 text-center text-[25px] font-bold leading-[1.37]">Money back Guaranteed</h3>
          </article>
        </div>
        {/* <!-- Service 3 --> */}
        <div className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] max-xl:flex max-xl:justify-center max-lg:w-full">
          <article className="flex items-center justify-center w-[370px] h-[268px] flex-col bg-[#fafafa] transition-all ease-in-out service__container max-xl:w-[90%]">
            <div className="bg-[#e5e5e5] rounded-full">
              <img loading="lazy" src="/assets/icons/paymen.svg" alt="" className="p-[30px]" />
            </div>
            <h3 className="w-[75%] mt-5 text-center text-[25px] font-bold leading-[1.37]">
              Super Secure Payment System
            </h3>
          </article>
        </div>
      </div>
    </div>
  );
};

export default OurService;
