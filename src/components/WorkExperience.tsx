import React from "react";
import { Timeline } from "./Timeline";
import { workHistory } from "@/utils/WorkHistory";

export const WorkExperience = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-8 items-start mt-10">
      <h2 className="text-center text-[26px] md:text-[34px] lg:text-[42px] font-bold mt-6 lg:mt-28 md:text-center">
        Work Experience
      </h2>
      <div>
        <Timeline items={workHistory} />
      </div>
    </div>
  );
};

export default WorkExperience;
