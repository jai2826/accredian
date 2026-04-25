import React from "react";

export type DomainCardProps = {
  iconSrc: string;
  title: string;
  altText: string;
};

export const DomainExpertiseCard = ({
  iconSrc,
  title,
  altText,
}: DomainCardProps) => {
  return (
    <div className=" w-full h-full flex flex-row md:flex-col items-center justify-center p-3 md:p-4 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 gap-3 group">
      <img
        src={iconSrc}
        alt={altText}
        className="w-8 h-8 md:w-16 md:h-16 object-contain shrink-0 group-hover:scale-110 transition-transform"
      />
      <h3 className="text-gray-900 text-xs md:text-lg font-semibold text-center leading-tight">
        {title}
      </h3>
    </div>
  );
};
