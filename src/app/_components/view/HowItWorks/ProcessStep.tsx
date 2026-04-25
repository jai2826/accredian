

export type ProcessStepProps = {
  stepNumber: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
};

export const ProcessStep = ({ stepNumber, iconSrc, iconAlt, title, description }: ProcessStepProps) => {
  return (
    
    <div className="relative flex flex-col items-center bg-blue-50/50 border border-blue-100 rounded-xl p-6 text-center w-full shadow-sm h-full">
      
      {}
      <div className="absolute top-1/2 -translate-y-1/2 -left-px w-1.5 h-12 md:h-16 bg-blue-600 rounded-r-md"></div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-px w-1.5 h-12 md:h-16 bg-blue-600 rounded-l-md"></div>

      {}
      <div className="absolute top-4 left-4 flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-white border border-blue-200 text-blue-600 rounded-full font-semibold text-xs md:text-sm shadow-sm">
        {stepNumber}
      </div>

      {}
      <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white rounded-full shadow-md mb-4 shrink-0 mt-2 md:mt-0">
        <img 
          src={iconSrc} 
          alt={iconAlt} 
          className="w-6 h-6 md:w-8 md:h-8 object-contain" 
        />
      </div>

      {}
      <h3 className="text-gray-900 text-base md:text-lg font-semibold leading-snug mb-2">
        {title}
      </h3>
      
      {}
      <p className="text-gray-600 text-xs md:text-sm leading-relaxed hidden md:block">
        {description}
      </p>

    </div>
  );
};