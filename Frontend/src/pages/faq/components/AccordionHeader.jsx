import { useContext } from 'react';
import { AccordionContext } from '../../../contexts/accordionContext';

const AccordionHeader = ({ children }) => {
  const { show, handleToggle } = useContext(AccordionContext);

  return (
    <div className="flex items-center justify-between">
      <h3 className="text-[22px] font-medium leading-[1.45] max-md:text-[20px]">{children}</h3>
      <button
        className="font-medium leading-[1.45] w-[46px] h-[46px] relative bg-white border border-green text-[32px] flex items-center justify-center faq-container__btn"
        onClick={handleToggle}
      >
        {show ? '-' : '+'}
      </button>
    </div>
  );
};

export default AccordionHeader;
