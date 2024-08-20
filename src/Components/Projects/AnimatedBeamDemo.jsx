"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../magicui/animated-beam";
import Link from "next/link";

const Circle = forwardRef(function Circle({ className, children }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

export default function AnimatedBeamDemo({github, liveLink}) {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);

  return (
    <div
      className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <Circle ref={div1Ref}>
            <Icons.github href={github} />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.eye href={liveLink} />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
      />
    </div>
  );
}

const Icons = {
  github: ({href}) => (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="cursor-pointer">

    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="black"
    >
      <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.112.82-.262.82-.582 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.757-1.334-1.757-1.09-.744.084-.729.084-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.836 2.807 1.305 3.492.998.107-.774.418-1.305.762-1.605-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.468-2.383 1.236-3.223-.123-.304-.536-1.527.117-3.182 0 0 1.008-.323 3.301 1.23a11.48 11.48 0 0 1 3.004-.403 11.482 11.482 0 0 1 3.003.403c2.293-1.553 3.299-1.23 3.299-1.23.654 1.655.241 2.878.118 3.182.77.84 1.236 1.913 1.236 3.223 0 4.61-2.803 5.625-5.473 5.922.43.37.814 1.104.814 2.226 0 1.606-.015 2.903-.015 3.297 0 .322.217.697.826.58C20.565 22.095 24 17.598 24 12.297 24 5.67 18.627.297 12 .297z" />
    </svg>
    </Link>
  ),
  eye: ({href}) => (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="black"
    >
      <path d="M12 5c-7.633 0-12 7-12 7s4.367 7 12 7 12-7 12-7-4.367-7-12-7zm0 12c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5zm0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" />
    </svg>
    </Link>
  ),
};
