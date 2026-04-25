"use client";

import React, { useRef, useState } from 'react';
import { SectionHeader } from '@/app/_components/ui/SectionHeader';
import { TestimonialCard } from '@/app/_components/view/Testimonials/components/TestimonialsCard';

const TESTIMONIAL_DATA = [
  {
    logoSrc: "/adp.svg",
    logoAlt: "ADP Logo",
    testimonial: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."
  },
  {
    logoSrc: "/bayer.svg",
    logoAlt: "Bayer Logo",
    testimonial: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."
  },
  {
    logoSrc: "/rel.png",
    logoAlt: "Reliance Logo",
    testimonial: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees."
  }
];

export const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (scrollWidth <= clientWidth) return;

    const maxScroll = scrollWidth - clientWidth;
    const index = Math.round((scrollLeft / maxScroll) * (TESTIMONIAL_DATA.length - 1));
    setActiveIndex(index);
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const { scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const targetLeft = (maxScroll / (TESTIMONIAL_DATA.length - 1)) * index;
    scrollRef.current.scrollTo({ left: targetLeft, behavior: 'smooth' });
  };

  return (
    <section id='testimonials' className="pt-16 px-4 max-w-7xl mx-auto space-y-12 overflow-hidden">
      
      <SectionHeader 
        title={<>Testimonials from <span className="text-blue-600">Our Partners</span></>}
        subtitle={<>What <span className="text-blue-600">Our Clients</span> Are Saying</>}
        containerClassName="text-center items-center flex flex-col"
      />

      <div className="relative w-full">
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 lg:pb-0 scrollbar-hide [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIAL_DATA.map((item, idx) => (
            <div 
              key={idx} 
              className="w-[85vw] md:w-[45vw] lg:w-full shrink-0 snap-center snap-always lg:snap-align-none"
            >
              <TestimonialCard
                logoSrc={item.logoSrc}
                logoAlt={item.logoAlt}
                testimonial={item.testimonial}
              />
            </div>
          ))}
        </div>

      
        <div className="flex justify-center items-center gap-2 mt-4 lg:hidden">
          {TESTIMONIAL_DATA.map((_, idx) => (
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