import AccordionHeader from './AccordionHeader';
import AccordionContent from './AccordionContent';
import { AccordionProvider } from '@/contexts/accordionContext';

const Accordion = ({ heading, children }) => {
  return (
    <AccordionProvider>
      <div className="relative p-[30px] border border-[green] bg-white faq-container mb-[23px] max-md:p-[18px]">
        <AccordionHeader>{heading}</AccordionHeader>
        <AccordionContent>{children}</AccordionContent>
      </div>
    </AccordionProvider>
  );
};

export default Accordion;
