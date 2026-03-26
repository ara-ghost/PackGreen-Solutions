import { ABOUT_CONTENT } from "../assets";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-[#fdfaf3] -z-10 rounded-2xl"></div>
              
              <img 
                src={ABOUT_CONTENT.image} 
                alt="About PackGreen" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#333] leading-none mb-8">
              About <span className="text-[#0a7055]">US</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-medium">
                {ABOUT_CONTENT.subtitle}
              </p>
            </div>

            <div className="mt-12">
              <a 
                href="#contact" 
                className="inline-block border-b-4 border-[#0a7055] pb-1 text-3xl font-black uppercase tracking-tighter text-[#333] hover:text-[#0a7055] transition-colors"
              >
                Learn More About Our Mission
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;