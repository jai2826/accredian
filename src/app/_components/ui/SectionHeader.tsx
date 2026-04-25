import React from "react";

export type SectionHeaderProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export const SectionHeader = ({
  title,
  subtitle,
  containerClassName = "",
  titleClassName = "",
  subtitleClassName = "",
}: SectionHeaderProps) => {
  return (
    <div className={`mx-2 space-y-3 ${containerClassName}`}>
      <h2
        className={`text-gray-900 text-2xl md:text-4xl font-bold leading-[30px] md:leading-10 ${titleClassName}`}>
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-gray-700 text-sm md:text-lg font-medium leading-5 md:leading-7 ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
