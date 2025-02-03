import { mainProjects } from "@/utils/MainProject";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetailPageProps {
  params: { slug: string };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;

  const project = mainProjects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
      <p className="text-lg text-gray-700 mb-8">{project.description}</p>

      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg mb-8">
        <Image src={project.image} alt={project.imageAlt} fill className="object-cover" />
      </div>

      <div className="mb-8">
        <Link
          href={project.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <span className="mr-2">View Repository</span>
        </Link>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features</h2>
        <ol className="list-decimal pl-5">
          {project.features.map((feature, idx) => (
            <li key={idx} className="text-lg text-gray-700 mb-2">
              {feature}
            </li>
          ))}
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <div
              key={tech.title}
              className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={tech.image}
                alt={tech.title}
                width={24}
                height={24}
                className="rounded-sm"
              />
              <span className="text-gray-700 font-medium">{tech.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
