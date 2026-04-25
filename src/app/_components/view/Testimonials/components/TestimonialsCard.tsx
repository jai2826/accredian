

export type TestimonialCardProps = {
  logoSrc: string;
  logoAlt: string;
  testimonial: string;
};

export const TestimonialCard = ({ logoSrc, logoAlt, testimonial }: TestimonialCardProps) => {
  return (
    <div className="h-full w-full p-2">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col items-start text-left">
        
        
        <div className="border border-gray-100 rounded-lg p-3 mb-6 flex items-center justify-center bg-white shadow-sm">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        
        <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
          "{testimonial}"
        </p>

      </div>
    </div>
  );
};