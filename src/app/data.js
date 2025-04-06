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

import sephora from "../../public/projects/sephora.png"
import boat from "../../public/projects/boat.png"
import shillshowhub from "../../public/projects/shillshowhub.png"
import canva from "../../public/projects/canva.png"
import ai from "../../public/projects/ai-icon.png"
import googleAuth from "../../public/projects/google-authenticator-icon.png"
import razorpay from "../../public/projects/razorpay-icon.png"
import jwt from "../../public/projects/jwt.png"
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
      name: "Boat lifestyle",
      description: "This project is a web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It is designed to manage and showcase boat lifestyle products.",
      images:boat,
      techStack:[
        {react:react,label:"React"},
        {node:node,label:"Node.js"},
        {mongo:mongodb,label:"MongoDB"},
        {express:express,label:"Express"},
        {tailwind:tailwind,label:"Tailwind Css"},
        {razorpay:razorpay,label:"Razorpay"},
        {jwt:jwt,label:"JWT"},
      ],
      github:"https://github.com/Susanta0/boat_lifestyle",
      liveLink:"https://boat-lifestyle-chi.vercel.app/",
    },
    {
      id: 2,
      name: "Canva",
      description: "This is a MERN (MongoDB, Express, React, Node.js) stack project named \"Canva\". It is designed to provide a platform for creating and managing designs. The project is structured to separate frontend and backend functionalities, ensuring scalability and maintainability.",
      images:canva,
      techStack:[
        {react:react,label:"React"},
        {node:node,label:"Node.js"},
        {mongo:mongodb,label:"MongoDB"},
        {express:express,label:"Express"},
        {tailwind:tailwind,label:"Tailwind Css"},
        {ai:ai,label:"AI"},
        {googleAuth:googleAuth,label:"GoogleAuth"},
        {jwt:jwt,label:"JWT"},
      ],
      github:"https://github.com/Susanta0/canva",
      liveLink:"https://canva-buht.onrender.com/",
    },
    {
      id: 3,
      name: "Sephora",
      description: "Implemented a dynamic Images Slider, enhancing the visual appeal and user experience. Engineered robust Product Browsing and Cart functionality, ensuring seamless navigation and a streamlined checkout process.",
      images:sephora,
      techStack:[
        {jsLogo:js,label:"JavaScript"},
        {react:react,label:"React"},
        {localLogo:localStorage,label:"Local Storage"},
        {chakraUi:chakra,label:"Chakra UI"},
        {tailwind:tailwind,label:"Tailwind Css"},
      ],
      github:"https://github.com/Susanta0/Sephora",
      liveLink:"https://sephorasite.vercel.app/",
    },
    {
      id: 4,
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