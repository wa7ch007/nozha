export default function Features() {
  const features = [
    {
      title: "توصيل سريع",
      desc: "نوصّل طلباتك بسرعة وموثوقية.",
      icon: "🚚",
    },
    {
      title: "جودة ممتازة",
      desc: "نقدّم منتجات مختارة بعناية.",
      icon: "⭐",
    },
    {
      title: "دفع آمن",
      desc: "عمليات دفع مشفّرة وآمنة.",
      icon: "🔒",
    },
    {
      title: "دعم 24/7",
      desc: "نحن هنا لخدمتك في أي وقت.",
      icon: "💬",
    },
  ];

  return (
    <div className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">لماذا نحن؟</h2>
      <p className="text-gray-600 text-center mt-2">
        تجربة تسوّق حديثة مصممة لك.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-4xl">{f.icon}</div>
            <h3 className="text-xl font-semibold mt-4">{f.title}</h3>
            <p className="text-gray-600 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
