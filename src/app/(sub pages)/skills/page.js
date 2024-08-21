import Image from "next/image";
import bg from "../../../../public/background/code.png";
import { RenderModel } from "@/Components/RenderModel";
import LookingGlass from "@/Components/models/LookingGlass";
import { TechSkillTools } from "@/Components/Skills";

export default function About() {
  return (
    <>
      <Image
        src={bg}
        height={0}
        width={0}
        alt="home background images"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-40 lg:top-60 -translate-y-1/2 left-0 -z-10">
        <RenderModel>
         <LookingGlass/>
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center mt-[35em] lg:mt-44 sm:mt-[40em]">
      <TechSkillTools/>
      </div>
    </>
  );
}
