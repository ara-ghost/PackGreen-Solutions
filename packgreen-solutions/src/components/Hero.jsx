import { useEffect, useState } from "react";
import { HERO_CONTENT } from "../assets";

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
                <h1 
                    className="text-5xl md:text-7xl lg:text-[10rem] p-2 uppercase font-black tracking-tighter leading-none"
                    style={{ textShadow: "4px 4px 20px rgba(0,0,0,0.8)" }}
                >
                    {HERO_CONTENT.title}
                </h1>

                <p 
                    className="mt-6 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-5xl leading-tight"
                    style={{ textShadow: "2px 2px 15px rgba(0,0,0,0.8)" }}
                >
                    {HERO_CONTENT.subtitle}
                </p>
            </div>
        </section>
    );
};

export default Hero;