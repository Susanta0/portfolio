import Image from "next/image";
import bg from "../../public/background/bg.png";
import { Navigation } from "@/Components/navigate";
import { RenderModel } from "@/Components/RenderModel";
import dynamic from "next/dynamic";
// import Man from "@/Components/models/Man";

export default function Home() {
  const Man = dynamic(() => import("@/Components/models/Man"), {
    ssr: false,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="home background images"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-100"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel className="-mt-36">
          {/* <Cartun /> */}
          <Man/>
        </RenderModel>
      </div>
    </main>
  );
}
