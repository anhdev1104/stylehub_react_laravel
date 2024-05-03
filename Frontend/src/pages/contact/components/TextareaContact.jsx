const TextareaContact = props => {
  return (
    <textarea
      className="w-full h-[180px] p-[15px] border border-[#c4d1d0] resize-none text-dark leading-[1.67] placeholder:text-light outline-none"
      {...props}
    ></textarea>
  );
};

export default TextareaContact;
