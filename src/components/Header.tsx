
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ChevronLeft } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Only show the back button if we're not on the home page
  const showBackButton = location.pathname !== "/";

  return (
    <header className="bg-white dark:bg-gray-900/95 dark:backdrop-blur-sm dark:text-white border-b border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-2">
          {showBackButton && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate(-1)}
              aria-label="Go back"
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-care-700 dark:text-care-400 transition-colors duration-300">CareConnect</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="font-medium hover:text-care-600 dark:text-gray-300 dark:hover:text-care-400 transition-colors duration-200">Home</Link>
          <Link to="/providers" className="font-medium hover:text-care-600 dark:text-gray-300 dark:hover:text-care-400 transition-colors duration-200">Find Caregivers</Link>
          <Link to="/resources" className="font-medium hover:text-care-600 dark:text-gray-300 dark:hover:text-care-400 transition-colors duration-200">Resources</Link>
        </nav>
        
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          
          <Link to="/" className="hidden sm:inline-flex">
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Home"
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <Home className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/login">
            <Button 
              variant="outline" 
              className="border-gray-300 dark:border-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              Log In
            </Button>
          </Link>
          
          <Link to="/signup">
            <Button className="dark:bg-care-600 dark:hover:bg-care-700 transition-colors duration-200">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
