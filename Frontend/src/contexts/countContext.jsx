import { createContext, useState } from 'react';

const CountContext = createContext();

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    setCount(() => {
      if (count <= 1) return count;
      return count - 1;
    });
  };

  const handleIncrement = () => {
    setCount(() => {
      return count + 1;
    });
  };

  return (
    <CountContext.Provider value={{ count, setCount, handleDecrement, handleIncrement }}>
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, CountProvider };
