'use client'
import React from "react";
import AnimatedBeamDemo from "./AnimatedBeamDemo";
import Image from "next/image";
import { motion } from "framer-motion";

const item={
  hidden:{opacity:0,y:100},
  show:{opacity:1,y:0}
}

export const ProjectsLayout = ({
  id,
  images,
  name,
  description,
  techStack,
  github,
  liveLink,
}) => {
  return (
    // hover:border-pink-500/10 hover:shadow-pink-500/10
    <motion.div 
    variants={item}
    className="block rounded-xl border  border-gray-800 p-8 shadow-xl transition custom-bg">
      <Image src={images} />

      <h2 className="mt-4 text-xl font-bold text-white">{name}</h2>

      <p className="mt-1 text-sm text-gray-300 ">{description}</p>

      <br />
      <div className="flex items-center justify-between h-fit">
        {techStack.map((iconEle, ind) => (
          <>
          <span className="relative hover:text-accent cursor-pointer">

          
          <Image
            key={ind}
            src={Object.values(iconEle)[0]}
            height={30}
            width={30}
            className="custom-bg rounded-full"
          />
          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"/>
          <span className=" absolute hidden peer-hover:block px-2 py-1 -left-3 max-2 -top-4 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
          {Object.values(iconEle)[1]}
        </span>
        </span>
        </>
        ))}
      </div>
      <br />

      <AnimatedBeamDemo github={github} liveLink={liveLink} />
    </motion.div>
  );
};
