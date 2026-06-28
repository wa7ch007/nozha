import { useParams, Navigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { productsBrand1, productsBrand2 } from "../data/products";
import { useBrand } from "../context/BrandContext";
import { useState } from "react";

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { brand } = useBrand();

  const products = brand === "brand1" ? productsBrand1 : productsBrand2;
  const product = products.find((p) => p.id === Number(id));

  // ⭐ IMPORTANT: check BEFORE using product
  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const [anim, setAnim] = useState(false);
  const [main, setMain] = useState(product.images[0]);

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setMain(img)}
            className="w-full h-24 object-cover rounded-lg cursor-pointer border hover:opacity-80"
          />
        ))}
      </div>

      {/* Main Image */}
      <img src={main} className="w-full h-96 object-cover rounded-xl shadow" />

      <h1 className="text-4xl font-bold mt-6">{product.name}</h1>

      <p className="text-gray-600 mt-4 leading-relaxed">
        {product.description}
      </p>

      <p className="text-2xl font-semibold mt-4">{product.price} د.إ</p>

      <button
        onClick={() => {
          addToCart(product);
          setAnim(true);
          setTimeout(() => setAnim(false), 400);
        }}
        className={`mt-6 bg-black text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition 
        ${anim ? "added-anim" : ""}`}
      >
        إضافة إلى السلة
      </button>
    </div>
  );
}
