import Image from "next/image";
import bg from "../../../../public/background/nights.png";
import { RenderModel } from "@/Components/RenderModel";
import { AboutDetails } from "@/Components/About";
import "../../globals.css";
import dynamic from "next/dynamic";
export default function About() {
  const Lamp = dynamic(() => import("@/Components/models/Lamp"), {
    ssr: false,
  });
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        height={0}
        width={0}
        alt="home background images"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 -z-10">
        <RenderModel>
          <Lamp />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl smLtext-8xl lg:text-9xl text-accent">
            Susanta
          </h1>
          <p className="font-light text-foreground text-lg">
            Meet the Susanta behind this portfolio
          </p>
        </div>
      </div>
      <div className="-mt-64">
        <div className="wrapper">
          <div className="box"></div>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
