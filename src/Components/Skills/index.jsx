import React from 'react'
// import IconCloud from "@/components/magicui/icon-cloud";
// import ShineBorder from '@/components/magicui/shine-border';
// import SparklesText from '@/components/magicui/sparkles-text';
import Image from 'next/image';
import tech_tools from "/public/skills/techStack2.gif"
import frontend from "/public/skills/frontend.gif"
import backend from "/public/skills/backend.gif"
import tools from "/public/skills/tools.gif"
import IconCloud from '../magicui/icon-cloud';
import SparklesText from '../magicui/sparkles-text';
const slugs = [
    
    "javascript",
    "react",
    "html5",
    "css3",
    "tailwindcss",
    "chakraui",
    "redux",
    "nextdotjs",
    "mui",
    "shadcnui"

  ];
const slugs2 = [
  "nodedotjs",
  "express",
  "cypress",
  "npm",
  "nodemon",
  "redis",
  "mongodb",
  "mongoose",
  "amazonaws",
  "jsonwebtokens",
  "python",
  ];
const slugs3 = [
  "visualstudiocode",
  "github",
  "git",
  "vercel",
  "netlify",
  "figma",
  "postman",
  "replit",
  "codepen",
  "codesandbox",
  "icon",
  ];

export const TechSkillTools = () => {
  return (
    <>
     {/* <ShineBorder
        className="w-[95%] mt-5 h-fit left-[50%] -translate-x-[50%] rounded-lg border bg-background md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      > */}
         <div id='skills' className="flex items-center gap-2">
          <Image width={0} height={0} src={tech_tools} alt="Tech Stack" className="h-9 w-9 custom-bg rounded-full"/>
          <SparklesText className="font-bold text-2xl" text="Tech Stack & Tools" />
          <Image width={0} height={0} src={tech_tools} alt="Tech Stack" className="h-9 w-9 custom-bg rounded-full"/>
        </div>
        
        <div className='flex w-full justify-evenly mt-10'>
            {/* frontend */}
            <div className='flex flex-col space-y-2 items-center'>
                <div className="flex items-center gap-2">
                    <Image width={0} height={0} src={frontend} alt="Frontend" className="h-10 w-10 custom-bg rounded-full"/>
                    <SparklesText className="font-bold text-2xl" text="Frontend" />
                    <Image width={0} height={0} src={frontend} alt="Frontend" className="h-10 w-10 custom-bg rounded-full"/>
                </div>
                <div className=" relative flex h-full w-full max-w-[22rem] items-center justify-center overflow-hidden rounded-lg border custom-bg">
                    <IconCloud iconSlugs={slugs} />
                </div> 
            </div>

            {/* backend */}
            <div className='flex flex-col space-y-2 items-center'>
                <div className="flex items-center gap-2">
                    <Image height={0} width={0} src={backend} alt="Backend" className="h-10 w-10 custom-bg rounded-full"/>
                    <SparklesText className="font-bold text-xl" text="Backend" />
                    <Image height={0} width={0} src={backend} alt="Backend" className="h-10 w-10 custom-bg rounded-full"/>
                </div>
                <div className=" relative flex h-full w-full max-w-[22rem] items-center justify-center overflow-hidden rounded-lg border custom-bg">
                    <IconCloud iconSlugs={slugs2} />
                </div> 
            </div>

            {/* tools */}
            <div className='flex flex-col space-y-2 items-center'>
                <div className="flex items-center gap-2">
                    <Image height={0} width={0} src={tools} alt="Tools" className="h-10 w-10 custom-bg rounded-full"/>
                    <SparklesText className="font-bold text-2xl" text="Tools" />
                    <Image height={0} width={0} src={tools} alt="Tools" className="h-10 w-10 custom-bg rounded-full"/>
                </div>
                <div className=" relative flex h-full w-full max-w-[22rem] items-center justify-center overflow-hidden rounded-lg border custom-bg">
                    <IconCloud iconSlugs={slugs3} />
                </div> 
            </div>
          
        </div>
        

      {/* </ShineBorder> */}

    </>
  )
}