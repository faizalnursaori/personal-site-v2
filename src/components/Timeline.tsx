import React from "react";

type TimelineItem = {
  role: string;
  title: string;
  details: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative border-l-2 border-gray-200 pl-6 space-y-6">
      {items.map((item, index) => (
        <div key={index} className="relative">
          <div className="absolute -left-[36.5px] w-6 h-6 bg-gray-200 rounded-full border-[7px] border-white"></div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="mt-6">
              <span className="text-sm text-gray-500 font-semibold">{item.role}</span>
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.details}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
