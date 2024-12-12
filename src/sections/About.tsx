import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import { toolbox } from "@/data";
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import headshot from "@/assets/images/headshot.jpg";
import { hobbies } from "@/data";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          subheader="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="book cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolbox} className="mt-6" />
            <ToolboxItems
              items={toolbox}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
              className="px-6 py-6"
            />
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-400 to-emerald-200 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative">
            <Image
              src={mapImage}
              alt="Map image"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 rounded-full outline outline-3 outline-emerald-300 flex justify-center items-center">
              <Image
                src={headshot}
                alt="Emily's portrait"
                className="size-14 rounded-full"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
