import Image from "next/image";
import Link from "next/link";
import { miniProjects as projects } from "@/utils/MiniProject";

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-center">Mini Projects</h1>
      <p className="text-gray-600 mb-8 text-center">
        Projects that I built to refresh my knowledge
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg p-5 shadow-md">
            <div className="border-l-4 border-gray-300 pl-3 mb-4">
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <div className="flex flex-wrap gap-3 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center">
                    <Image src={tech.image} alt={tech.title} width={28} height={28} />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg overflow-hidden mb-4">
              <iframe
                src={project.video}
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>

            <p className="text-gray-600 mb-4">{project.description}</p>

            <div className="flex justify-between items-center">
              <Link href={project.link} className="font-medium hover:underline">
                Project Link
              </Link>
              <Link href={project.repository} className="font-medium hover:underline">
                Repository
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
