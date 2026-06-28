import { Link } from "react-router-dom";
import { useBrand } from "../context/BrandContext";
import { productsBrand1, productsBrand2 } from "../data/products";

export default function Shop() {
  const { brand } = useBrand();

  const bg = brand === "brand1" ? "bg-gray-100" : "bg-green-50";

  const titleColor = brand === "brand1" ? "text-black" : "text-green-700";

  // Choose products based on active brand
  const products = brand === "brand1" ? productsBrand1 : productsBrand2;

  return (
    <div className={`${bg} py-20 px-6`}>
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className={`text-4xl font-bold mb-10 text-center ${titleColor}`}>
          المتجر
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden rounded-xl">
                <img
                  src={p.images[0]}
                  className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                />
                <img
                  src={p.images[1]}
                  className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
              </div>

              {/* Product Info */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-gray-600 mt-1">{p.price} د.إ</p>

                <Link
                  to={`/product/${p.id}`}
                  className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90"
                >
                  عرض المنتج
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
