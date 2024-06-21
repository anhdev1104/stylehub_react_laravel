const Feedback = () => {
  return (
    <div className="mt-[150px] max-md:mt-10">
      <div className="mx-auto text-center w-[60%] max-md:w-full">
        <h2 className="text-[#1e2a39] section-heading section-heading-2 max-md:text-[30px]">
          Companies that crush customer engagement with us
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-[30px] mt-[70px]">
          <article
            className="py-[25px] px-[18px] transition-all feedback-container"
            style={{ boxShadow: '0px 40px 150px -35px rgba(0, 0, 0, 0.2)' }}
          >
            <div className="justify-between flex items-center">
              <div className="flex items-center gap-2">
                <img
                  loading="lazy"
                  src="/assets/img/fashion/feedback/feedback-avt1.jpg"
                  alt=""
                  className="w-[45px] h-[45px] object-cover rounded-full"
                />
                <div>
                  <p className="text-dark text-sm font-medium">Surja Sen Das Raj</p>
                  <p className="mt-1 text-lighter text-sm">June 12, 2022</p>
                </div>
              </div>
              <div className="flex items-center gap-1 max-sm:flex-wrap">
                <img loading="lazy" src="/assets/icons/star-small.svg" className="max-sm:w-[15px]" alt="" />
                <img loading="lazy" src="/assets/icons/star-small.svg" className="max-sm:w-[15px]" alt="" />
                <img loading="lazy" src="/assets/icons/star-small.svg" className="max-sm:w-[15px]" alt="" />
                <img loading="lazy" src="/assets/icons/star-small.svg" className="max-sm:w-[15px]" alt="" />
                <img loading="lazy" src="/assets/icons/star-small.svg" className="max-sm:w-[15px]" alt="" />
              </div>
            </div>
            <blockquote className="mt-5 text-black text-sm leading-[1.61] line-clamp-4 text-ellipsis">
              UI HUT has an amazing resources of web templates, mobile ui etc. But specially I like their icons. It can
              be a great source to boost your design career
            </blockquote>
          </article>

          <article
            className="py-[25px] px-[18px] transition-all feedback-container"
            style={{ boxShadow: '0px 40px 150px -35px rgba(0, 0, 0, 0.2)' }}
          >
            <div className="justify-between flex items-center">
              <div className="flex items-center gap-2">
                <img
                  loading="lazy"
                  src="/assets/img/fashion/feedback/feedback-avt2.jpg"
                  alt=""
                  className="w-[45px] h-[45px] object-cover rounded-full"
                />
                <div>
                  <p className="text-dark text-sm font-medium">Syed Misba-Ul Hussain</p>
                  <p className="mt-[5px] text-lighter text-sm">June 12, 2022</p>
                </div>
              </div>
              <div className="flex items-center gap-1 max-sm:flex-wrap">
                <img loading="lazy" src="/assets/icons/star-small.svg" className="max-sm:w-[15px]" alt="" />
                <img loading="lazy" src="/assets/icons/star-small.svg" className="max-sm:w-[15px]" alt="" />
                <img loading="lazy" src="/assets/icons/star-small.svg" className="max-sm:w-[15px]" alt="" />
                <img loading="lazy" src="/assets/icons/star-small.svg" className="max-sm:w-[15px]" alt="" />
                <img loading="lazy" src="/assets/icons/star-small.svg" className="max-sm:w-[15px]" alt="" />
              </div>
            </div>
            <blockquote className="mt-5 text-black text-sm leading-[1.61] line-clamp-4 text-ellipsis">
              I will say this will be a game-changer for designers. They have a very interesting idea of sorting
              resources (templates and blocks) with a huge collection of resources. This will make the design work
              faster.
            </blockquote>
          </article>

          <article
            className="py-[25px] px-[18px] transition-all feedback-container"
            style={{ boxShadow: '0px 40px 150px -35px rgba(0, 0, 0, 0.2)' }}
          >
            <div className="justify-between flex items-center">
              <div className="flex items-center gap-2">
                <img
                  loading="lazy"
                  src="/assets/img/fashion/feedback/feedback-avt3.jpg"
                  alt=""
                  className="w-[45px] h-[45px] object-cover rounded-full"
                />
                <div>
                  <p className="text-dark text-sm font-medium">Shekh Al Raihan</p>
                  <p className="mt-[5px] text-lighter text-sm">June 12, 2022</p>
                </div>
              </div>
              <div className="flex items-center gap-1 max-sm:flex-wrap">
                <img loading="lazy" src="/assets/icons/star-small.svg" className="max-sm:w-[15px]" alt="" />
                <img loading="lazy" src="/assets/icons/star-small.svg" className="max-sm:w-[15px]" alt="" />
                <img loading="lazy" src="/assets/icons/star-small.svg" className="max-sm:w-[15px]" alt="" />
                <img loading="lazy" src="/assets/icons/star-small.svg" className="max-sm:w-[15px]" alt="" />
                <img loading="lazy" src="/assets/icons/star-small.svg" className="max-sm:w-[15px]" alt="" />
              </div>
            </div>
            <blockquote className="mt-5 text-black text-sm leading-[1.61] line-clamp-4 text-ellipsis">
              Full of resources. I found it quick and easy to purchase great illustrations at a reasonable price. Well
              done
            </blockquote>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
