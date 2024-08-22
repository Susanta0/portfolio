/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

import fiverr from "../../public/projects/fiverr.png"
import sephora from "../../public/projects/sephora.png"
import boat from "../../public/projects/boat.png"
import tata from "../../public/projects/tata.png"
import shillshowhub from "../../public/projects/shillshowhub.png"
import pluralsight from "../../public/projects/pluralsight.png"
import html from "../../public/projects/icons8-html.svg"
import css from "../../public/projects/icons8-css.svg"
import js from "../../public/projects/icons8-javascript.svg"
import react from "../../public/projects/icons8-react-native.svg"
import localStorage from "../../public/projects/icons8-storage-40.png"
import node from "../../public/projects/icons8-nodejs.svg"
import express from "../../public/projects/icons8-express.svg"
import mongodb from "../../public/projects/icons8-mongo-db-96.png"
import tailwind from "../../public/projects/icons8-tailwind-css.svg"
import chakra from "../../public/projects/icons8-chakra-ui.svg"

export const projectsData = [
    {
      id: 1,
      name: "Fiverr",
      description: "This is a full-stack application built to mimic the functionalities of the popular freelancing platform, utilizing a modern tech stack and focusing on key features such as authentication, dynamic content creation, and responsive design.",
      images:fiverr,
      techStack:[
        {jsLogo:js, label:"JavaScript"},
        {react:react,label:"React"},
        {node:node,label:"Node.js"},
        {express:express,label:"Express"},
        {mongo:mongodb,label:"MongoDB"},
        {chakraUi:chakra,label:"Chakra UI"},
        {tailwind:tailwind,label:"Tailwind Css"},
      ],
      github:"https://github.com/Susanta0/Fiverr",
      liveLink: "https://fiverr-one-zeta.vercel.app/",
    },
    {
      id: 2,
      name: "Sephora",
      description: "Implemented a dynamic Images Slider, enhancing the visual appeal and user experience. Engineered robust Product Browsing and Cart functionality, ensuring seamless navigation and a streamlined checkout process.",
      images:sephora,
      techStack:[
        {jsLogo:js,label:"JavaScript"},
        {react:react,label:"React"},
        {chakraUi:chakra,label:"Chakra UI"},
        {tailwind:tailwind,label:"Tailwind Css"},
      ],
      github:"https://github.com/Susanta0/Sephora",
      liveLink:"https://sephorasite.vercel.app/",
    },
    {
      id: 3,
      name: "Boat lifestyle",
      description: "Developed an e-commerce application specializing in smartwatches, earbuds, and related accessories. Implemented features such as a slider, responsive design, simple animations, automatic background video, and a user-friendly login interface.",
      images:boat,
      techStack:[
        {htmlLogo:html,label:"HTML"},
        {cssLogo:css,label:"Css"},
        {jsLogo:js,label:"JavaScript"},
        {localLogo:localStorage,label:"Local Storage"},
      ],
      github:"https://github.com/Susanta0/boAt-lifestyle",
      liveLink:"https://boatlife-style.netlify.app/",
    },
    {
      id: 4,
      name: "TATA 1mg",
      description: "This is a full-stack application built to mimic the functionalities of the popular e-commerce platform, TaTA 1mg. utilizing a modern tech stack and focusing on key features such as authentication, dynamic content creation.",
      images:tata,
      techStack:[
        {jsLogo:js,label:"JavaScript"},
        {react:react,label:"React"},
        {node:node,label:"Node.js"},
        {express:express,label:"Express"},
        {mongo:mongodb,label:"MongoDB"},
        {chakraUi:chakra,label:"Chakra UI"},
        {tailwind:tailwind,label:"Tailwind Css"},
      ],
      github: "https://github.com/Susanta0/TATA_1mg",
      liveLink:"https://tata-1mg-azure.vercel.app/",
    },
    {
      id: 5,
      name: "Skill-Showcase-Hub",
      description: "Skill Showcase Hub is a dynamic web platform built to provide a space for talented coders to showcase their skills through engaging contests. Participants can join contests, display their projects and also can win prize.",
      images:shillshowhub,
      techStack:[
        {jsLogo:js,label:"JavaScript"},
        {cssLogo:css,label:"Css"},
        {react:react,label:"React"},
        {localLogo:localStorage,label:"Local Storage"},
        {chakraUi:chakra,label:"Chakra UI"},
        {tailwind:tailwind,label:"Tailwind Css"},
      ],
      github: "https://github.com/Susanta0/Skill-Showcase-Hub",
      liveLink:"https://skill-showcase-hub.vercel.app/"
    },
    {
      id: 6,
      name: "Pluralsight",
      description: "created a clone of the Pluralsight website using only HTML, CSS & JavaScript. Developed an online education website facilitating.I mplemented features like user login interface, responsiveness, and dropdown menu.",
      images:pluralsight,
      techStack:[
        {htmlLogo:html,label:"HTML"},
        {cssLogo:css,label:"Css"},
        {jsLogo:js,label:"JavaScript"},
        {localLogo:localStorage,label:"Local Storage"},
      ],
      github: "https://github.com/Susanta0/Project_pluralsight",
      liveLink:"https://plural-sight-clone1.netlify.app/signin.html"
      
    },
  ];
  
  export const BtnList = [
    { label: "Home", link: "/", icon: "home", newTab: false },
    { label: "About", link: "/about", icon: "about", newTab: false },
    { label: "Skills", link: "/skills", icon: "skills", newTab: false },
    { label: "Projects", link: "/projects", icon: "projects", newTab: false },
    { label: "Contact", link: "/contact", icon: "contact", newTab: false },
    {
      label: "Github",
      link: "https://github.com/Susanta0",
      icon: "github",
      newTab: true,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/susanta-samanta28/",
      icon: "linkedin",
      newTab: true,
    },
    // {
    //   label: "X",
    //   link: "https://www.x.com/code_bucks",
    //   icon: "twitter",
    //   newTab: true,
    // },
    {
      label: "Resume",
      link: "/Susanta_Samanta_Resume.pdf",
      icon: "resume",
      newTab: true,
    },
  ];