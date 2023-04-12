import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);

  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price * product.count
  }, 0)

  const formatPrice = (price) => {
    return price.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products])

  return <Context.Provider value={{ products, setProducts, totalPrice, formatPrice }}>{children}</Context.Provider>
}

export default ContextProvider;