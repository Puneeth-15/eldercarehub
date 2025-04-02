
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Find trusted caregivers for your loved ones
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Connect with verified caregivers for elderly care and childcare services. 
              Browse profiles, read reviews, and book with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/providers">
                <Button size="lg">Find a Caregiver</Button>
              </Link>
              <Link to="/signup?role=provider">
                <Button variant="outline" size="lg">
                  Become a Caregiver
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg bg-gray-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Caregiver with elderly person"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
