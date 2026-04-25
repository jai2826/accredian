"use client";

import { SectionHeader } from '@/app/_components/ui/SectionHeader';
import { TailoredCourseCard } from '@/app/_components/view/AccredianEdgeSection/components/TailoredCourseCard';
import  { useRef, useState } from 'react'; 

const COURSE_DATA = [
  {
    imageUrl: "/project-management-v2.webp",
    title: "Program Specific",
    description: "Certificate, Executive, Post Graduate Certificate"
  },
  {
    imageUrl: "/digital-transformation-v2.webp",
    title: "Industry Specific",
    description: "IT, Healthcare, Retail, Finance, Education, Manufacturing"
  },
  {
    imageUrl: "/data-science-v2.webp",
    title: "Topic Specific",
    description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud"
  },
  {
    imageUrl: "/senior-management-v2.webp",
    title: "Level Specific",
    description: "Senior Leadership, Mid Career Professionals, Freshers"
  }
];

export const TailoredCourseSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
    if (scrollWidth <= clientWidth) {
      setActiveIndex(0);
      return;
    }

    const maxScroll = scrollWidth - clientWidth;
    
    const index = Math.round((scrollLeft / maxScroll) * (COURSE_DATA.length - 1));
    setActiveIndex(index);
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    
    const { scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    
    const targetLeft = (maxScroll / (COURSE_DATA.length - 1)) * index;
    
    scrollRef.current.scrollTo({ left: targetLeft, behavior: 'smooth' });
  };

  return (
    <section className="pt-16  max-w-7xl mx-auto space-y-10">
      
      <SectionHeader 
        title={<>Tailored <span className="text-blue-600">Course Segmentation</span></>}
        subtitle={
          <>
            Explore <span className="text-blue-600">Custom-Fit Courses</span> Designed to Address Every Professional Need
          </>
        }
        containerClassName="text-center items-center flex flex-col"
      />

      <div className="relative w-full">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {COURSE_DATA.map((course) => (
            <div 
              key={course.title} 
              className="w-full shrink-0 snap-center snap-always md:w-auto md:shrink md:snap-align-none px-2"
            >
              <TailoredCourseCard
                imageUrl={course.imageUrl}
                imageAlt={course.title}
                title={course.title}
                description={course.description}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-2 md:hidden">
          {COURSE_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-8 bg-blue-600' : 'w-2.5 bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
};