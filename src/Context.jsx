import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products])

  return <Context.Provider value={{ products, setProducts }}>{children}</Context.Provider>
}

export default ContextProvider;