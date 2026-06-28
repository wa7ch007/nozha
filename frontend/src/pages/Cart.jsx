import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-6">سلة المشتريات</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">السلة فارغة</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.images[0]}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>

                  {/* السعر × الكمية */}
                  <p className="text-gray-600">
                    {item.price}د.إ × {item.qty}
                  </p>

                  {/* الإجمالي */}
                  <p className="font-semibold">{item.price * item.qty}د.إ</p>

                  {/* أزرار + و - */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded text-lg"
                    >
                      -
                    </button>

                    <span className="text-lg font-semibold">{item.qty}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* حذف كامل */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 font-semibold"
              >
                حذف
              </button>
            </div>
          ))}

          <div className="text-xl font-bold mt-6">الإجمالي: {total}د.إ</div>

          <Link
            to="/checkout"
            className="mt-6 block bg-black text-white py-3 rounded-lg text-center font-semibold hover:opacity-90"
          >
            إتمام الطلب
          </Link>
        </>
      )}
    </div>
  );
}
