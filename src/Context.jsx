import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products])

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")))
  }, [])

  return <Context.Provider value={{ products, setProducts }}>{children}</Context.Provider>
}

export default ContextProvider;