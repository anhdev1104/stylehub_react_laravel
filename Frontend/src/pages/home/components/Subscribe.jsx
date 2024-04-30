const Subscribe = () => {
  return (
    <div className="relative flex flex-col items-center mt-[194px] py-[70px] rounded-[20px] bg-[#005d63]">
      <section>
        <h2 className="text-white section-heading-2 section-heading">Subscribe our newsletter</h2>
        <p className="mt-[10px] w-[80%] text-center text-gray-300 mx-auto section-desc-2">
          Reciev latest news, update, and many other things every week.
        </p>
      </section>

      <form action="" className="w-[450px] h-[60px] relative flex items-center mt-[32px] rounded-xl bg-white">
        <input
          type="email"
          className="w-full pr-[70px] pl-[26px] text-sm font-medium leading-[1.71] placeholder:text-[#b3b4b5] outline-none"
          placeholder="Enter your email"
        />
        <button type="submit" className="absolute top-0 right-0">
          <img src="./src/assets/icons/submit.svg" alt="" />
        </button>
      </form>

      <img src="./src/assets/icons/triangle.svg" alt="" className="absolute -top-5 left-[79px]" />
      <img src="./src/assets/icons/half-circle.svg" alt="" className="absolute right-[139px] bottom-[77px]" />
    </div>
  );
};

export default Subscribe;
