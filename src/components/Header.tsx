
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
    <header className="bg-white dark:bg-care-800 dark:text-white border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-2">
          {showBackButton && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-care-700 dark:text-care-400">CareConnect</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="font-medium hover:text-care-600 dark:hover:text-care-400 transition-colors">Home</Link>
          <Link to="/providers" className="font-medium hover:text-care-600 dark:hover:text-care-400 transition-colors">Find Caregivers</Link>
          <Link to="/resources" className="font-medium hover:text-care-600 dark:hover:text-care-400 transition-colors">Resources</Link>
        </nav>
        
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          
          <Link to="/" className="hidden sm:inline-flex">
            <Button variant="ghost" size="icon" aria-label="Home">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/login">
            <Button variant="outline" className="dark:border-gray-700 dark:hover:bg-care-700">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button className="dark:bg-care-600 dark:hover:bg-care-700">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
