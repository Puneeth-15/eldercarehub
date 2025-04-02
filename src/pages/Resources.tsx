
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Resources: React.FC = () => {
  const resources = [
    {
      title: "Guide to Elderly Care",
      description: "Learn about best practices for caring for elderly family members.",
      link: "#"
    },
    {
      title: "Childcare Essentials",
      description: "Essential tips and advice for quality childcare.",
      link: "#"
    },
    {
      title: "Financial Assistance Programs",
      description: "Information about government and private programs that can help with caregiving costs.",
      link: "#"
    },
    {
      title: "Caregiver Mental Health",
      description: "Resources for caregivers to maintain their mental well-being.",
      link: "#"
    },
    {
      title: "Legal Considerations",
      description: "Understanding legal aspects of caregiving, including power of attorney and healthcare directives.",
      link: "#"
    },
    {
      title: "Community Support Groups",
      description: "Find local and online support groups for caregivers.",
      link: "#"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Caregiving Resources</h1>
        <p className="text-gray-600 mb-8">
          Helpful information and guides for both families and caregivers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href={resource.link} 
                  className="text-care-600 hover:text-care-700 font-medium"
                >
                  Learn more →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
