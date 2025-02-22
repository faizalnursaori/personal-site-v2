import Image from "next/image";
import Link from "next/link";
import React from "react";
import slugify from "slugify";

type ProjectItem = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  repository: string;
  reverse: boolean;
  link: string;
  techStack: { title: string; image: string }[];
};

export const ProjectCard: React.FC<ProjectItem> = ({
  title,
  imageSrc,
  imageAlt,
  description,
  reverse,
  repository,
  link,
  techStack,
}) => {
  const slug = slugify(title, { lower: true });

  return (
    <div className="mt-10 flex flex-col">
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-4">
        <div className={`relative lg:w-2/5 sm:w-auto ${reverse ? "lg:order-1" : "lg:order-2"}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={600}
            className="object-cover border-b-0 lg:border-b-2 lg:rounded-xl border-2"
          />
        </div>
        <div
          className={`flex-1 space-y-4 px-4 lg:px-10 py-6 border-2 lg:rounded-xl ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <Link href={`/projects/${slug}`}>
            <h2 className="text-xl md:text-2xl font-semibold hover:underline cursor-pointer">
              {title}
            </h2>
          </Link>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">{description}</p>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image src={tech.image} alt={tech.title} width={48} height={48} />
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <Link href={link}>
              <button className="bg-black text-white font-semibold py-2 px-4 rounded mt-12">
                View Project
              </button>
            </Link>
            <Link href={repository} className="mt-14 hover:underline">
              Repository
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
