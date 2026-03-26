import { SERVICES_CONTENT } from "../assets";
import { RiPencilRulerLine, RiTruckLine, RiBrushLine, RiSettings3Line, RiFocus3Line } from "@remixicon/react";
import { Reveal } from "./Reveal";
import { memo } from "react";

// Move icons outside to prevent re-creation on every render
const serviceIcons = [
  <RiPencilRulerLine size={40} key="1" />, 
  <RiTruckLine size={40} key="2" />, 
  <RiBrushLine size={40} key="3" />,
  <RiSettings3Line size={40} key="4" />,
  <RiFocus3Line size={40} key="5" />
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20">
          <Reveal>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-[#333] leading-none">
              Our <span className="text-[#0a7055]">Services.</span>
            </h2>
          </Reveal>
          <Reveal index={1}>
            <p className="mt-6 text-2xl text-neutral-500 max-w-2xl font-medium italic opacity-80">
              "Driven by innovation, uphold quality, and customer needs."
            </p>
          </Reveal>
        </div>

        <div className="space-y-32 md:space-y-48">
          {SERVICES_CONTENT.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Visual Side */}
              <div className="w-full lg:w-1/2">
                <Reveal index={index % 2}>
                  <div className="relative group">
                    {/* Background Number - Optimized opacity for less 'Paint' work */}
                    <span className="absolute -top-12 -left-8 md:-top-20 md:-left-12 text-[10rem] md:text-[15rem] font-black text-neutral-100/60 select-none -z-10 pointer-events-none">
                      0{index + 1}
                    </span>
                    
                    <div className="h-[350px] md:h-[450px] w-full bg-[#fdfaf3] rounded-[2.5rem] overflow-hidden shadow-xl border border-neutral-100 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="text-[#0a7055]/10 group-hover:scale-125 transition-transform duration-700 ease-out">
                         {/* Bigger visual impact for the background icon */}
                         {serviceIcons[index] ? 
                            Object.assign({}, serviceIcons[index], { props: { ...serviceIcons[index].props, size: 120 }}) 
                            : <RiSettings3Line size={120} />
                         }
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <Reveal index={2}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fdfaf3] rounded-2xl text-[#0a7055] shadow-sm ring-1 ring-neutral-100">
                    {serviceIcons[index] || <RiSettings3Line size={28} />}
                  </div>
                </Reveal>
                
                <Reveal index={3}>
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#333] leading-tight">
                    {service.title}
                  </h3>
                </Reveal>
                
                <Reveal index={4}>
                  <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-medium max-w-lg">
                    {service.description}
                  </p>
                </Reveal>
                
                <Reveal index={5}>
                  <div className="w-20 h-2 bg-[#0a7055] rounded-full" />
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Services);