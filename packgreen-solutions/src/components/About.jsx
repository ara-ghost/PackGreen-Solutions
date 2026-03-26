import { ABOUT_CONTENT } from "../assets";
import { Reveal } from "./Reveal"; // Using our high-perf Reveal

const About = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side - Fixed Dimensions & Lazy Loading */}
          <div className="w-full lg:w-1/2">
            <Reveal>
              <div className="relative">
                {/* Background Decor - Simplified for GPU */}
                <div 
                  className="absolute -top-6 -left-6 w-72 h-72 bg-[#fdfaf3] -z-10 rounded-2xl hidden md:block" 
                  aria-hidden="true"
                />
                
                <img 
                  src={ABOUT_CONTENT.image} 
                  alt="About PackGreen Solutions" 
                  loading="lazy"
                  width="600" // Explicit for Lighthouse
                  height="500" // Explicit for Lighthouse
                  className="rounded-2xl shadow-xl w-full object-cover h-[400px] md:h-[500px]"
                  style={{ willChange: "transform" }}
                />
              </div>
            </Reveal>
          </div>

          {/* Text Side - Staggered Reveals */}
          <div className="w-full lg:w-1/2">
            <Reveal index={1}>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#333] leading-none mb-8 italic">
                About <span className="text-[#0a7055] not-italic">US</span>
              </h2>
            </Reveal>
            
            <Reveal index={2}>
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-medium">
                  {ABOUT_CONTENT.subtitle}
                </p>
              </div>
            </Reveal>

            <Reveal index={3}>
              <div className="mt-12">
                <a 
                  href="#contact" 
                  className="inline-block border-b-4 border-[#0a7055] pb-1 text-3xl font-black uppercase tracking-tighter text-[#333] hover:text-[#0a7055] transition-all hover:translate-x-2"
                >
                  Our Mission →
                </a>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;