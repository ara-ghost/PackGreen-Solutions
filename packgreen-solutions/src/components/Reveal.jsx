import { motion } from "framer-motion";

export const Reveal = ({ children, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }} // Reduced movement (easier to calculate)
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} // Stops watching once it's seen
      transition={{ 
        duration: 0.4, 
        delay: index < 4 ? index * 0.05 : 0, // Only stagger the first row
        ease: "easeOut" 
      }}
      style={{ willChange: "transform, opacity" }} // Tells GPU to take over
    >
      {children}
    </motion.div>
  );
};