const AboutContent = ({ data }) => {
  const { image, heading, content, start } = data;
  return (
    <div className={`flex items-center mb-[150px] ${start && 'flex-row-reverse'}`}>
      <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4 pr-[15px]">
        <img src={image} alt="" className="w-full h-[493px] object-cover" />
      </div>
      <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4 pl-[15px]">
        <div className={`${!start && 'ml-auto'} w-[85%]`}>
          <h2 className="section-heading section-heading-2">{heading}</h2>
          <p className=" mt-5 text-dark section-desc-1">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
