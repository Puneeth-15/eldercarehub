
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Heart, MessageSquare, MapPin, Clock, Briefcase, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { CareProvider } from "@/types";

interface ProviderCardProps {
  provider: CareProvider;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
  const { id, name, avatar, location, bio, hourlyRate, rating, services, experience, isVerified } = provider;

  return (
    <Card className="card-hover border-none shadow-md h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <Avatar className="h-16 w-16 mr-4 ring-2 ring-offset-2 ring-care-100">
              <AvatarImage src={avatar} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center">
                <h3 className="text-xl font-bold">{name}</h3>
                {isVerified && (
                  <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-200 border border-green-300">
                    <Shield className="h-3 w-3 mr-1" /> Verified
                  </Badge>
                )}
              </div>
              <div className="flex items-center text-gray-600 mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{location}</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-care-500">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {services.map((service, index) => (
            <Badge key={index} variant="secondary" className="font-normal">
              {service === "elderly" ? "Elderly Care" : service === "childcare" ? "Childcare" : "All Services"}
            </Badge>
          ))}
        </div>
        <p className="text-gray-600 line-clamp-3 mb-4">{bio}</p>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Briefcase className="h-4 w-4 mr-1" />
            <span>{experience} years exp.</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>Available now</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-gray-700 font-medium">{rating.toFixed(1)}</span>
        </div>
        <div className="text-care-700 font-bold">${hourlyRate}/hr</div>
      </CardFooter>
      <CardFooter className="pt-0">
        <div className="grid grid-cols-2 gap-3 w-full mt-3">
          <Link to={`/providers/${id}`}>
            <Button variant="outline" className="w-full">View Profile</Button>
          </Link>
          <Link to={`/message/${id}`}>
            <Button className="w-full flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" /> Message
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProviderCard;
