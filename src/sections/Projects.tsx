import { portfolioProjects } from "@/data";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container relative">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-emerald-200 bg-clip-text text-transparent">
            Always Learning
          </p>
        </div>
        <h2 className="text-3xl md:text-5xl text-center mt-6 font-bold">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/80 mt-4 max-w-md mx-auto">
          Check out some of my latest projects to see what topics and
          technologies I have been diving into.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900/80 backdrop-blur rounded-3xl relative z-0 overflow-hidden after:content-[''] after:absolute after:inset-0 after:z-10 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/30 after:pointer-events-none px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-emerald-200 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span> {project.year}</span>
                  </div>

                  <h3 className="font-semibold text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/60"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 relative">
                      <span>
                        {project.isDeployed
                          ? "Visit Live Site"
                          : "Visit GitHub Repo"}
                      </span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
