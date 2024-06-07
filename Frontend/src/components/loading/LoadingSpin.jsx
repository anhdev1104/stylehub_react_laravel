const LoadingSpin = ({ className }) => {
  return (
    <div
      className={`my-5 ${className} w-10 h-10 rounded-full border-4 border-t-transparent border-[#f62682] animate-spin mx-auto z-10 relative`}
    ></div>
  );
};

export default LoadingSpin;
