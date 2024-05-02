import Button from '../../components/button';

const BlogPage = () => {
  return (
    <main>
      <div className="flex items-center justify-center text-center py-[100px] bg-yellowLighter flex-col">
        <section className="flex items-center justify-center flex-col text-center">
          <h2 className="w-[35%] section-heading section-heading-2">Let’s shine your knowledge.</h2>
          <p className="w-[41%] mt-[18px] section-desc-1">
            We provide actionable insights to help you stay on the cutting edge of ecommerce. Join our thought
            leadership community to get ecommerce tips right to your inbox
          </p>
        </section>
        <form className="flex items-center gap-4 mt-[38px]">
          <input
            type="email"
            className="w-[297px] outline-none p-4 bg-white leading-[1.75]"
            placeholder="Enter your email"
          />
          <Button classname="bg-green text-white">Subscribe</Button>
        </form>
      </div>
      <div className="container-page">
        <div className="mt-[150px]">
          <div className="flex items-start gap-[30px]">
            <a
              href="./blog-detail.html"
              className="flex-grow-0 flex-shrink-0 basis-auto w-2/4 transition-all ease-in-out hover:scale-90 duration-300 group block"
            >
              <img src="./src/assets/img/blog/blog1.png" alt="" className="w-full object-cover h-[570px]" />
              <p className="text-light mt-5 section-desc-3">July 7, 2022 | By Warner</p>
              <h3 className="mt-3 transition-all line-clamp-2 text-ellipsis group-hover:text-orange section-heading-4">
                30 type of modern trendy fashion for women and men in 2022 worlwide
              </h3>
            </a>
            <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4">
              <a
                href="./blog-detail.html"
                className="transition-all ease-in-out hover:scale-90 duration-300 group flex items-start"
              >
                <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4 pr-[15px]">
                  <img src="./src/assets/img/blog/blog2.png" alt="" className="w-full object-cover h-[270px]" />
                </div>
                <div className="pl-[15px] flex-grow-0 flex-shrink-0 basis-auto w-2/4">
                  <p className="text-light section-desc-3">July 7, 2022 | By Warner</p>
                  <h3 className="mt-3 transition-all line-clamp-2 text-ellipsis group-hover:text-orange section-heading-4">
                    12 type of women hand bag in 2022
                  </h3>
                </div>
              </a>
              <a
                href="./blog-detail.html"
                className="items-start mt-[30px] transition-all ease-in-out hover:scale-90 duration-300 group flex "
              >
                <div className="pr-[15px] flex-grow-0 flex-shrink-0 basis-auto w-2/4">
                  <img src="./src/assets/img/blog/blog3.png" alt="" className="w-full object-cover h-[270px]" />
                </div>
                <div className="pl-[15px] flex-grow-0 flex-shrink-0 basis-auto w-2/4">
                  <p className="text-light section-desc-3">July 7, 2022 | By Warner</p>
                  <h3 className="mt-3 transition-all line-clamp-2 text-ellipsis group-hover:text-orange section-heading-4">
                    12 type of women hand bag in 2022
                  </h3>
                </div>
              </a>
            </div>
          </div>

          <div className="flex mt-[30px] flex-wrap -mx-[15px]">
            <a
              href="./blog-detail.html"
              className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] mt-[30px] transition-all ease-in-out hover:scale-90 duration-300 group block px-[15px]"
            >
              <img
                src="./src/assets/img/blog/blog4.png"
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
              className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] mt-[30px] transition-all ease-in-out hover:scale-90 duration-300 group block px-[15px]"
            >
              <img
                src="./src/assets/img/blog/blog5.png"
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
              className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] mt-[30px] transition-all ease-in-out hover:scale-90 duration-300 group block px-[15px]"
            >
              <img
                src="./src/assets/img/blog/blog6.png"
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
              className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] mt-[30px] transition-all ease-in-out hover:scale-90 duration-300 group block px-[15px]"
            >
              <img
                src="./src/assets/img/blog/blog7.png"
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
              className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] mt-[30px] transition-all ease-in-out hover:scale-90 duration-300 group block px-[15px]"
            >
              <img
                src="./src/assets/img/blog/blog8.png"
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
              className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] mt-[30px] transition-all ease-in-out hover:scale-90 duration-300 group block px-[15px]"
            >
              <img
                src="./src/assets/img/blog/blog9.png"
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
