import { useState } from "react"
import logo from "../assets/logo2.png"
import { RiCloseLine, RiMenu3Line, RiPhoneLine, RiMailLine } from "@remixicon/react"
import { LINKS } from "../assets/index"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#fdfaf3] border-b-2 border-neutral-200 shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 h-24 md:h-28">
                
                <div className="flex-shrink-0">
                    <a href="#">
                        <img 
                            src={logo} 
                            className="w-40 sm:w-48 md:w-80 h-auto"
                            alt="PackGreen Solutions"
                        />
                    </a>
                </div>

                <div className="flex md:hidden items-center space-x-4 ml-auto mr-4">
                    <a href="tel:+14378781352" className="text-[#333] p-2">
                        <RiPhoneLine size={28} />
                    </a>
                    <a href="mailto:info@packgreen.ca" className="text-[#333] p-2">
                        <RiMailLine size={28} />
                    </a>
                </div>

                <div className="hidden md:flex items-center space-x-10">
                    <div className="flex space-x-10">
                        {LINKS.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.link} 
                                className="uppercase text-3xl font-black tracking-tighter text-[#333] hover:text-green-700 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center space-x-5 border-l-2 border-neutral-300 pl-10">
                        <a href="tel:+14378781352" className="text-[#333] hover:text-green-700 transition-all hover:scale-110">
                            <RiPhoneLine size={32} />
                        </a>
                        <a href="mailto:info@packgreen.ca" className="text-[#333] hover:text-green-700 transition-all hover:scale-110">
                            <RiMailLine size={32} />
                        </a>
                    </div>
                </div>

                <div className="md:hidden">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="text-4xl text-[#333] focus:outline-none"
                    >
                        {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
                    </button>
                </div>
            </div>

            <div className={`
                absolute top-full left-0 w-full bg-[#fdfaf3] transition-all duration-500 shadow-2xl md:hidden
                ${isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-10 opacity-0 invisible pointer-events-none"}
            `}>
                <div className="flex flex-col p-8 space-y-6">
                    {LINKS.map((link, index) => (
                        <a 
                            key={index} 
                            href={link.link} 
                            className="text-4xl font-black uppercase text-[#333] border-b border-neutral-100 pb-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;