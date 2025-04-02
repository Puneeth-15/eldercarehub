
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer S.",
    role: "Daughter of Care Recipient",
    image: "/placeholder.svg",
    content:
      "ElderCareHub helped me find the perfect caregiver for my father with Alzheimer's. Sarah has been incredibly patient and caring. The thorough vetting process gave me peace of mind knowing my father is in good hands.",
    rating: 5,
  },
  {
    name: "Michael J.",
    role: "Son of Care Recipient",
    image: "/placeholder.svg",
    content:
      "After struggling to find reliable care for my mother, I discovered ElderCareHub. The platform made it easy to find a qualified caregiver who matched our specific needs. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily W.",
    role: "Working Parent",
    image: "/placeholder.svg",
    content:
      "As a busy parent, finding reliable childcare was always stressful until I found ElderCareHub. The caregivers are professional, verified, and my kids love them. The scheduling system is also super convenient.",
    rating: 4,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-care-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Families Are Saying</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from families who have found perfect caregivers through our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
