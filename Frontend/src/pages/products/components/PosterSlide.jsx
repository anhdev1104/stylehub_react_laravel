import Slider from 'react-slick';

const PosterSlide = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
  };

  return (
    <div className="mt-[30px] max-w-full w-full poster-slide">
      <Slider {...settings}>
        <div>
          <img src="/assets/img/slide/men/slide1.jpg" alt="" className="w-full h-[700px] object-cover" />
        </div>
        <div>
          <img src="/assets/img/slide/men/slide2.jpg" alt="" className="w-full h-[700px] object-cover" />
        </div>
        <div>
          <img src="/assets/img/slide/men/slide3.jpg" alt="" className="w-full h-[700px] object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default PosterSlide;
