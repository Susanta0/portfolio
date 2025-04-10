'use client'
import { motion } from "framer-motion";
import clsx from "clsx";
export const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
    initial={{scale:0}}
    whileInView={{scale:1}}
    transition={{duration:0.5}}
    viewport={{once:true}}
      className={clsx(
        "custom-bg px-6 sm:p-8 rounded-xl flex flex-col justify-center space-y-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};