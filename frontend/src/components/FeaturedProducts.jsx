import { Link } from "react-router-dom";
import { productsBrand1, productsBrand2 } from "../data/products";
import { useBrand } from "../context/BrandContext";

export default function FeaturedProducts() {
  const { brand } = useBrand();
  const products = brand === "brand1" ? productsBrand1 : productsBrand2;
  return (
    <div className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center">منتجات مختارة</h2>
      <p className="text-gray-600 text-center mt-2">
        منتجات مميزة اخترناها لك.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
        {products.slice(0, 3).map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition group"
          >
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden rounded-lg">
              <img
                src={p.images[0]}
                className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              />
              <img
                src={p.images[1]}
                className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />
            </div>

            {/* Product Name */}
            <h3 className="text-xl font-semibold mt-3">{p.name}</h3>

            {/* Price */}
            <p className="text-gray-600">{p.price} ر.س</p>

            {/* Button */}
            <Link
              to={`/product/${p.id}`}
              className="mt-4 block bg-black text-white py-2 rounded-lg text-center hover:opacity-90"
            >
              عرض المنتج
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/shop"
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90"
        >
          عرض كل المنتجات
        </Link>
      </div>
    </div>
  );
}
