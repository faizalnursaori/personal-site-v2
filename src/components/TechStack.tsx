import { techStack } from "@/utils/TechStack";
import Image from "next/image";

export const TechStack = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <div className="text-center mt-10">
        <h2 className="text-3xl md:text-4xl font-bold">My Stack</h2>
        <p className="text-lg md:text-xl text-gray-700">My Tech Stack and Design Tools</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-4 mt-10">
        {techStack.map((tech) => (
          <div
            key={tech.title}
            className="flex flex-col items-center border-2 bg-white rounded-2xl p-4 md:p-6 hover:border-gray-400"
          >
            <Image src={tech.image} alt={tech.title} width={64} height={64} className="mb-2" />
            <p className="text-lg font-medium text-gray-700 text-center">{tech.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
