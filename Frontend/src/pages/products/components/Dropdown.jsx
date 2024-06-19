import useClickOutSide from '@/hooks/useClickOutSide';

const dropdownValue = [
  {
    title: 'New',
    value: 'desc',
  },
  {
    title: 'Old',
    value: 'asc',
  },
  {
    title: 'Price decrease',
    value: 'price-desc',
  },
  {
    title: 'Price ascending',
    value: 'price-asc',
  },
  {
    title: 'Sale decrease',
    value: 'sale-desc',
  },
  {
    title: 'Sale ascending',
    value: 'sale-asc',
  },
];

const Dropdown = ({ onClick }) => {
  const { show, setShow, nodeRef } = useClickOutSide();

  return (
    <div className="relative" ref={nodeRef}>
      <button
        className="flex items-center gap-[21px] py-2 px-[15px] border border-[#c4d1d0] text-dark rounded-[5px] section-desc-1"
        onClick={() => setShow(!show)}
      >
        Sort by latest
        <img src="/assets/icons/arrow-down-small.svg" alt="" />
      </button>
      {show && (
        <div
          className="w-full absolute left-0 -translate-y-1 z-10 flex flex-col gap-[15px] py-2 px-[15px] bg-white border border-[#c4d1d0] rounded-b-[5px]"
          style={{ borderTop: 'initial' }}
        >
          {dropdownValue.map((item, index) => (
            <div
              data-value={item.value}
              className="section-desc-2 cursor-pointer"
              key={index}
              onClick={e => {
                onClick(e);
                setShow(!show);
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
