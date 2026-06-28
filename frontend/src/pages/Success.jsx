import { useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function Success() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart(); // ⭐ تفريغ السلة بعد الدفع
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4 text-green-600">
        تم الدفع بنجاح 🎉
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        شكرًا لك! تم استلام طلبك وسيتم التواصل معك قريبًا.
      </p>

      <a
        href="/"
        className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90"
      >
        العودة للمتجر
      </a>
    </div>
  );
}
