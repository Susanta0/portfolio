// "use client";
import React from "react";
import { Dock, DockIcon } from "../magicui/dock";
import Image from "next/image";
import { ItemLayout } from "./ItemLayout";

export const AboutDetails = () => {
  // const handleIconClick = (url) => {
  //   window.open(url, '_blank', 'noopener,noreferrer');
  // };

  return (
    <section className="py-20 w-full">
      <div className=" grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className=" text-xl md:text-2xl text-left w-full capitalize">
            Let Me Introduce My Self
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            A dedicated Full stack developer with a BA from Kharagpur College. I
            am passionate about enhancing my coding and communication skills,
            with a particular focus on native application development. Actively
            engaged in building web applications, I am committed to crafting
            user-friendly interfaces, which is crucial for my personal growth
            and professional refinement in web development. My technical skill
            set includes HTML, CSS, JavaScript, Tailwind, Chakra UI, React,
            Redux, Node.js, MongoDB, Express, Python, and Data Structures and
            Algorithms (DSA).
          </p>
          <div className="flex gap-4">
            <Image
              width={30}
              height={30}
              src="/profile/india2.gif"
              alt="location"
              className="bg-transparent"
            />
            <p className="font-semibold">Kolkata, WestBengal</p>
          </div>

          {/* <div className="w-fit">
        <Dock magnification={60} distance={100}>
          <DockIcon
            className="bg-black/10 dark:bg-white/10 p-3 text-black"
            onClick={() =>
              handleIconClick(
                "https://www.linkedin.com/in/susanta-samanta28/"
              )
            }
          >
            <Icons.linkedin className="size-full" />
          </DockIcon>
        </Dock>
      </div> */}
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full py-8 xs:py-10 xs:col-span-6 lg:col-span-4 text-accent"
          }
        >
          <p className=" font-semibold w-full text-left text-2xl sm:text-5xl">
            6+ <sub className="font-semibold text-base">Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={
            " col-span-full py-8 xs:py-10 xs:col-span-6 lg:col-span-4 text-accent"
          }
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            0+ <sub className="font-semibold text-base">(Fresher)</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=Susanta0&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Susanta0"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=Susanta0&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Susanta0"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=Susanta0&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="Susanta0"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=Susanta0&repo=Fiverr&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
            alt="Susanta0"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

const Icons = {
  linkedin: () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Linkedin</title>
      <path d="M4.98 3.5C4.98 5.42 6.57 7 8.5 7C10.42 7 12 5.42 12 3.5C12 1.57 10.42 0 8.5 0C6.57 0 4.98 1.57 4.98 3.5ZM3.5 21H6.5V14.5H3.5V21ZM12.5 21H15.5V14.5C15.5 12.24 13.76 10.5 11.5 10.5C9.24 10.5 7.5 12.24 7.5 14.5V21H10.5V14.5C10.5 13.67 11.17 13 12 13C12.83 13 13.5 13.67 13.5 14.5V21H12.5Z" />
    </svg>
  ),
};
