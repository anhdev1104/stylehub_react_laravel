const Banner = () => {
  return (
    <div
      className="relative w-full h-[424px] object-cover"
      style={{ backgroundImage: 'url(/assets/img/fashion/banner/banner-fa.png)' }}
    >
      <figure>
        <img
          loading="lazy"
          src="/assets/img/fashion/banner/banner-fa1.png"
          alt=""
          className="absolute right-0 -bottom-[97px] w-[505px] h-[427px] object-cover"
        />
      </figure>
      <div className="container-page">
        <section className="w-[70%] relative top-[337px]">
          <h1 className="text-dark text-[160px] font-extrabold leading-[1.12]" style={{ fontFamily: 'Roboto Slab' }}>
            Wear the best
          </h1>
          <p
            className="w-[40%] absolute right-[65px]
      bottom-[5px] text-dark section-desc-1"
          >
            The most wanted styles is waiting for you. Find the best styles of modern shoes for you. Still, the second
            option holds promised. could make the tagline.
          </p>
          <img
            loading="lazy"
            src="/assets/icons/ellipse.svg"
            alt=""
            className="absolute -left-[60px] bottom-2 -z-[1]"
          />
        </section>
      </div>
    </div>
  );
};

export default Banner;
