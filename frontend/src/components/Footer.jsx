import { useBrand } from "../context/BrandContext";
import { Link } from "react-router-dom";

export default function Footer() {
  const { brand } = useBrand();

  const styles =
    brand === "brand1" ? "bg-black text-white" : "bg-green-700 text-white";

  return (
    <footer className={`${styles} py-10 px-6 mt-20`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-bold mb-4">نزهه</h3>
          <p className="text-white/80 leading-relaxed">
            متجر إلكتروني حديث يقدم منتجات مميزة وتجربة تسوّق سلسة مع نمطين
            مختلفين للعلامة التجارية.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-bold mb-4">روابط مهمة</h3>
          <ul className="space-y-2 text-white/80">
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            <li>
              <Link to="/about">من نحن</Link>
            </li>
            <li>
              <Link to="/shop">المتجر</Link>
            </li>
            <li>
              <Link to="/contact">تواصل معنا</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-4">تابعنا</h3>
          <div className="flex gap-4 text-3xl">
            <a href="#" className="hover:opacity-80">
              📘
            </a>
            <a href="#" className="hover:opacity-80">
              📸
            </a>
            <a href="#" className="hover:opacity-80">
              🐦
            </a>
            <a href="#" className="hover:opacity-80">
              ▶️
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-white/60 mt-10 border-t border-white/20 pt-6">
        © {new Date().getFullYear()} جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
