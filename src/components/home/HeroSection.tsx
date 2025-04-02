
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-care-700 to-care-600 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Trusted Caregivers for Your Loved Ones
            </h1>
            <p className="text-xl mb-8 text-care-100">
              Connect with verified caregivers for elderly care and childcare services in your area. 
              Peace of mind is just a click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/providers" className="flex-1">
                <Button className="w-full bg-white text-care-700 hover:bg-care-100 font-medium text-lg py-6">
                  Find a Caregiver
                </Button>
              </Link>
              <Link to="/apply" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white/10 font-medium text-lg py-6">
                  Become a Caregiver
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg animate-slide-up">
            <h2 className="text-care-700 text-2xl font-bold mb-6">Find Care Today</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="careType" className="block text-gray-700 mb-2 font-medium">
                  Care Type
                </label>
                <select
                  id="careType"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-care-500 focus:border-care-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select care type
                  </option>
                  <option value="elderly">Elderly Care</option>
                  <option value="childcare">Childcare</option>
                  <option value="both">Both</option>
                </select>
              </div>
              <div>
                <label htmlFor="location" className="block text-gray-700 mb-2 font-medium">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="City, State or Zip Code"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-care-500 focus:border-care-500"
                />
              </div>
              <Button className="w-full bg-care-600 hover:bg-care-700 py-6 font-medium text-lg">
                <Search className="mr-2 h-5 w-5" />
                Search Caregivers
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
