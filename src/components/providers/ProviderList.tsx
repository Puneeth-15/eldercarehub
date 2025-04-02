
import React, { useState } from "react";
import ProviderCard from "./ProviderCard";
import ProviderFilter from "./ProviderFilter";
import { CareProvider } from "@/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProviderListProps {
  providers: CareProvider[];
}

const ProviderList: React.FC<ProviderListProps> = ({ providers }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Caregivers Near You</h1>
        <div className="hidden md:block w-48">
          <Select defaultValue="recommended">
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recommended</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="experience">Most Experienced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="md:hidden mb-4">
        <Select defaultValue="recommended">
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="experience">Most Experienced</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <ProviderFilter isOpen={isFilterOpen} onToggle={toggleFilter} />
        </div>
        <div className="lg:col-span-3">
          <p className="text-gray-600 mb-4">{providers.length} caregivers available</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {providers.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderList;
