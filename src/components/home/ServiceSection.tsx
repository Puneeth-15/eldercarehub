
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Clock, Star, Users, Award } from "lucide-react";

const ServiceSection: React.FC = () => {
  const services = [
    {
      title: "Elderly Care",
      description: "Compassionate care for seniors including personal care, companionship, and specialized services for conditions like dementia.",
      icon: <Heart className="h-8 w-8 text-care-600" />,
    },
    {
      title: "Childcare",
      description: "Reliable childcare services from experienced and verified babysitters for your peace of mind.",
      icon: <Users className="h-8 w-8 text-care-600" />,
    },
    {
      title: "Verified Providers",
      description: "All caregivers undergo thorough background checks and identity verification for your family's safety.",
      icon: <Shield className="h-8 w-8 text-care-600" />,
    },
    {
      title: "Flexible Scheduling",
      description: "Book care services for hours, days, or recurring visits based on your specific needs.",
      icon: <Clock className="h-8 w-8 text-care-600" />,
    },
    {
      title: "Rated & Reviewed",
      description: "Read authentic reviews from families who have used our caregivers' services.",
      icon: <Star className="h-8 w-8 text-care-600" />,
    },
    {
      title: "Certified Professionals",
      description: "Many of our caregivers hold professional certifications and specialized training.",
      icon: <Award className="h-8 w-8 text-care-600" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Care Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ElderCareHub connects families with trusted caregivers who provide personalized services tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
