import { createContext, useState } from 'react';

const AccordionContext = createContext();

function AccordionProvider({ children }) {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };

  return <AccordionContext.Provider value={{ show, handleToggle }}>{children}</AccordionContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AccordionContext, AccordionProvider };
