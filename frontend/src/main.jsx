import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrandProvider } from "./context/BrandContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrandProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </BrandProvider>
  </React.StrictMode>
);
