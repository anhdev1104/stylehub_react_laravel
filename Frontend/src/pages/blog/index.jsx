import Button from '../../components/button';

const BlogPage = () => {
  return (
    <main>
      <div className="flex items-center justify-center text-center py-[100px] bg-yellowLighter flex-col">
        <section className="flex items-center justify-center flex-col text-center">
          <h2 className="w-[35%] section-heading section-heading-2 max-lg:w-full">Let’s shine your knowledge.</h2>
          <p className="w-[41%] mt-[18px] section-desc-1 max-lg:w-[90%]">
            We provide actionable insights to help you stay on the cutting edge of ecommerce. Join our thought
            leadership community to get ecommerce tips right to your inbox
          </p>
        </section>
        <form className="flex items-center gap-4 mt-[38px] max-sm:gap-0 max-sm:w-[95%]">
          <input
            type="email"
            className="w-[297px] outline-none p-4 bg-white max-sm:w-[60%] leading-none"
            placeholder="Enter your email"
          />
          <Button classname="bg-green text-white">Subscribe</Button>
        </form>
      </div>
      <div className="container-page">
        <div className="mt-[150px] max-lg:w-[80%] max-lg:mx-auto max-lg:mt-10 max-md:w-[90%]">
          <div className="flex items-start gap-[30px] flex-wrap">
            <a
              href="./blog-detail.html"
              className="flex-grow-0 flex-shrink-0 basis-auto w-[48%] transition-all ease-in-out hover:scale-90 duration-300 group block max-lg:w-full"
            >
              <img src="/assets/img/blog/blog1.png" alt="" className="w-full object-cover h-[570px]" />
              <p className="text-light mt-5 section-desc-3">July 7, 2022 | By Warner</p>
              <h3 className="mt-3 transition-all line-clamp-2 text-ellipsis group-hover:text-orange section-heading-4">
                30 type of modern trendy fashion for women and men in 2022 worlwide
              </h3>
            </a>
            <div className="flex-grow-0 flex-shrink-0 basis-auto w-[48%] max-lg:w-full">
              <a
                href="./blog-detail.html"
                className="transition-all ease-in-out hover:scale-90 duration-300 group flex items-start max-md:flex-col"
              >
                <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4 pr-[15px] max-lg:pr-0 max-md:w-full">
                  <img src="/assets/img/blog/blog2.png" alt="" className="w-full object-cover h-[270px] max-md:h-auto" />
                </div>
                <div className="pl-[15px] flex-grow-0 flex-shrink-0 basis-auto w-2/4 max-lg:pl-0 max-md:w-full">
                  <p className="text-light section-desc-3">July 7, 2022 | By Warner</p>
                  <h3 className="mt-3 transition-all line-clamp-2 text-ellipsis group-hover:text-orange section-heading-4">
                    12 type of women hand bag in 2022
                  </h3>
                </div>
              </a>
              <a
                href="./blog-detail.html"
                className="items-start mt-[30px] transition-all ease-in-out hover:scale-90 duration-300 group flex max-md:flex-col"
              >
                <div className="pr-[15px] flex-grow-0 flex-shrink-0 basis-auto w-2/4 max-lg:pr-0 max-md:w-full">
                  <img src="/assets/img/blog/blog3.png" alt="" className="w-full object-cover h-[270px] max-md:h-auto" />
                </div>
                <div className="pl-[15px] flex-grow-0 flex-shrink-0 basis-auto w-2/4 max-md:w-full">
                  <p className="text-light section-desc-3">July 7, 2022 | By Warner</p>
                  <h3 className="mt-3 transition-all line-clamp-2 text-ellipsis group-hover:text-orange section-heading-4">
                    12 type of women hand bag in 2022
                  </h3>
                </div>
              </a>
            </div>
          </div>

          <div className="flex mt-[30px] flex-wrap -mx-[15px] max-md:justify-between max-sm:justify-center">
            <a
              href="./blog-detail.html"
              className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] mt-[30px] transition-all ease-in-out hover:scale-90 duration-300 group block px-[15px] max-md:w-[48%] max-sm:w-[100%]"
            >
              <img
                src="/assets/img/blog/blog4.png"
                alt=""
                className="w-full object-cover blog-page-container__img--medium"
              />
              <p className="text-light mt-5 section-desc-3">July 7, 2022 | By Warner</p>
              <h3 className="mt-3 transition-all line-clamp-2 text-ellipsis group-hover:text-orange section-heading-4">
                12 type of shirts that a girl can wear in any casual party
              </h3>
            </a>

            <a
              href="./blog-detail.html"
              className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] mt-[30px] transition-all ease-in-out hover:scale-90 duration-300 group block px-[15px] max-md:w-[48%] max-sm:w-[100%]"
            >
              <img
                src="/assets/img/blog/blog5.png"
                alt=""
                className="w-full object-cover blog-page-container__img--medium"
              />
              <p className="text-light mt-5 section-desc-3">April 1, 2024 | By Warner</p>
              <h3 className="mt-3 transition-all line-clamp-2 text-ellipsis group-hover:text-orange section-heading-4">
                Modern trendy winter sweater for men and women
              </h3>
            </a>

            <a
              href="./blog-detail.html"
              className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] mt-[30px] transition-all ease-in-out hover:scale-90 duration-300 group block px-[15px] max-md:w-[48%] max-sm:w-[100%]"
            >
              <img
                src="/assets/img/blog/blog6.png"
                alt=""
                className="w-full object-cover blog-page-container__img--medium"
              />
              <p className="text-light mt-5 section-desc-3">April 1, 2024 | By Warner</p>
              <h3 className="mt-3 transition-all line-clamp-2 text-ellipsis group-hover:text-orange section-heading-4">
                Type of casual sports shoes for women 2022
              </h3>
            </a>

            <a
              href="./blog-detail.html"
              className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] mt-[30px] transition-all ease-in-out hover:scale-90 duration-300 group block px-[15px] max-md:w-[48%] max-sm:w-[100%]"
            >
              <img
                src="/assets/img/blog/blog7.png"
                alt=""
                className="w-full object-cover blog-page-container__img--medium"
              />
              <p className="text-light mt-5 section-desc-3">April 1, 2024 | By Warner</p>
              <h3 className="mt-3 transition-all line-clamp-2 text-ellipsis group-hover:text-orange section-heading-4">
                Type of casual sports shoes for women 2022
              </h3>
            </a>

            <a
              href="./blog-detail.html"
              className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] mt-[30px] transition-all ease-in-out hover:scale-90 duration-300 group block px-[15px] max-md:w-[48%] max-sm:w-[100%]"
            >
              <img
                src="/assets/img/blog/blog8.png"
                alt=""
                className="w-full object-cover blog-page-container__img--medium"
              />
              <p className="text-light mt-5 section-desc-3">April 1, 2024 | By Warner</p>
              <h3 className="mt-3 transition-all line-clamp-2 text-ellipsis group-hover:text-orange section-heading-4">
                10 Modern trendy winter sweater for men and women
              </h3>
            </a>

            <a
              href="./blog-detail.html"
              className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] mt-[30px] transition-all ease-in-out hover:scale-90 duration-300 group block px-[15px] max-md:w-[48%] max-sm:w-[100%]"
            >
              <img
                src="/assets/img/blog/blog9.png"
                alt=""
                className="w-full object-cover blog-page-container__img--medium"
              />
              <p className="text-light mt-5 section-desc-3">April 1, 2024 | By Warner</p>
              <h3 className="mt-3 transition-all line-clamp-2 text-ellipsis group-hover:text-orange section-heading-4">
                12 type of shirts that a girl can wear in any casual party
              </h3>
            </a>
          </div>
          <Button classname="w-fit mx-auto mt-[50px] mb-[100px]">Load More</Button>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
