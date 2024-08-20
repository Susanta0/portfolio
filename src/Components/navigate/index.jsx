"use client";

import React from "react";
import { motion } from "framer-motion";

import { BtnList } from "@/app/data";
import { ResponsiveComponents } from "../ResponsiveComponents";
import { NavButton } from "./NavButton";
import { useScreenSize } from "../Hooks/useScreenSize";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const Navigation = () => {
  const angleIncre = 360 / BtnList.length;
  const size = useScreenSize();

  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  return (
    <>
      <div className=" fixed h-screen flex justify-center items-center w-full">
        <ResponsiveComponents>
          {({ size }) => {
            return size && size >= 480 ? (
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex justify-center items-center relative animate-spin-slow hover:pause group"
              >
                {BtnList.map((btn, ind) => {
                  const angleRad = (ind * angleIncre * Math.PI) / 180;
                  const redius = isLarge
                    ? "calc(20vw - 1rem)"
                    : isMedium
                    ? "calc(30vw - 1rem)"
                    : "calc(40vw - 1rem)";
                  const x = `calc(${redius} * ${Math.cos(angleRad)})`;
                  const y = `calc(${redius} * ${Math.sin(angleRad)})`;

                  return <NavButton key={btn.label} x={x} y={y} {...btn} />;
                })}
              </motion.div>
            ) : (
              <>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className=" w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-start justify-center xs:items-center relative group"
                >
                  {BtnList.slice(0, BtnList.length / 2).map((btn, ind) => {
                    return <NavButton key={btn.label} x={0} y={0} {...btn} />;
                  })}
                </motion.div>

                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className=" w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end justify-center xs:items-center relative group"
                >
                  {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                    (btn, ind) => {
                      return (
                        <NavButton
                          key={btn.label}
                          x={0}
                          y={0}
                          {...btn}
                          labelDirection="left"
                        />
                      );
                    }
                  )}
                </motion.div>
              </>
            );
          }}
        </ResponsiveComponents>
      </div>
    </>
  );
};
