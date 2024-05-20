import Button from '@/components/button';

const NewsLetter = () => {
  return (
    <div className="w-full py-[25px] px-[30px] rounded-[15px] border border-[#e5e5e5] bg-white mt-[30px]">
      <h3 className="section-heading-4">News letter</h3>
      <p className="mt-[5px] section-desc-3">We won’t spam you :)</p>

      <form action="" className="flex flex-col gap-[15px] mt-[25px]">
        <input
          className="py-[11px] px-[15px] rounded-[5px] border border-[#e5e5e5] bg-white text-dark text-sm leading-[1.71] outline-none"
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
        />
        <input
          className="py-[11px] px-[15px] rounded-[5px] border border-[#e5e5e5] bg-white text-dark text-sm leading-[1.71] outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <Button classname="rounded-[5px] text-sm">Subscribe</Button>
      </form>
    </div>
  );
};

export default NewsLetter;
