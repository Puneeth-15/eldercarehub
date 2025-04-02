
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tab, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Star, MapPin, Shield, Heart, MessageSquare, Calendar as CalendarIcon, Clock, CheckCircle } from "lucide-react";
import { mockCareProviders, mockReviews } from "@/data/mockData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ProviderProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const provider = mockCareProviders.find((p) => p.id === id);

  if (!provider) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Provider Not Found</h1>
          <p>The provider you're looking for doesn't exist or has been removed.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Column */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <Avatar className="h-32 w-32 border-4 border-care-100">
                      <AvatarImage src={provider.avatar} alt={provider.name} />
                      <AvatarFallback>{provider.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-start justify-between mb-2">
                      <div>
                        <h1 className="text-3xl font-bold">{provider.name}</h1>
                        <div className="flex items-center mt-1 text-gray-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{provider.location}</span>
                        </div>
                      </div>
                      <div className="flex">
                        <Button variant="outline" size="icon" className="mr-2">
                          <Heart className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="flex items-center">
                          <MessageSquare className="h-5 w-5 mr-2" />
                          Message
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center mb-4">
                      <div className="flex items-center mr-4">
                        <div className="flex mr-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(provider.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-medium">{provider.rating.toFixed(1)}</span>
                        <span className="text-gray-500 ml-1">({provider.reviews.length} reviews)</span>
                      </div>

                      {provider.isVerified && (
                        <Badge className="bg-green-100 text-green-800 border border-green-300">
                          <Shield className="h-3 w-3 mr-1" /> Verified
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {provider.services.map((service, index) => (
                        <Badge key={index} variant="outline">
                          {service === "elderly" ? "Elderly Care" : service === "childcare" ? "Childcare" : "All Services"}
                        </Badge>
                      ))}
                    </div>

                    <div className="text-2xl font-bold text-care-700">${provider.hourlyRate}/hr</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="about">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="about" className="flex-1">About</TabsTrigger>
                <TabsTrigger value="services" className="flex-1">Services</TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About {provider.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6">{provider.bio}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2">Experience</h3>
                        <p>{provider.experience} years in caregiving</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Certifications</h3>
                        <ul className="list-disc list-inside space-y-1">
                          {provider.certifications.map((cert, index) => (
                            <li key={index}>{cert}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Availability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {provider.availability.map((avail, index) => (
                        <div key={index} className="flex items-center justify-between border-b pb-3 last:border-b-0">
                          <div className="font-medium">
                            {avail.days.map((day) => day.charAt(0).toUpperCase() + day.slice(1)).join(", ")}
                          </div>
                          <div className="text-gray-600">
                            {avail.startTime} - {avail.endTime}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="services" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Services Offered</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {provider.skills.map((skill, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Client Reviews</CardTitle>
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.floor(provider.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-medium">{provider.rating.toFixed(1)}</span>
                        <span className="text-gray-500 ml-1">({mockReviews.length} reviews)</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {mockReviews.map((review) => (
                        <div key={review.id} className="border-b pb-4 last:border-b-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage src={review.userAvatar} />
                                <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{review.userName}</div>
                                <div className="text-sm text-gray-500">{review.date}</div>
                              </div>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(review.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Column */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Book {provider.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Service Type</h3>
                  <Select defaultValue={provider.services[0]}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {provider.services.includes("elderly") && (
                        <SelectItem value="elderly">Elderly Care</SelectItem>
                      )}
                      {provider.services.includes("childcare") && (
                        <SelectItem value="childcare">Childcare</SelectItem>
                      )}
                      {provider.services.includes("both") && (
                        <SelectItem value="both">Both Services</SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Date</h3>
                  <Calendar className="rounded-md border" />
                </div>

                <div>
                  <h3 className="font-medium mb-2">Time</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Start Time</p>
                      <Select defaultValue="09:00">
                        <SelectTrigger>
                          <SelectValue placeholder="Start time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="13:00">1:00 PM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">End Time</p>
                      <Select defaultValue="17:00">
                        <SelectTrigger>
                          <SelectValue placeholder="End time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="13:00">1:00 PM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                          <SelectItem value="17:00">5:00 PM</SelectItem>
                          <SelectItem value="18:00">6:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Notes (Optional)</h3>
                  <textarea
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-care-500 focus:border-care-500"
                    rows={3}
                    placeholder="Any special instructions or requirements..."
                  ></textarea>
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between mb-2">
                    <span>8 hours × ${provider.hourlyRate}/hr</span>
                    <span>${8 * provider.hourlyRate}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Service fee</span>
                    <span>$10</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span>${8 * provider.hourlyRate + 10}</span>
                  </div>
                </div>

                <Button className="w-full">Book Now</Button>
                <p className="text-center text-sm text-gray-500">
                  You won't be charged until the booking is confirmed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProviderProfile;
