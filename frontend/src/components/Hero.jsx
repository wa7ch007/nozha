import { useBrand } from "../context/BrandContext";
import { Link } from "react-router-dom";

export default function Hero() {
  const { brand } = useBrand();

  const gradient =
    brand === "brand1"
      ? "bg-gradient-to-br from-black via-gray-800 to-gray-900 text-white"
      : "bg-gradient-to-br from-green-600 via-green-400 to-green-200 text-white";

  return (
    <div
      className={`${gradient} relative overflow-hidden py-32 px-6 text-center`}
    >
      {/* Floating blurred shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Content */}
      <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
        نزهه لمنتجات الشعر والثياب السودانية
      </h1>

      <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
        منتجات مميزة. أسلوبان للعلامة التجارية The Wave & Sellore تجربة واحدة
        سلسة.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <Link
          to="/shop"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90"
        >
          تسوّق الآن
        </Link>

        <Link
          to="/about"
          className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20"
        >
          اعرف المزيد
        </Link>
      </div>
    </div>
  );
}
