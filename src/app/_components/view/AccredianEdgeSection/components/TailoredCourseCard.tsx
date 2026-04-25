

export type CourseCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
};

export const TailoredCourseCard = ({ imageUrl, imageAlt, title, description }: CourseCardProps) => {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group h-full">
      
      
      <div className="w-full h-48 md:h-56 relative overflow-hidden bg-gray-100 shrink-0">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      
      <div className="flex flex-col p-5 md:p-6 flex-grow gap-y-2">
        <h3 className="text-gray-900 text-lg md:text-xl font-semibold font-circular leading-snug">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

    </div>
  );
};