
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-care-700">CareConnect</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="font-medium hover:text-care-600 transition-colors">Home</Link>
          <Link to="/providers" className="font-medium hover:text-care-600 transition-colors">Find Caregivers</Link>
          <Link to="/resources" className="font-medium hover:text-care-600 transition-colors">Resources</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
