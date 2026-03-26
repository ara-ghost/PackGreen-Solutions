import { SERVICES_CONTENT } from "../assets";
import { RiPencilRulerLine, RiTruckLine, RiBrushLine, RiSettings3Line, RiFocus3Line } from "@remixicon/react";

const Services = () => {
  const serviceIcons = [
    <RiPencilRulerLine size={40} />, 
    <RiTruckLine size={40} />, 
    <RiBrushLine size={40} />,
    <RiSettings3Line size={40} />,
    <RiFocus3Line size={40} />
  ];

  return (
    <section id="services" className="py-24 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-[#333] leading-none">
            Our <span className="text-[#0a7055]">Services.</span>
          </h2>
          <p className="mt-6 text-2xl text-neutral-500 max-w-2xl font-medium italic">
            "Driven by innovation, uphold quality, and customer needs."
          </p>
        </div>

        <div className="space-y-32">
          {SERVICES_CONTENT.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <span className="absolute -top-16 -left-8 text-[12rem] font-black text-neutral-100 select-none -z-10">
                    0{index + 1}
                  </span>
                  
                  <div className="h-[400px] w-full bg-[#fdfaf3] rounded-3xl overflow-hidden shadow-xl border border-neutral-100 flex items-center justify-center">
                    <div className="text-[#0a7055]/10 group-hover:scale-110 transition-transform duration-500">
                       {serviceIcons[index] || <RiSettings3Line size={100} />}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6 group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fdfaf3] rounded-2xl text-[#0a7055] shadow-sm">
                  {serviceIcons[index] || <RiSettings3Line size={28} />}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#333]">
                  {service.title}
                </h3>
                
                <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-medium">
                  {service.description}
                </p>
                
                <div className="w-20 h-2 bg-[#0a7055] rounded-full transition-all duration-500 group-hover:w-48"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;