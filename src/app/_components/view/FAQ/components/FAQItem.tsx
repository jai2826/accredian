"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export type FAQItemProps = {
  title: string;
  description: string;
};

export const FAQItem = ({ title, description }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-2 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left focus:outline-none group"
      >
        <span className={cn(
          "text-base md:text-lg font-semibold transition-colors duration-200",
          isOpen ? "text-blue-600" : "text-gray-900 group-hover:text-blue-600"
        )}>
          {title}
        </span>
        
        <div className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300",
          isOpen ? "bg-blue-600 text-white rotate-180" : "bg-gray-100 text-gray-500"
        )}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pt-2 text-sm md:text-base text-gray-600 leading-relaxed max-w-[90%]">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};