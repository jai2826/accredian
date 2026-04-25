"use client";

import { cn } from "@/lib/utils";


const CATEGORIES = [
  { id: "course", label: "About the Course" },
  { id: "delivery", label: "About the Delivery" },
  { id: "misc", label: "Miscellaneous" },
];

type FAQCategoriesProps = {
  activeCategory: string;
  setActiveCategory: (id: string) => void;
};

export const FAQCategories = ({ activeCategory, setActiveCategory }: FAQCategoriesProps) => {
  return (
    <div className="w-full lg:w-[300px] mx-auto mr-2 shrink-0">
      
      <div className="flex lg:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide">
        {CATEGORIES.map((cat,index) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "whitespace-nowrap px-2 md:px-4 lg:px-6 py-2 md:py-4  rounded-lg border-2 text-sm md:text-lg font-semibold transition-all duration-300 text-center w-full",
              activeCategory === cat.id
                ? "bg-white border-blue-600 text-blue-600 shadow-md translate-x-1  md:translate-x-0 "
                : "bg-transparent border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50",
                index === 2 && "mr-2" 
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>
      
     
      
    </div>
  );
};