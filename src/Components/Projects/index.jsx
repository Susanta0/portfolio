'use client'
import React from "react";
import { ProjectsLayout } from "./ProjectsLayout";
import { delay, motion } from "framer-motion";

const container={
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      staggerChildren:0.3,
      delayChildren:1.5
    }
  }
}

export const ProjectList = ({ projects }) => {
  return (
    <>
      <section className="bg-transparent text-white">
        <div className="mx-auto max-w-screen-xl xs:px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          {/* <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">All Projects</h2>
          </div> */}

          <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((items) => (
              <ProjectsLayout key={items.id} {...items} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};
