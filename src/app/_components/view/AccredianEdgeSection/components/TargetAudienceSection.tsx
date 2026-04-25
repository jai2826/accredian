import React from 'react';
import { AudienceCard } from './AudienceCard';

const AUDIENCE_DATA = [
  {
    iconSrc: "/icon-10.svg",
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, drive innovation."
  },
  {
    iconSrc: "/icon-11.svg",
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments."
  },
  {
    iconSrc: "/icon-12.svg",
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth."
  },
  {
    iconSrc: "/icon-13.svg",
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions."
  }
];

export const TargetAudienceSection = () => {
  return (
    <section className="pt-16  px-2 max-w-7xl  mx-auto w-full">
      
      <div className="bg-blue-600 rounded-lg p-8 md:pb-0! md:p-4 lg:p-8 flex flex-col lg:flex-row lg:gap-x-15 gap-y-10  overflow-hidden relative shadow-xl">
        
       
        <div className="w-full lg:w-5/12 flex flex-col justify-between">
          <div className="space-y-1 z-10">
            <h4 className="text-white/70 text-lg  font-medium tracking-wide">
              Who Should Join?
            </h4>
            <h2 className="text-white text-3xl md:text-4xl  font-bold xl:text-nowrap">
              Strategic Skill Enhancement
            </h2>
          </div>

          <div className="hidden lg:flex justify-center lg:justify-start mt-12 z-10">
            <img
              src="/imagehuman.png"
              alt="Professional working on laptop"
              className="w-full max-w-[300px] lg:max-w-[380px] object-contain"
            />
          </div>
        </div>

        
        <div className="w-full lg:w-7/12 flex items-center z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full">
            {AUDIENCE_DATA.map((audience) => (
              <AudienceCard
                key={audience.title}
                iconSrc={audience.iconSrc}
                title={audience.title}
                description={audience.description}
              />
            ))}
          </div>
        </div>

        </div>
    </section>
  );
};