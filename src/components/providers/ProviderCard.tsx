
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield } from "lucide-react";
import { CareProvider } from "@/types";

interface ProviderCardProps {
  provider: CareProvider;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <Link to={`/providers/${provider.id}`}>
          <div className="p-6">
            <div className="flex items-start space-x-4">
              <Avatar className="h-16 w-16 border-2 border-care-100">
                <AvatarImage src={provider.avatar} alt={provider.name} />
                <AvatarFallback>{provider.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">{provider.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 font-medium">{provider.rating}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">{provider.location}</p>
                <div className="flex items-center space-x-2 mt-1">
                  {provider.isVerified && (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <Shield className="h-3 w-3 mr-1" /> Verified
                    </Badge>
                  )}
                  {provider.services.map((service) => (
                    <Badge key={service} variant="outline">
                      {service === "elderly" ? "Elderly Care" : service === "childcare" ? "Childcare" : "All Services"}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-700 line-clamp-2 text-sm mt-2">{provider.bio}</p>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex items-center justify-between p-4 bg-gray-50 border-t">
          <div className="text-care-700 font-bold">${provider.hourlyRate}/hr</div>
          <div className="space-x-2">
            <Button size="sm" variant="outline">Message</Button>
            <Link to={`/providers/${provider.id}`}>
              <Button size="sm">View Profile</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProviderCard;
