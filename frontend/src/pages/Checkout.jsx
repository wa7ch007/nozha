import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    payment: "card"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ⭐ Stripe Checkout
  const handlePayment = async () => {
    const res = await fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart })
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="max-w-5xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Order Summary */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">ملخص الطلب</h2>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.images[0]}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.price} د.إ</p>
              </div>
            </div>
          </div>
        ))}

        <div className="text-xl font-bold mt-4">الإجمالي: {total} د.إ</div>
      </div>

      {/* Checkout Form */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6">إتمام الطلب</h1>

        <form className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="الاسم الكامل"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="رقم الجوال"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="text"
            name="country"
            placeholder="الدولة"
            value={form.country}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <select
            name="payment"
            value={form.payment}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          >
            <option value="card">بطاقة بنكية</option>
            <option value="cod">الدفع عند الاستلام</option>
            <option value="apple">Apple Pay</option>
          </select>

          <button
            type="button"
            onClick={handlePayment}
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90"
          >
            الدفع عبر Stripe
          </button>
        </form>
      </div>
    </div>
  );
}
