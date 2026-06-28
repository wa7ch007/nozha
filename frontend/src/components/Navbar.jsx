import { useBrand } from "../context/BrandContext";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import BrandToggle from "./BrandToggle";

export default function Navbar() {
  const { brand } = useBrand();
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  const styles =
    brand === "brand1" ? "bg-black text-white" : "bg-green-600 text-white";

  return (
    <>
      {/* NAVBAR */}
      <nav className={`${styles} p-4 flex justify-between items-center`}>
        <Link to="/" className="text-2xl font-bold">
          نزهه
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-lg items-center">
          <Link to="/">الرئيسية</Link>
          <Link to="/about">من نحن</Link>
          <Link to="/contact">تواصل معنا</Link>
          <Link to="/shop">المتجر</Link>
          <Link to="/cart">السلة ({cart.length})</Link>

          {/* Brand Toggle Button */}
          <BrandToggle />
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(true)}>
          ☰
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 ${styles} z-50 p-6 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button className="text-3xl mb-6" onClick={() => setOpen(false)}>
          ✕
        </button>

        {/* Mobile Links */}
        <div className="flex flex-col gap-4 text-lg">
          <Link to="/" onClick={() => setOpen(false)}>
            الرئيسية
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            من نحن
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            تواصل معنا
          </Link>
          <Link to="/shop" onClick={() => setOpen(false)}>
            المتجر
          </Link>
          <Link to="/cart" onClick={() => setOpen(false)}>
            السلة ({cart.length})
          </Link>
        </div>

        {/* Brand Toggle Button (Mobile) */}
        <div className="mt-6">
          <BrandToggle />
        </div>
      </div>
    </>
  );
}
