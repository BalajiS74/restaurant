import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedItems = localStorage.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [cartCount, setCardCount] = useState(() => {
    const storedCount = localStorage.getItem("cartCount");
    return storedCount ? JSON.parse(storedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartCount", JSON.stringify(cartCount));
  }, [cartItems, cartCount]);

  return (
    <cartContext.Provider value={{ cartItems, setCartItems, cartCount, setCardCount }}>
      {children}
    </cartContext.Provider>
  );
};
