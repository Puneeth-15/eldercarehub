
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServiceSection from "@/components/home/ServiceSection";
import HowItWorks from "@/components/home/HowItWorks";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

const Index: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <ServiceSection />
      <HowItWorks />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
