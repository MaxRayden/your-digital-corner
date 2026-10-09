import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedCases from "@/components/sections/FeaturedCases";
import WorkTypes from "@/components/sections/WorkTypes";
import MockupGallery from "@/components/sections/MockupGallery";
import ServicesCTA from "@/components/sections/ServicesCTA";
import { content } from "@/lib/content";

const Index = () => {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <FeaturedCases />
        <WorkTypes />
        <MockupGallery />
        <ServicesCTA />
      </main>
      <Footer />
      <WhatsAppButton floating message={content.cta.message} />
    </div>
  );
};

export default Index;
