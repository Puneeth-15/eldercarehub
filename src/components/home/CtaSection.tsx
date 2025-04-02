
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection: React.FC = () => {
  return (
    <section className="bg-care-50 dark:bg-care-800 py-16 transition-colors duration-300 relative">
      {/* Dark mode decorative element */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-care-800 dark:to-care-900 dark:opacity-50 transition-opacity duration-300"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white transition-colors duration-300">
          Ready to find the perfect caregiver?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-300">
          Join thousands of families who have found reliable caregivers through CareConnect.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/signup">
            <Button size="lg" className="dark:bg-care-600 dark:hover:bg-care-700 dark:text-white transition-colors duration-300">
              Get Started
            </Button>
          </Link>
          <Link to="/providers">
            <Button 
              variant="outline" 
              size="lg" 
              className="dark:border-care-700 dark:text-white dark:hover:bg-care-700/20 transition-colors duration-300"
            >
              Browse Caregivers
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
