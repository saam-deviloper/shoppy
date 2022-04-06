import React, { createContext, useEffect, useState } from "react";
//api
import { fetchApi } from "../services/fetchApi";
//context
export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setProducts(await fetchApi());
    };
    getData();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}
