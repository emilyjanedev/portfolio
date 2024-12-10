import headshotImg from "@/assets/images/headshot.jpg";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={headshotImg}
            alt="Emily Schur headshot"
            className="rounded-full size-[125px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-2 rounded-full">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-small font-medium">
              Currently seeking a Full-Time Dev role
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl md:text-5xl text-center mt-8 tracking-wide font-bold">
              Hi there, my name is Emily!
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              I am a passionate and endlessly curious Full-Stack Software
              Developer.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-full">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-full">
              <span>👋🏻</span>
              <span className="font-semibold">Let's Connect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
