
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-care-700 to-care-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find the Perfect Caregiver?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join thousands of families who have found reliable and compassionate care through ElderCareHub.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/providers">
            <Button className="bg-white text-care-700 hover:bg-care-100 font-medium text-lg px-8 py-6">
              Find a Caregiver
            </Button>
          </Link>
          <Link to="/apply">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6">
              Become a Caregiver
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
