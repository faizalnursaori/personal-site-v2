"use client";

import { useCallback } from "react";
import confetti from "canvas-confetti";
import { FeaturedProjects } from "./FeaturedProject";

export const Hero = () => {
  const handleAppreciate = useCallback(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center text-center min-h-screen space-y-16 mt-16">
      <div className="flex items-center py-2 px-4 rounded-xl border border-blue-700 gap-2 text-sm text-blue-700">
        <div className="w-2 h-2 bg-blue-700 rounded-full animate-pulse"></div>
        <p>Available for work</p>
      </div>

      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-black to-blue-800 bg-clip-text text-transparent drop-shadow-lg">
          Aspiring Web Developer
        </h1>
        <p className="mt-3 text-lg md:text-xl text-gray-700 opacity-90">
          Constantly Learning, Building, and Growing in Tech
        </p>

        <button
          onClick={handleAppreciate}
          className="mt-4 px-6 py-3 text-white font-bold text-lg bg-neutral-900 rounded-xl border-2 border-blue-500 animate-pulse-border"
        >
          Appreciate Me
        </button>
      </div>

      <div className="mt-6 mx-auto w-[75%]">
        <FeaturedProjects />
      </div>
    </main>
  );
};
