import Image from "next/image";
import bg from "../../../../public/background/bg2.png";
import { Form } from "@/Components/Contact/Form";


export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        height={0}
        width={0}
        alt="home background images"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <article className=" relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Connect with me
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Step into the circle of code and let your words flow into the fabric
            of the digital world. Whether you&apos;re looking to collaborate on MERN
            stack projects, solve coding challenges, or share your development
            journey, your messages are valued here. Use the form below to send
            your thoughts through this virtual network, and await the response
            of the code.
          </p>
        </div>
         <Form/> 
      </article>
    </>
  );
}
