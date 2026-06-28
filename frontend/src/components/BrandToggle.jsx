import { useBrand } from "../context/BrandContext";
import { useState } from "react";

export default function BrandToggle() {
  const { brand, toggleBrand } = useBrand();
  const [anim, setAnim] = useState("");

  const handleClick = () => {
    if (brand === "brand1") {
      setAnim("wave-anim");
    } else {
      setAnim("flash-anim");
    }

    toggleBrand();

    setTimeout(() => setAnim(""), 600);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative w-44 h-12 rounded-full overflow-hidden transition-all duration-300 
      ${brand === "brand1" ? "bg-black" : "bg-green-600"} ${anim}`}
    >
      {/* طبقة الأنيميشن — فوق الخلفية وتحت الـ knob */}
      <span className="absolute inset-0 wave-layer z-10"></span>
      <span className="absolute inset-0 flash-layer z-10"></span>

      {/* الـ knob — فوق كل شيء */}
      <span
        className={`absolute top-1 left-1 w-24 h-10 rounded-full bg-white flex items-center justify-center 
        font-bold text-sm text-black transition-all duration-300 z-20
        ${brand === "brand1" ? "translate-x-0" : "translate-x-[72px]"}`}
      >
        {brand === "brand1" ? "Sellore" : "The Wave"}
      </span>
    </button>
  );
}
