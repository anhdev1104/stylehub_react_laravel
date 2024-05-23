const Checkbox = () => {
  return (
    <label className="form__checkbox relative flex items-center select-none">
      <input type="checkbox" name="" id="" className="hidden checkbox-form" />
      <span className="ml-[29px] text-[15px] font-medium text-[#9e9da8]">Set as default card</span>
    </label>
  );
};

export default Checkbox;
