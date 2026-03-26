import { RiPhoneLine, RiMailLine, RiMapPinLine } from "@remixicon/react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a7055] text-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/2 space-y-12">
            <div>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
                Let's <br /> <span className="text-[#fdfaf3]">Connect.</span>
              </h2>
              <p className="text-xl md:text-2xl text-green-100/80 font-medium max-w-md">
                Driven by innovation, we are here to provide sustainable alternatives to single-use plastic.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-[#0a7055] transition-all">
                  <RiPhoneLine size={32} />
                </div>
                <div>
                  <p className="text-sm uppercase font-bold tracking-widest text-green-200">Call Us</p>
                  <p className="text-2xl font-black tracking-tighter">+1 437 878 1352</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-[#0a7055] transition-all">
                  <RiMailLine size={32} />
                </div>
                <div>
                  <p className="text-sm uppercase font-bold tracking-widest text-green-200">Email Us</p>
                  <p className="text-2xl font-black tracking-tighter">info@packgreen.ca</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
              <h4 className="text-xl font-black uppercase tracking-tighter mb-2">Our Vision</h4>
              <p className="text-green-100/70 italic">
                "We are committed to offer sustainable packaging at the cheapest cost for making a greener world."
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-[#fdfaf3] p-10 md:p-14 rounded-[3rem] shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[#333] font-bold uppercase text-xs tracking-widest mb-2 ml-1">Name</label>
                  <input type="text" placeholder="John Doe" className="bg-white border border-neutral-200 p-4 rounded-2xl text-[#333] focus:outline-none focus:ring-2 focus:ring-[#0a7055] transition-all" />
                </div>
                <div className="flex flex-col">
                  <label className="text-[#333] font-bold uppercase text-xs tracking-widest mb-2 ml-1">Email</label>
                  <input type="email" placeholder="john@company.com" className="bg-white border border-neutral-200 p-4 rounded-2xl text-[#333] focus:outline-none focus:ring-2 focus:ring-[#0a7055] transition-all" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[#333] font-bold uppercase text-xs tracking-widest mb-2 ml-1">Subject</label>
                <input type="text" placeholder="Inquiry about Compostable Mailers" className="bg-white border border-neutral-200 p-4 rounded-2xl text-[#333] focus:outline-none focus:ring-2 focus:ring-[#0a7055] transition-all" />
              </div>

              <div className="flex flex-col">
                <label className="text-[#333] font-bold uppercase text-xs tracking-widest mb-2 ml-1">Message</label>
                <textarea rows="4" placeholder="How can we help your brand go green?" className="bg-white border border-neutral-200 p-4 rounded-2xl text-[#333] focus:outline-none focus:ring-2 focus:ring-[#0a7055] transition-all"></textarea>
              </div>

              <button className="w-full py-5 bg-[#0a7055] text-white font-black uppercase tracking-widest rounded-2xl hover:bg-[#085a44] transition-all shadow-xl active:scale-95">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;