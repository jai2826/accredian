import Footer from "@/app/_components/layout/Footer";
import Navbar from "@/app/_components/layout/Navbar";
import { ContactUs } from "@/app/_components/ui/ContactUs";
import { AccredianClientSection } from "@/app/_components/view/AccredianEdgeSection/AccredianEdgeSection";
import { CatSection } from "@/app/_components/view/CatSection/CatSection";
import { ClientSection } from "@/app/_components/view/ClientSection/ClientSection";
import { FAQSection } from "@/app/_components/view/FAQ/FAQSection";
import { HomeSection } from "@/app/_components/view/HomeSection/HomeSection";
import { HowItWorksSection } from "@/app/_components/view/HowItWorks/HowItWorksSection";
import { StatsSection } from "@/app/_components/view/StatsSection/StatsSection";
import { TestimonialsSection } from "@/app/_components/view/Testimonials/TestimonialsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen  bg-white font-circular overflow-x-hidden">
      
      <Navbar />

      <section
        id="home"
        className="pt-20 md:pt-32 pb-16 max-w-7xl mx-auto">
        <HomeSection />
      </section>

      
      <StatsSection />
      <ClientSection />
      <AccredianClientSection />
      <CatSection />
      <HowItWorksSection />
      <FAQSection />
      <TestimonialsSection />
      <ContactUs />

      <Footer />

      
    </main>
  );
}
