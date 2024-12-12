import headshotImg from "@/assets/images/headshot.jpg";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import MagicButton from "@/components/MagicButton";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-40 relative z-2">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={headshotImg}
            alt="Emily Schur headshot"
            className="rounded-full size-[125px]"
          />
          <div className="bg-gray-950 border border-gray-800 mt-2 px-4 py-1.5 inline-flex items-center gap-2 rounded-full">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-small font-medium">
              Seeking a Full-Time Dev Role
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl md:text-5xl text-center mt-8 tracking-wide font-bold">
              Hi there, I'm Emily!
            </h1>
            <p className="mt-4 text-center text-white/80 md:text-lg">
              I'm a full-stack software developer driven by a love for tech and
              solving problems. With a passion for continuous learning and
              exploration, I bring enthusiasm, adaptability, and a fresh
              perspective to every project.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <a href="#">
              <MagicButton
                title="See my Work"
                icon={<ArrowDown className="size-4" />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
