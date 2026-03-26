import { PRODUCTS_CONTENT } from "../assets";

const Products = () => {
  return (
    <section id="products" className="py-24 bg-[#fdfaf3] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-[#333] leading-none">
              Our <span className="text-[#0a7055]">Products</span>
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-neutral-600 font-medium">
              Every product we supply is engineered to be part of the solution, not the pollution.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PRODUCTS_CONTENT.map((product, index) => (
            <div key={index} className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              
              <div className="h-[400px] md:h-[500px] overflow-hidden relative">
                <div className="absolute top-6 left-6 z-10">
                   <span className="bg-[#0a7055] text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                     {product.tag}
                   </span>
                </div>

                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-10 border-t border-neutral-100">
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#333] mb-4">
                  {product.title}
                </h3>
                <p className="text-lg md:text-xl text-neutral-500 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;