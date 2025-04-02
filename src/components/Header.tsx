
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Menu, X, Search, Heart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-care-600">ElderCareHub</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/providers" className="text-gray-700 hover:text-care-600 font-medium">
            Find Caregivers
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-care-600 font-medium">
            How It Works
          </Link>
          <Link to="/resources" className="text-gray-700 hover:text-care-600 font-medium">
            Resources
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link to="/favorites">
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-care-500 text-white text-xs flex items-center justify-center">
                    3
                  </span>
                </Button>
              </Link>
              <Link to="/messages">
                <Button variant="ghost">Messages</Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link to="/profile">
                <Button variant="outline" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          {isLoggedIn && (
            <Link to="/favorites" className="mr-4">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-care-500 text-white text-xs flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
          )}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b">
                  <span className="text-lg font-bold text-care-600">ElderCareHub</span>
                </div>
                <nav className="flex flex-col py-4 space-y-4">
                  <Link to="/providers" className="text-lg font-medium">
                    Find Caregivers
                  </Link>
                  <Link to="/about" className="text-lg font-medium">
                    How It Works
                  </Link>
                  <Link to="/resources" className="text-lg font-medium">
                    Resources
                  </Link>
                  {isLoggedIn ? (
                    <>
                      <div className="h-px bg-gray-200 my-2"></div>
                      <Link to="/messages" className="text-lg font-medium">
                        Messages
                      </Link>
                      <Link to="/dashboard" className="text-lg font-medium">
                        Dashboard
                      </Link>
                      <Link to="/profile" className="text-lg font-medium">
                        Profile
                      </Link>
                    </>
                  ) : (
                    <>
                      <div className="h-px bg-gray-200 my-2"></div>
                      <Link to="/login" className="text-lg font-medium">
                        Login
                      </Link>
                      <Link to="/signup" className="text-lg font-medium">
                        Sign Up
                      </Link>
                    </>
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
