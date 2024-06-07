import useToggle from '@/hooks/useToggle';
import { createContext } from 'react';

const AccordionContext = createContext();

function AccordionProvider({ children }) {
  const { on: show, handleToggle } = useToggle();

  return <AccordionContext.Provider value={{ show, handleToggle }}>{children}</AccordionContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AccordionContext, AccordionProvider };
