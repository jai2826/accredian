"use client";

import { EnquireButton } from "@/app/_components/ui/EnquireButon";
import { SectionHeader } from "@/app/_components/ui/SectionHeader";
import { useState } from "react";
import { FAQCategories } from "./components/FAQCategories";
import { FAQItem } from "./components/FAQItem";

const FAQ_DATA = {
  course: [
    {
      title:
        "What types of corporate training programs does Accredian offer?",
      description:
        "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
    },
    {
      title: "What domain specializations are available?",
      description:
        "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
    },
  ],
  delivery: [
    {
      title:
        "Can the courses be customized for specific industries or teams?",
      description:
        "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals.",
    },
    {
      title: "Who are the instructors for these programs?",
      description:
        "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.",
    },
    {
      title: "What formats are the programs delivered in?",
      description:
        "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements.",
    },
  ],
  misc: [
    {
      title:
        "What is the ideal team size for corporate training?",
      description:
        "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.",
    },
    {
      title: "How do we get started with Accredian?",
      description:
        "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs.",
    },
  ],
};

export const FAQSection = () => {
  const [activeCategory, setActiveCategory] =
    useState("course");

  return (
    <section
      className="py-12 md:py-24 px-4 bg-white"
      id="faqs">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
      
        <SectionHeader
          title={
            <>
              Frequently Asked{" "}
              <span className="text-blue-600">
                Questions
              </span>
            </>
          }
          containerClassName="mb-12 text-center"
        />

      
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full items-start">
        
          <FAQCategories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

         
          <div className="flex-grow w-full space-y-2">
            {FAQ_DATA[
              activeCategory as keyof typeof FAQ_DATA
            ].map((item, index) => (
              <FAQItem
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {}
        <div className="mt-12 max-w-md w-full mx-auto flex justify-center">
          <EnquireButton />
        </div>
      </div>
    </section>
  );
};
