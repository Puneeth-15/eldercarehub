
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection: React.FC = () => {
  return (
    <section className="bg-care-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to find the perfect caregiver?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of families who have found reliable caregivers through CareConnect.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/signup">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link to="/providers">
            <Button variant="outline" size="lg">
              Browse Caregivers
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
