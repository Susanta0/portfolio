import Image from "next/image";
import bg from "../../../../public/background/bg_home.jpeg";
import { ProjectList } from "@/Components/Projects";
import { projectsData } from "@/app/data";
import { RenderModel } from "@/Components/RenderModel";
import dynamic from "next/dynamic";

export default function Project() {
  const Staff = dynamic(() => import("@/Components/models/Staff"), {
    ssr: false,
  });
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="home background images"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />
      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/4 lg:translate-x-0 left-1/2 lg:-left-3 h-screen -z-10">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
