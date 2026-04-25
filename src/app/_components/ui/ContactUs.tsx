import { ArrowRightIcon } from 'lucide-react';

export const ContactUs = () => {
  return (
    <section className="pt-16 px-4 w-full max-w-7xl mx-auto">
      
      <div className="relative overflow-hidden bg-blue-600 rounded-[2rem] p-8 md:p-12 lg:px-16 lg:py-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        
       
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square rounded-full border-[60px] border-white/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square rounded-full border-[60px] border-white/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] aspect-square rounded-full border-[60px] border-white/10" />
        </div>

       
        <div className="flex flex-col md:flex-row items-center gap-6 z-10 text-center md:text-left">
         
          <div className="bg-white rounded-2xl p-4 shadow-lg shrink-0">
            <img 
              src="/icon-19.svg" 
              alt="Support Icon" 
              className="w-10 h-10 md:w-12 md:h-12"
            />
          </div>

         
          <div className="space-y-2">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Want to Learn More About <br className="hidden lg:block" /> Our Training Solutions?
            </h2>
            <p className="text-blue-100 text-sm md:text-base font-medium">
              Get Expert Guidance for Your Team's Success!
            </p>
          </div>
        </div>

   
        <div className="z-10 w-full md:w-auto">
          <button className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all active:scale-95 shadow-lg w-full md:w-auto group">
            Contact Us
            <ArrowRightIcon/>
          </button>
        </div>

      </div>
    </section>
  );
};