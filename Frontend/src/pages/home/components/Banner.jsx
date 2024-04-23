import Button from '../../../components/button/Button';

const Banner = () => {
  return (
    <div className="bg-yellowLighter">
      <div className="container-page">
        <div className="flex items-center justify-between py-[70px]">
          <section className="w-[40%] flex-shrink-0">
            <h1 className="mb-5 section-heading section-heading-1">Find the best styles of modern shoes</h1>
            <p className="w-[90%] max-w-full text-dark section-desc-1">
              The most wanted styles is waiting for you. Find the best styles of modern shoes for you .
            </p>
            <Button classname="mt-[34px] max-w-[215px]" location="/">
              Explore Product
            </Button>
            <div className="flex items-center gap-[10px] mt-20">
              <span className="w-[30px] h-1 bg-dark cursor-default"></span>
              <span className="w-[30px] h-1 bg-white cursor-pointer"></span>
              <span className="w-[30px] h-1 bg-white cursor-pointer"></span>
            </div>
          </section>
          <div className="relative">
            <img src="./src/assets/img/banner-img/banner-1.png" alt="" className="w-[470px] h-[550px] object-cover" />
            <div className="w-[570px]">
              <img
                src="./src/assets/img/banner-img/banner-missing1.1.svg"
                alt=""
                className="absolute w-full z-[1] bottom-0 left-0"
              />
            </div>
            <img
              src="./src/assets/icons/many-pointed-star.svg"
              alt=""
              className="absolute z-[1] top-[100px] -left-[50px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
