import { PRODUCTS_CONTENT } from "../assets";
import { Reveal } from "./Reveal";

const Products = () => {
  return (
    <section id="products" className="py-24 bg-[#fdfaf3] scroll-mt-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-[#333] leading-none">
                Our <span className="text-[#0a7055]">Products</span>
              </h2>
            </Reveal>
            <Reveal index={1}>
              <p className="mt-6 text-xl md:text-2xl text-neutral-600 font-medium italic">
                Every product we supply is engineered to be part of the solution.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PRODUCTS_CONTENT.map((product, index) => (
            <Reveal key={index} index={index}>
              <div className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100">
                
                {/* Image Container - Fixed Aspect Ratio */}
                <div className="h-[350px] md:h-[450px] overflow-hidden relative bg-neutral-200">
                  <div className="absolute top-6 left-6 z-10">
                     <span className="bg-[#0a7055] text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                       {product.tag}
                     </span>
                  </div>

                  <img 
                    src={product.image} 
                    alt={product.title} 
                    loading="lazy"
                    width="600"
                    height="450"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ willChange: "transform" }} 
                  />
                  
                  {/* Overlay - Simplified for performance */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
                
                <div className="p-8 md:p-10">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#333] mb-4">
                    {product.title}
                  </h3>
                  <p className="text-lg text-neutral-500 leading-relaxed max-w-prose">
                    {product.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;