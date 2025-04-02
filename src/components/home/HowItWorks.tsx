
import React from "react";
import { FileSearch, Calendar, MessageSquare, UserCheck } from "lucide-react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <FileSearch className="h-12 w-12 text-white" />,
      title: "Search for Caregivers",
      description:
        "Browse profiles of verified caregivers in your area. Filter by experience, services, and availability.",
      bgColor: "bg-care-600",
    },
    {
      icon: <UserCheck className="h-12 w-12 text-white" />,
      title: "Review & Select",
      description:
        "Read reviews from other families, check qualifications, and select the best match for your needs.",
      bgColor: "bg-care-500",
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-white" />,
      title: "Connect & Discuss",
      description:
        "Message, video call, or interview your potential caregiver to discuss care needs and expectations.",
      bgColor: "bg-care-600",
    },
    {
      icon: <Calendar className="h-12 w-12 text-white" />,
      title: "Book & Schedule",
      description:
        "Finalize details, book your caregiver, and manage schedules through our secure platform.",
      bgColor: "bg-care-500",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Finding the perfect caregiver for your loved ones is simple and secure with ElderCareHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className={`${step.bgColor} w-24 h-24 rounded-full flex items-center justify-center mb-5 shadow-lg`}
              >
                {step.icon}
              </div>
              <div className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[-60px] left-[96px] w-[calc(100%-24px)] h-1 bg-gray-200">
                    <div className="absolute left-0 top-0 h-full bg-care-500 w-1/2"></div>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
