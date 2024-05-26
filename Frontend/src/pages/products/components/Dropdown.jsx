import useClickOutSide from '@/hooks/useClickOutSide';

const Dropdown = () => {
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
          <a href="#!" className="section-desc-2">
            A to Z
          </a>
          <a href="#!" className="section-desc-2">
            Price
          </a>
          <a href="#!" className="section-desc-2">
            New
          </a>
          <a href="#!" className="section-desc-2">
            Sale
          </a>
          <a href="#!" className="section-desc-2">
            Best Seller
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
