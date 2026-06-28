import { useBrand } from "../context/BrandContext";

export default function About() {
  const { brand } = useBrand();

  const bg = brand === "brand1" ? "bg-gray-100" : "bg-green-70";

  const titleColor = brand === "brand1" ? "text-black" : "text-green-700";

  return (
    <div className={`${bg} py-20 px-6`}>
      <div className="max-w-4xl mx-auto text-center">
        {/* عنوان الصفحة */}
        <h1 className={`text-4xl font-bold mb-6 ${titleColor}`}>من نحن</h1>

        {/* وصف عام */}
        <p className="text-gray-600 leading-relaxed text-lg">
          نحن متجر إلكتروني حديث يقدّم تجربة تسوّق فريدة تجمع بين الجودة العالية
          والتصميم العصري. نؤمن بأن التسوّق يجب أن يكون سهلاً، سريعاً، وممتعاً،
          ولهذا قمنا ببناء منصة تجمع بين البساطة والاحترافية.
        </p>

        {/* شكل ديكوري */}
        <div className="w-full h-40 bg-gradient-to-r from-gray-300 to-gray-200 rounded-xl my-10 shadow-inner"></div>

        {/* رؤيتنا */}
        <h2 className={`text-3xl font-bold mt-10 mb-4 ${titleColor}`}>
          رؤيتنا
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          أن نكون الوجهة الأولى للتسوّق الإلكتروني في العالم العربي، من خلال
          تقديم منتجات مختارة بعناية وتجربة مستخدم لا تُنسى.
        </p>

        {/* رسالتنا */}
        <h2 className={`text-3xl font-bold mt-10 mb-4 ${titleColor}`}>
          رسالتنا
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          توفير منتجات عالية الجودة بأسعار مناسبة، مع خدمة عملاء مميزة ودعم
          متواصل على مدار الساعة.
        </p>

        {/* قيمنا */}
        <h2 className={`text-3xl font-bold mt-10 mb-4 ${titleColor}`}>قيمنا</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">الجودة</h3>
            <p className="text-gray-600">
              نختار منتجاتنا بعناية لضمان أعلى مستوى من الجودة.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">الشفافية</h3>
            <p className="text-gray-600">
              نؤمن بالوضوح في الأسعار، السياسات، وطريقة العمل.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">الابتكار</h3>
            <p className="text-gray-600">
              نطوّر منصتنا باستمرار لنقدّم أفضل تجربة ممكنة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
