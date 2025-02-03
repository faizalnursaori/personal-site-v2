import Image from "next/image";
import Link from "next/link";
import { mainProjects as projects } from "@/utils/MainProject";

export const FeaturedProjects = () => {
  return (
    <>
      <section className="py-12 px-6">
        <h2 className="text-[42px] font-bold text-center mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-xl overflow-hidden ">
              <Link href={project.link}>
                <div className="relative w-full aspect-[16/9] transition-transform duration-300 hover:scale-105">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={600}
                    className="rounded-xl border-[1px] border-gray-100"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-semibold text-gray-900 text-left">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-left">{project.description}</p>
                </div>
              </Link>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 px-3 py-1 text-sm text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="-mt-4">
          <Link href="/projects">
            <button className="text-xl font-semibold rounded-full px-5 py-2 transition duration-300 ease-in-out transform hover:underline">
              See All My Project →
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};
