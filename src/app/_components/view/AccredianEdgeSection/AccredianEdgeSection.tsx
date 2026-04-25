import { SectionHeader } from "@/app/_components/ui/SectionHeader";
import { DomainSection } from "@/app/_components/view/AccredianEdgeSection/components/DomainSection";
import MainPage from "@/app/_components/view/AccredianEdgeSection/components/MainPage";
import { TailoredCourseSection } from "@/app/_components/view/AccredianEdgeSection/components/TailoredCourseSection";
import { TargetAudienceSection } from "@/app/_components/view/AccredianEdgeSection/components/TargetAudienceSection";

export const AccredianClientSection = () => {
  return (
    <section
      id="accredianEdge"
      className="py-12 md:px-8 max-w-7xl mx-auto space-y-10">
      <SectionHeader
        title={
          <>
            The{" "}
            <span className="text-blue-600">
              Accredian Edge
            </span>
          </>
        }
        subtitle={
          <>
            Key Aspects of{" "}
            <span className="text-blue-600">
              Our Strategic Training
            </span>
          </>
        }
        containerClassName="text-center items-center flex flex-col"
      />

      <MainPage />
      <DomainSection />
      <TailoredCourseSection />
      <TargetAudienceSection />
    </section>
  );
};
