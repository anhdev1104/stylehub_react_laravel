import { useContext } from 'react';
import { AccordionContext } from '../../../contexts/accordionContext';

const AccordionContent = ({ children }) => {
  const { show } = useContext(AccordionContext);
  return <>{show && <p className="w-[65%] mt-[10px] text-lg">{children}</p>}</>;
};

export default AccordionContent;
