import { useBrand } from "../context/BrandContext";
import { Link } from "react-router-dom";

export default function CTA() {
  const { brand } = useBrand();

  const styles =
    brand === "brand1" ? "bg-gray-900 text-white" : "bg-green-700 text-white";

  return (
    <div className={`${styles} py-20 px-6 text-center`}>
      <h2 className="text-4xl font-bold">جاهز لاكتشاف المزيد؟</h2>
      <p className="text-white/80 mt-2">
        اكتشف منتجات مميزة مع تجربة علامتين مختلفتين.
      </p>

      <Link
        to="/shop"
        className="mt-6 inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:opacity-90"
      >
        تسوّق الآن
      </Link>
    </div>
  );
}
