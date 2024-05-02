const AboutMember = ({ data }) => {
  const { fullname, avatar, major } = data;
  return (
    <article className="flex items-center flex-col">
      <img src={avatar} alt="" className="w-[264px] h-[264px] rounded-full object-cover" />
      <h3 className="mt-[25px] font-medium leading-[1.75]">{fullname}</h3>
      <p className="mt-[5px] text-lighter text-sm">{major}</p>
    </article>
  );
};

export default AboutMember;
