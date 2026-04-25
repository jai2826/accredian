import { SectionHeader } from '@/app/_components/ui/SectionHeader';
import { StatsGrid } from './components/StatsGrid';

export const StatsSection = () => {
  return (
    <section id='stats' className="py-16 px-4 max-w-7xl mx-auto space-y-20">
      
      {}
      <div className="flex flex-col items-center text-center space-y-10">
        <SectionHeader 
          title={<>Our <span className="text-blue-600">Track Record</span></>}
          subtitle={<>The Numbers Behind <span className="text-blue-600">Our Success</span></>}
          containerClassName="items-center"
        />
        
        <div className="w-full">
          <StatsGrid />
        </div>
      </div>

      

    </section>
  );
};