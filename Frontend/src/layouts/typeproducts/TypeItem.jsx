const TypeItem = ({ image, title, bgTransparent }) => {
  return (
    <article className="flex-grow-0 flex-shrink-0 basis-auto rounded-lg transition-all menu-container w-[25%] px-[15px] mt-[30px]">
      <a href="#!">
        <div className={`w-full h-[210px] flex justify-center items-end bg-yellowLighter`}>
          <img
            src={`./src/assets/img/${image}`}
            alt=""
            className={`${bgTransparent ? 'w-[172px] h-[180px] object-contain' : 'w-full h-[210px] object-cover'}`}
          />
        </div>
        <h3 className="mt-[18px] text-center mb-[10px] section-heading-4">{title}</h3>
      </a>
    </article>
  );
};

export default TypeItem;
