import { SectionHeader } from "@/app/_components/ui/SectionHeader";
import { ProcessStep } from "@/app/_components/view/HowItWorks/ProcessStep";


const PROCESS_DATA = [
  {
    stepNumber: "1",
    iconSrc: "/icon-14.svg",
    iconAlt: "Bar chart icon representing Skill Gap Analysis",
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs."
  },
  {
    stepNumber: "2",
    iconSrc: "/icon-15.svg",
    iconAlt: "Presentation board icon representing Training Plan",
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals."
  },
  {
    stepNumber: "3",
    iconSrc: "/icon-16.svg",
    iconAlt: "Computer screen icon representing Program Delivery",
    title: "Flexible Program Delivery",
    description: "Deliver adaptable programs aligned with industry and organizational needs."
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="howItWorks" className="py-16 md:py-24 px-4 max-w-7xl mx-auto space-y-12">
      
      <SectionHeader 
        title={
          <>
            How We <span className="text-blue-600">Deliver Results</span> That Matter?
          </>
        }
        subtitle={
          <>
            A Structured Three-Step Approach to <span className="text-blue-600">Skill Development</span>
          </>
        }
        containerClassName="text-center items-center flex flex-col"
      />

     
      <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
        {PROCESS_DATA.map((step) => (
          <div 
            key={step.stepNumber} 
            
            className="flex w-full max-w-sm md:max-w-none md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]"
          >
            <ProcessStep
              stepNumber={step.stepNumber}
              iconSrc={step.iconSrc}
              iconAlt={step.iconAlt}
              title={step.title}
              description={step.description}
            />
          </div>
        ))}
      </div>

    </section>
  );
};