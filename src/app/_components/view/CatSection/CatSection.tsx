import { SectionHeader } from "@/app/_components/ui/SectionHeader";

export const CatSection = () => {
  return (
    <section id="cat" className="max-w-7xl mx-auto w-full pt-12 mt-10 px-4 bg-[radial-gradient(circle,rgba(124,181,255,0.15),rgb(255,255,255))]">
      <div className="mx-auto space-y-12 md:space-y-16 flex flex-col items-center">
        
        
        <SectionHeader 
          title={<>The <span className="text-blue-600">CAT Framework</span></>}
          subtitle={
            <>
              Our Proven Approach to <span className="text-blue-600">Learning Excellence</span>
            </>
          }
          containerClassName="text-center items-center flex flex-col"
        />

       
        <div className="w-full flex justify-center px-4 md:px-8">
          <img
            src="catv2.svg"
            alt="The CAT Framework Methodology"
           
            className="w-full max-w-4xl lg:max-w-5xl h-auto object-contain drop-shadow-md"
          />
        </div>

      </div>
    </section>
  );
};