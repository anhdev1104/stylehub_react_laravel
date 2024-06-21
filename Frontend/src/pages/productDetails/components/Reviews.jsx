import Button from '@/components/button';

const Reviews = () => {
  return (
    <div className="px-[45px] max-lg:p-0">
      <h3 className="section-heading-4">How would you rate this?</h3>
      <div className="flex items-center gap-1 mt-[8px]">
        <img src="/assets/icons/star-black.svg" alt="" />
        <img src="/assets/icons/star-black.svg" alt="" />
        <img src="/assets/icons/star-black.svg" alt="" />
        <img src="/assets/icons/star-black.svg" alt="" />
        <img src="/assets/icons/star-black.svg" alt="" />
      </div>
      <form action="" className="flex flex-col mt-[31px]">
        <div className="mb-[31px]">
          <label className="text-lg font-semibold leading-[1.67]" htmlFor="summaryWrite">
            Ad a headline
          </label>
          <input
            id="summaryWrite"
            name="summaryWrite"
            className="w-full p-[15px] mt-3 border border-grey bg-white text-dark text-lg leading-[1.67] placeholder:text-light outline-none"
            type="text"
            placeholder="Write a summary of your review"
            maxLength="100"
          />
        </div>
        <div className="mb-[31px]">
          <label className="text-lg font-semibold leading-[1.67]" htmlFor="reviewWrite">
            Write a review
          </label>
          <textarea
            className="w-full p-[15px] mt-3 border border-grey bg-white text-dark text-lg leading-[1.67] placeholder:text-light outline-none resize-none"
            name="reviewWrite"
            id="reviewWrite"
            cols="30"
            rows="10"
            placeholder="Tell us what do you think"
            maxLength="200"
          ></textarea>
        </div>
        <Button classname="mt-[31px] w-[200px]">Submit Review</Button>
      </form>
    </div>
  );
};

export default Reviews;
