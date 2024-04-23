const Service = () => {
  return (
    <div className="mt-[150px] bg-yellow">
      <div className="container-page">
        <div className="flex flex-wrap mt-[70px] py-[100px]">
          <article className="flex-grow-0 flex-shrink-0 basis-auto w-[25%] px-[15px]">
            <div className="flex items-center justify-center flex-col py-[38px] bg-white rounded-[18px] service-wrap--other1">
              <img src="./src/assets/icons/delivery.svg" alt="" />
              <h3 className="mt-[28px] section-heading-4">Same Day Delivery</h3>
              <p className="w-[75%] mt-[18px] text-center section-desc-3">
                We are providing same day delivery with a minimum cost at anytime anywhere.
              </p>
            </div>
          </article>

          <article className="flex-grow-0 flex-shrink-0 basis-auto w-[25%] px-[15px]">
            <div className="flex items-center justify-center flex-col py-[38px] bg-white rounded-[18px] service-wrap--other2">
              <img src="./src/assets/icons/next-delivery.svg" alt="" />
              <h3 className="mt-[28px] section-heading-4">Next Day Delivery</h3>
              <p className="w-[75%] mt-[18px] text-center section-desc-3">
                We are providing next day delivery without any minimum cost at anytime anywhere.
              </p>
            </div>
          </article>

          <article className="flex-grow-0 flex-shrink-0 basis-auto w-[25%] px-[15px]">
            <div className="flex items-center justify-center flex-col py-[38px] bg-white rounded-[18px] service-wrap--other1">
              <img src="./src/assets/icons/store.svg" alt="" />
              <h3 className="mt-[28px] section-heading-4">Multiple Store</h3>
              <p className="w-[75%] mt-[18px] text-center section-desc-3">
                We have multiple store across the country and soon we will launch more stores.
              </p>
            </div>
          </article>

          <article className="flex-grow-0 flex-shrink-0 basis-auto w-[25%] px-[15px]">
            <div className="flex items-center justify-center flex-col py-[38px] bg-white rounded-[18px] service-wrap--other2">
              <img src="./src/assets/icons/platform.svg" alt="" />
              <h3 className="mt-[28px] section-heading-4">Trusted Platform</h3>
              <p className="w-[75%] mt-[18px] text-center section-desc-3">
                Our clients loves us so much. We are providing the best and bringing the best to the clients.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Service;
