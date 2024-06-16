import { useContext } from 'react';
import { AccordionContext } from '../../../contexts/accordionContext';

const AccordionContent = ({ children }) => {
  const { show } = useContext(AccordionContext);
  return <>{show && <p className="w-[90%] mt-[10px] text-lg text-gray-500">{children}</p>}</>;
};

export default AccordionContent;
