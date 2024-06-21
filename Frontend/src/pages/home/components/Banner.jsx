const Banner = () => {
  return (
    <div
      className="relative w-full h-[424px] object-cover max-md:h-[300px]"
      style={{ backgroundImage: 'url(/assets/img/fashion/banner/banner-fa.png)' }}
    >
      <div className="max-lg:w-[700px] max-lg:mx-auto max-md:w-[90%] max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-start">
      <figure>
        <img
          loading="lazy"
          src="/assets/img/fashion/banner/banner-fa1.png"
          alt=""
          className="absolute right-0 -bottom-[97px] w-[505px] h-[427px] object-cover max-xl:w-[350px] max-xl:h-auto max-md:w-[150px] max-md:top-52 max-sm:left-8 max-sm:top-36"
        />
      </figure>
      <div className="container-page">
        <section className="w-[65%] relative top-[337px] max-xl:left-10 max-lg:top-[370px] max-lg:flex max-lg:flex-col max-lg:left-0 max-md:top-[240px] max-sm:w-full max-sm:top-[340px]">
          <h1 className="text-dark text-[160px] font-extrabold leading-[1.12] max-xl:text-[120px] max-lg:text-[80px] max-md:text-[60px] max-sm:text-[35px]" style={{ fontFamily: 'Roboto Slab' }}>
            Wear the best
          </h1>
          <p
            className="w-[40%] absolute right-[65px]
      bottom-[5px] text-dark section-desc-1 max-xl:right-[-45px] max-xl:top-[200px] max-xl:w-[45%] max-lg:w-full max-lg:left-0 max-lg:top-[240px] max-md:top-[160px] max-sm:top-[75px] max-sm:text-[15px]"
          >
            The most wanted styles is waiting for you. Find the best styles of modern shoes for you. Still, the second
            option holds promised. could make the tagline.
          </p>
          <img
            loading="lazy"
            src="/assets/icons/ellipse.svg"
            alt=""
            className="absolute -left-[60px] bottom-2 -z-[1] max-xl:w-[440px] max-xl:top-[130px] max-lg:w-[350px] max-lg:top-[100px] max-md:hidden"
          />
        </section>
      </div>
      </div>
    </div>
  );
};

export default Banner;
