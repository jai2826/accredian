import { SectionHeader } from "@/app/_components/ui/SectionHeader";
import { DesktopPartnerLogos } from "@/app/_components/view/ClientSection/components/DesktopPartnershipLogos";
import { MobilePartnerLogos } from "@/app/_components/view/ClientSection/components/MobilePartnershipLogos";

export const ClientSection = () => {
  return (
    <section id="clients" className="py-16  max-w-7xl mx-auto space-y-20">
      <div className="flex flex-col items-center text-center space-y-12">
        <SectionHeader
          title={
            <>
              Our Proven{" "}
              <span className="text-blue-600">
                Partnerships
              </span>
            </>
          }
          subtitle={
            <>
              Successful Collaborations With the{" "}
              <span className="text-blue-600">
                Industry's Best
              </span>
            </>
          }
          containerClassName="items-center"
        />

        <div className="w-full">
          <DesktopPartnerLogos />
          <MobilePartnerLogos />
        </div>
      </div>
    </section>
  );
};

