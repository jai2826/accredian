import { SectionHeader } from '@/app/_components/ui/SectionHeader';
import { DomainExpertiseCard } from '@/app/_components/view/AccredianEdgeSection/components/DomainExpertiseCard';


const DOMAIN_DATA = [
  { title: "Product & Innovation Hub", icon: "icon-3.svg" },
  { title: "Gen-AI Mastery", icon: "icon-4.svg" },
  { title: "Leadership Elevation", icon: "icon-5.svg" },
  { title: "Tech & Data Insights", icon: "icon-6.svg" },
  { title: "Operations Excellence", icon: "icon-7.svg" },
  { title: "Digital Enterprise", icon: "icon-8.svg" },
  { title: "Fintech Innovation Lab", icon: "icon-9.svg" },
];

const BASE_URL = "https://c.animaapp.com/modxg1siwscZsb/assets/";

export const DomainSection = () => {
  return (
    <section className="pt-16  px-4 max-w-6xl mx-auto space-y-12">
      
      <SectionHeader 
        title={<>Our <span className="text-blue-600">Domain Expertise</span></>}
        subtitle={
          <>
            <span className="text-blue-600">Specialized Programs</span> Designed to Fuel Innovation
          </>
        }
        containerClassName="text-center items-center flex flex-col"
      />

      {}
      <div className="flex flex-wrap justify-center gap-2 md:gap-6">
        {DOMAIN_DATA.map((domain) => (
          <div 
            key={domain.title} 
            className="flex w-[calc(50%-1rem)] md:w-[calc(33.333%-2rem)] min-w-[140px]"
          >
            <DomainExpertiseCard
              title={domain.title}
              iconSrc={`${BASE_URL}${domain.icon}`}
              altText={`${domain.title} icon`}
            />
          </div>
        ))}
      </div>

    </section>
  );
};