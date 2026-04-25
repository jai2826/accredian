

export type AudienceCardProps = {
  iconSrc: string;
  title: string;
  description: string;
};

export const AudienceCard = ({ iconSrc, title, description }: AudienceCardProps) => {
  return (
    
    <div className="flex flex-row md:flex-col items-start gap-4 md:gap-5 p-2 rounded-xl group transition-all">
      <img
        src={iconSrc}
        alt={`${title} icon`}
        className="w-10 h-10 md:w-14 md:h-14 object-contain shrink-0 group-hover:scale-105 transition-transform"
      />
      <div className="flex flex-col gap-y-1">
        <h3 className="text-white text-base md:text-[22px] font-semibold leading-tight">
          {title}
        </h3>
        <p className="text-white/90 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};