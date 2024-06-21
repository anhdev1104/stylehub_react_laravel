import { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [totalPrice, setTotalPrice] = useState(0);

  return <CartContext.Provider value={{ totalPrice, setTotalPrice }}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
