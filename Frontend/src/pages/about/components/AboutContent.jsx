const AboutContent = ({ data }) => {
  const { image, heading, content, start } = data;
  return (
    <div className={`flex flex-wrap max-md:justify-center items-center mb-[150px] max-md:mb-20 ${start && 'flex-row-reverse'}`}>
      <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4 max-md:w-full">
        <img src={image} alt="" className="w-full h-[493px] object-cover" />
      </div>
      <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4 pl-[15px] max-md:w-full max-md:mt-10">
        <div className={`${!start && 'ml-5'} w-[90%] max-md:w-full max-md:ml-0`}>
          <h2 className="section-heading section-heading-2">{heading}</h2>
          <p className=" mt-5 text-dark section-desc-1">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
