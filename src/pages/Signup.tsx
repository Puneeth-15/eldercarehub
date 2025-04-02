
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronLeft } from "lucide-react";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Signup functionality would be implemented here
    console.log("Signup form submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md relative">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center dark:text-white">Create an account</CardTitle>
          <CardDescription className="text-center dark:text-gray-400">
            Enter your information to create a CareConnect account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="dark:text-gray-300">Full Name</Label>
              <Input 
                id="name" 
                placeholder="John Doe" 
                required 
                className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="dark:text-gray-300">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="you@example.com" 
                required 
                className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="dark:text-gray-300">Password</Label>
              <Input 
                id="password" 
                type="password" 
                required 
                className="dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label className="dark:text-gray-300">I am a:</Label>
              <RadioGroup defaultValue="seeker">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="seeker" id="seeker" />
                  <Label htmlFor="seeker" className="dark:text-gray-300">Care Seeker</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="provider" id="provider" />
                  <Label htmlFor="provider" className="dark:text-gray-300">Care Provider</Label>
                </div>
              </RadioGroup>
            </div>
            
            <Button type="submit" className="w-full dark:bg-care-600 dark:hover:bg-care-700">Create Account</Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" type="button" className="w-full dark:border-gray-700 dark:text-gray-300">
              Google
            </Button>
            <Button variant="outline" type="button" className="w-full dark:border-gray-700 dark:text-gray-300">
              Facebook
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-care-600 dark:text-care-400 hover:text-care-500 dark:hover:text-care-300">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
