import Image from "next/image";
import bg from "../../public/background/bg.png";
import { RenderModel } from "../Components/RenderModel.jsx";
import Cartun from "../Components/models/Scene.jsx";
import { Navigation } from "../Components/navigate/index.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="home background images"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-100"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Cartun />
        </RenderModel>
      </div>
    </main>
  );
}
