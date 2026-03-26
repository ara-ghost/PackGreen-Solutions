import { useEffect, useState } from "react";
import { HERO_CONTENT } from "../assets";
import { motion } from "framer-motion";

const Hero = () => {
    const images = [HERO_CONTENT.image, HERO_CONTENT.image2, HERO_CONTENT.image3];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length < 3) {
            console.error("Hero component only sees " + images.length + " images.");
        }

        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const nextIndex = (prev + 1) % images.length;
                return nextIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section id="home" className="relative w-full h-screen overflow-hidden">
            {images.map((img, index) => (
                <img 
                    key={index}
                    src={img} 
                    alt={`Background ${index}`}
                    className={`absolute inset-0 w-full h-full object-cover -z-20 transition-opacity duration-[2000ms] ease-in-out ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}

            <div className="absolute inset-0 bg-black/40 -z-10"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 pt-64 text-center text-white">
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-none"
                    style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
                >
                    Pack Green <br /> 
                    <span className="text-[#0a7055]">Life Green</span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-8 text-xl md:text-2xl font-medium tracking-tight max-w-2xl opacity-90"
                >
                    {HERO_CONTENT.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12"
                >
                    <a href="#products" className="px-10 py-4 bg-[#0a7055] text-white rounded-full font-bold uppercase tracking-widest hover:bg-[#085a44] transition-all">
                        Explore Products
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;