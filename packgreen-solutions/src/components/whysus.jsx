import { WHY_CONTENT } from "../assets";
import { 
  RiLeafLine, 
  RiPriceTag3Line, 
  RiRefreshLine, 
  RiShieldCheckLine, 
  RiFocus3Line, 
  RiEarthLine 
} from "@remixicon/react";

const WhySustainable = () => {

  const icons = [
    <RiLeafLine />, 
    <RiPriceTag3Line />, 
    <RiRefreshLine />, 
    <RiShieldCheckLine />, 
    <RiFocus3Line />, 
    <RiEarthLine />
  ];

  const features = [
    WHY_CONTENT.subtitle1,
    WHY_CONTENT.subtitle2,
    WHY_CONTENT.subtitle3,
    WHY_CONTENT.subtitle4,
    WHY_CONTENT.subtitle5,
    WHY_CONTENT.subtitle6,
  ];

  return (
    <section id="why-sustainable" className="py-20 bg-[#fdfaf3] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#333] mb-16 leading-none">
          {WHY_CONTENT.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((text, index) => (
            <div 
              key={index} 
              className="bg-[#fafafa] p-10 rounded-3xl shadow-sm border border-neutral-200 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-white border border-neutral-100 rounded-full flex items-center justify-center text-[#0a7055] text-4xl mb-6 mx-auto group-hover:bg-[#0a7055] group-hover:text-white transition-colors">
                {icons[index]}
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tighter text-[#333]">
                {text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySustainable;