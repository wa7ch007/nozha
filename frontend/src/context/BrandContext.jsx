import { createContext, useState, useContext } from "react";

const BrandContext = createContext();

export const BrandProvider = ({ children }) => {
  const [brand, setBrand] = useState("brand1"); // brand1 = black/white, brand2 = green/white

  const toggleBrand = () => {
    setBrand((prev) => (prev === "brand1" ? "brand2" : "brand1"));
  };

  return (
    <BrandContext.Provider value={{ brand, toggleBrand }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => useContext(BrandContext);
