import { CTAButton } from "@/app/_components/ui/CTAButton";
import { CircleCheckIcon } from "lucide-react";

export const HomeSection = () => {
  return (
    // Removed flex-col-reverse. Standard flex-col puts image first on mobile.
    // Added items-center for mobile and items-center for desktop centering.
    <section className="mx-4 md:mx-6 lg:mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 bg-blue-50 p-6 md:p-0 md:pl-12 rounded-2xl shadow-[0px_10px_50px_rgba(0,0,0,0.1)] overflow-hidden">
      
      {/* 1. TEXT CONTENT - Appears 2nd on mobile, 1st on desktop */}
      <div className="flex flex-col w-full md:w-1/2 space-y-6 order-2 md:order-1 pb-8 md:pb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 text-center md:text-left leading-tight">
          Next-Gen <span className="text-blue-600">Expertise</span>
          <br className="hidden md:block" /> for Your <span className="text-blue-600">Enterprise</span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl font-medium text-gray-700 text-center md:text-left max-w-md mx-auto md:mx-0">
          Cultivate high-performance teams through expert learning.
        </p>

        {/* FEATURE LIST 
           - 2 columns on mobile (matches image 4)
           - 3 columns on desktop (matches images 1-3)
        */}
        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {[
            "Tailored Solutions",
            "Industry Insights",
            "Expert Guidance",
            "Measurable Impact",
          ].map((text, idx) => (
            <li 
              key={text} 
              className={`flex items-center gap-x-2 text-sm md:text-base font-semibold text-gray-800 ${
                idx === 3 ? "lg:hidden" : "" // Hide 4th item on desktop per design
              }`}
            >
              <CircleCheckIcon className="h-5 w-5 text-green-500 shrink-0" />
              {text}
            </li>
          ))}
        </ul>

        <div className="flex mx-auto w-full  max-w-md items-center justify-center lg:justify-start  pt-2">
          <CTAButton  />
        </div>
      </div>

      {/* 2. IMAGE CONTENT - Appears 1st on mobile, 2nd on desktop */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
        <img
          src="/corporate-big-hero-v4.webp"
          alt="Corporate Experts"
          // Using w-full on mobile to make it pop, scaling slightly on desktop
          className="w-full md:w-[110%] lg:w-[105%] h-auto object-cover md:translate-x-4 lg:translate-x-8"
        />
      </div>
    </section>
  );
};