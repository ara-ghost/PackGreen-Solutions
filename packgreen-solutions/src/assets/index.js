import hero from "./assets/hero.webp";
import hero2  from "./assets/hero2.webp";
import hero3 from "./assets/hero3.webp";
import about from "./assets/about.webp";
import product1 from "./assets/product1.webp";
import product2 from "./assets/product2.webp";
import product3 from "./assets/product3.webp";
import product4 from "./assets/product4.webp";

export const LINKS = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About Us",
    link: "#about",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Products",
    link: "#products",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const HERO_CONTENT = {
  title: "PACK GREEN LIFE GREEN",
  subtitle: "Empowering SME's for sustainability.",
  image: hero,
  image2: hero2,
  image3: hero3,
};

export const ABOUT_CONTENT = {
  title: "ABOUT US",
  subtitle: "We are now in the world where using sustainable packaging is more powerful than ever for making a greener world to live. It is a time to say no to single-use plastic packaging because sustainability is no longer just a concept. It is an eco-friendly packaging global movement, businesses are feeling heat. Take a while and think how many packs you open in a week and those is eco-friendly or not. If “Not” then a question arises “What are we doing to be greener?”  PackGreen is committed to supply sustainable packaging that is bi-degradable, recyclable, no environment impact, by eliminating single-use plastic, thermocol, Styrofoam etc.  With our solutions, you can prepare for the future. PackGreen provides for your brand using bespoke quantities, dimensions, and designs.",
  image: about
}

export const WHY_CONTENT = {
  title: "Why Sustainable Packaging?",
  subtitle1: "Eco-friendly choice",
  subtitle2: "Lowest prices",
  subtitle3: "Re usable",
  subtitle4: "Reliable",
  subtitle5: "Perfect for any use",
  subtitle6: "No environmental impact."
}

export const SERVICES_CONTENT = [
  {
    title: "Packaging built for your specific needs",
    description:
      "We don't believe in one-size-fits-all. PackGreen provides custom dimensions and structural designs tailored to your product’s unique shape and weight, ensuring maximum protection with zero waste.",
  },
  {
    title: "On-time delivery. Quick response.",
    description:
      "Sustainability shouldn't slow you down. Our streamlined supply chain ensures quick response times and on-time delivery, helping your business transition to green packaging without missing a beat.",
  },
  {
    title: "Customized packaging.",
    description:
      "Elevate your unboxing experience. We offer bespoke branding and printing on all sustainable materials, allowing you to showcase your commitment to the planet without sacrificing your aesthetic.",
  },
];

export const PRODUCTS_CONTENT = [
  {
    title: "Compostable Mailers",
    description: "Plant-based shipping bags that disappear in months, not centuries. High-tensile strength for secure delivery.",
    image: product1,
    tag: "Compostable"
  },
  {
    title: "Recycled Fiber Boxes",
    description: "Heavy-duty corrugated containers made from 100% post-consumer waste. Perfect for bulk shipping.",
    image: product2,
    tag: "Recyclable"
  },
  {
    title: "Eco-Friendly Protective Wrap",
    description: "A sustainable alternative to plastic bubble wrap. Engineered from reinforced Kraft paper.",
    image: product3,
    tag: "Sustainable"
  },
  {
    title: "Bespoke Food Containers",
    description: "Biodegradable packaging designed for the food industry. Oil-resistant and 100% plastic-free.",
    image: product4,
    tag: "Eco-Friendly"
  }
];