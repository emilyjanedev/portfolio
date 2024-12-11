import { portfolioProjects } from "@/data";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ProjectsSection = () => {
  return (
    <section className="pb-16">
      <div className="container relative">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-emerald-200 bg-clip-text text-transparent">
            Always Learning
          </p>
        </div>
        <h2 className="text-3xl text-center mt-6 font-bold">
          Featured Projects
        </h2>
        <p className="text-center text-white/80 mt-4">
          Check out some of my latest projects to see what topics and
          technologies I have been diving into lately.
        </p>
        <div className="flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 rounded-3xl relative z-0 overflow-hidden after:content-[''] after:absolute after:inset-0 after:z-10 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8"
            >
              <div className="bg-gradient-to-r from-emerald-300 to-emerald-200 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span> {project.year}</span>
              </div>

              <h3 className="font-semibold text-2xl mt-2">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4" />
              <ul className="flex flex-col gap-4 mt-4">
                {project.results.map((result) => (
                  <li className="flex gap-2 text-sm text-white/60">
                    <CheckCircleIcon className="size-5" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span> Visit Live Site</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
