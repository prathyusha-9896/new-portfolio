import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-black" : "text-[#b59765]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[#f1694f] ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#c1272d] mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
