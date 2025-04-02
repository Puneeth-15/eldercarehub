
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProviderFilterProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ProviderFilter: React.FC<ProviderFilterProps> = ({ isOpen, onToggle }) => {
  return (
    <>
      <div className="lg:hidden mb-4">
        <Button 
          onClick={onToggle} 
          variant="outline" 
          className="w-full flex items-center justify-center"
        >
          <Filter className="mr-2 h-4 w-4" />
          {isOpen ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        <Card className="sticky top-20">
          <CardHeader className="pb-2">
            <CardTitle>Filter Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">Search</h3>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search by name or keyword" className="pl-9" />
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Service Type</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="elderly" />
                  <Label htmlFor="elderly">Elderly Care</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="childcare" />
                  <Label htmlFor="childcare">Childcare</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="both" />
                  <Label htmlFor="both">Both Services</Label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Hourly Rate</h3>
              <div className="space-y-3">
                <Slider defaultValue={[40]} max={100} step={1} />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>$10</span>
                  <span>Up to $40/hr</span>
                  <span>$100+</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Experience</h3>
              <Select defaultValue="any">
                <SelectTrigger>
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Experience</SelectItem>
                  <SelectItem value="1">1+ years</SelectItem>
                  <SelectItem value="3">3+ years</SelectItem>
                  <SelectItem value="5">5+ years</SelectItem>
                  <SelectItem value="10">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <h3 className="font-medium mb-3">Verification</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="verified" />
                  <Label htmlFor="verified">Verified Providers Only</Label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Availability</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="availableNow" />
                  <Label htmlFor="availableNow">Available Now</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="weekends" />
                  <Label htmlFor="weekends">Weekends</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="evenings" />
                  <Label htmlFor="evenings">Evenings</Label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Rating</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="rating4plus" />
                  <Label htmlFor="rating4plus">4+ Stars</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="rating3plus" />
                  <Label htmlFor="rating3plus">3+ Stars</Label>
                </div>
              </div>
            </div>

            <Button className="w-full">Apply Filters</Button>
            <Button variant="link" className="w-full">Clear All Filters</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProviderFilter;
