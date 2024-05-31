import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TextSlide = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    dots: false, // dòng này để xóa dot buttons
  };

  return (
    <>
      <div className="w-full overflow-hidden h-[250px] flex justify-center items-center">
        <div className="bg-black -rotate-[2.5deg] w-[110%] -ml-[10px] py-4 text-slider">
          <Slider {...settings}>
            {new Array(5).fill(0).map((item, index) => (
              <div className="!inline-flex items-center gap-2" key={index}>
                <img src="/assets/icons/fire.svg" alt="" />
                <p className="text-white text-xl font-bold">GET 50% OFF IN THE BELOW PRODUCT</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TextSlide;
