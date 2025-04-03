import { Booking, CareProvider, CareSeeker, Message, Review, User } from "@/types";

// Mock Reviews
export const mockReviews: Review[] = [
  {
    id: "rev1",
    userId: "user1",
    userName: "Priya Sharma",
    userAvatar: "/placeholder.svg",
    rating: 4.8,
    comment: "Aarav was amazing with my father. Patient, kind, and professional. Highly recommend!",
    date: "2023-10-15",
  },
  {
    id: "rev2",
    userId: "user2",
    userName: "Rajesh Patel",
    userAvatar: "/placeholder.svg",
    rating: 5,
    comment: "Absolutely wonderful! My mother looks forward to Ananya's visits. She's become like family.",
    date: "2023-11-03",
  },
  {
    id: "rev3",
    userId: "user3",
    userName: "Neha Gupta",
    userAvatar: "/placeholder.svg",
    rating: 4.5,
    comment: "Very reliable and professional. My kids love spending time with Kavita.",
    date: "2023-09-22",
  },
  {
    id: "rev4",
    userId: "user4",
    userName: "Arjun Desai",
    userAvatar: "/placeholder.svg",
    rating: 4.7,
    comment: "Vikram has been helping with my grandfather for 3 months now. Very dependable and trustworthy.",
    date: "2023-10-29",
  },
];

// Mock Care Providers
export const mockCareProviders: CareProvider[] = [
  {
    id: "provider1",
    name: "Aarav Singh",
    email: "aarav.s@example.com",
    role: "care-provider",
    avatar: "/placeholder.svg",
    bio: "Certified nurse with 8+ years of experience in elderly care. Compassionate and dedicated to providing the highest quality care.",
    phone: "+91 9876543210",
    location: "Mumbai, Maharashtra",
    isVerified: true,
    createdAt: "2023-01-15",
    services: ["elderly"],
    skills: ["Medication Management", "Mobility Assistance", "Meal Preparation", "Companionship"],
    experience: 8,
    hourlyRate: 350,
    availability: [
      { days: ["mon", "tue", "wed"], startTime: "09:00", endTime: "17:00" },
      { days: ["fri"], startTime: "10:00", endTime: "18:00" },
    ],
    rating: 4.8,
    reviews: [mockReviews[0]],
    certifications: ["Registered Nurse (RN)", "CPR Certified", "First Aid"],
  },
  {
    id: "provider2",
    name: "Ananya Sharma",
    email: "ananya.s@example.com",
    role: "care-provider",
    avatar: "/placeholder.svg",
    bio: "Former healthcare worker with a passion for elder care. I believe in treating every client with dignity and respect.",
    phone: "+91 8765432109",
    location: "Delhi, NCR",
    isVerified: true,
    createdAt: "2023-02-20",
    services: ["elderly", "childcare"],
    skills: ["Dementia Care", "Medication Reminders", "Light Housekeeping", "Transportation"],
    experience: 5,
    hourlyRate: 300,
    availability: [
      { days: ["mon", "wed", "fri"], startTime: "08:00", endTime: "16:00" },
      { days: ["sat"], startTime: "09:00", endTime: "14:00" },
    ],
    rating: 4.9,
    reviews: [mockReviews[1]],
    certifications: ["Certified Nursing Assistant (CNA)", "Dementia Care Specialist"],
  },
  {
    id: "provider3",
    name: "Kavita Patel",
    email: "kavita.p@example.com",
    role: "care-provider",
    avatar: "/placeholder.svg",
    bio: "Experienced childcare provider with a background in early childhood education. I love creating fun and educational activities for kids.",
    phone: "+91 7654321098",
    location: "Bangalore, Karnataka",
    isVerified: true,
    createdAt: "2023-03-10",
    services: ["childcare"],
    skills: ["Early Education", "Arts & Crafts", "Meal Preparation", "First Aid"],
    experience: 6,
    hourlyRate: 275,
    availability: [
      { days: ["tue", "thu"], startTime: "08:30", endTime: "17:30" },
      { days: ["wed"], startTime: "09:00", endTime: "15:00" },
    ],
    rating: 4.7,
    reviews: [mockReviews[2]],
    certifications: ["Early Childhood Education", "CPR Certified", "First Aid"],
  },
  {
    id: "provider4",
    name: "Vikram Malhotra",
    email: "vikram.m@example.com",
    role: "care-provider",
    avatar: "/placeholder.svg",
    bio: "Dedicated caregiver with experience in both elderly care and childcare. I'm patient, reliable, and adaptable to various care needs.",
    phone: "+91 6543210987",
    location: "Chennai, Tamil Nadu",
    isVerified: true,
    createdAt: "2023-01-05",
    services: ["elderly", "childcare", "both"],
    skills: ["Personal Care", "Meal Preparation", "Medication Management", "Recreational Activities"],
    experience: 4,
    hourlyRate: 325,
    availability: [
      { days: ["mon", "tue", "wed", "thu", "fri"], startTime: "10:00", endTime: "18:00" },
    ],
    rating: 4.6,
    reviews: [mockReviews[3]],
    certifications: ["Home Health Aide", "CPR Certified"],
  },
];

// Mock Care Seekers
export const mockCareSeekers: CareSeeker[] = [
  {
    id: "seeker1",
    name: "Priya Sharma",
    email: "priya.s@example.com",
    role: "care-seeker",
    avatar: "/placeholder.svg",
    bio: "Looking for compassionate care for my elderly father who needs assistance with daily activities.",
    phone: "+91 5432109876",
    location: "Mumbai, Maharashtra",
    isVerified: true,
    createdAt: "2023-02-01",
    careType: ["elderly"],
  },
  {
    id: "seeker2",
    name: "Rajesh Patel",
    email: "rajesh.p@example.com",
    role: "care-seeker",
    avatar: "/placeholder.svg",
    bio: "Seeking a caregiver for my mother who has early-stage dementia and needs supervision and companionship.",
    phone: "+91 4321098765",
    location: "Delhi, NCR",
    isVerified: true,
    createdAt: "2023-03-15",
    careType: ["elderly"],
  },
  {
    id: "seeker3",
    name: "Neha Gupta",
    email: "neha.g@example.com",
    role: "care-seeker",
    avatar: "/placeholder.svg",
    bio: "Working parent looking for reliable childcare for my two kids (ages 4 and 6) after school hours.",
    phone: "+91 3210987654",
    location: "Bangalore, Karnataka",
    isVerified: true,
    createdAt: "2023-04-10",
    careType: ["childcare"],
  },
];

// Mock Admin User
export const mockAdmin: User = {
  id: "admin1",
  name: "Admin User",
  email: "admin@eldercarehub.com",
  role: "admin",
  isVerified: true,
  createdAt: "2023-01-01",
};

// Mock Bookings
export const mockBookings: Booking[] = [
  {
    id: "booking1",
    careSeekerId: "seeker1",
    careProviderId: "provider1",
    startTime: "2023-11-10T10:00:00",
    endTime: "2023-11-10T14:00:00",
    status: "completed",
    totalAmount: 100,
    notes: "Please bring activities for engagement.",
    createdAt: "2023-11-01",
  },
  {
    id: "booking2",
    careSeekerId: "seeker2",
    careProviderId: "provider2",
    startTime: "2023-11-15T09:00:00",
    endTime: "2023-11-15T17:00:00",
    status: "confirmed",
    totalAmount: 176,
    notes: "Medication reminder at 12:00 PM.",
    createdAt: "2023-11-05",
  },
  {
    id: "booking3",
    careSeekerId: "seeker3",
    careProviderId: "provider3",
    startTime: "2023-11-12T15:30:00",
    endTime: "2023-11-12T19:30:00",
    status: "pending",
    totalAmount: 80,
    notes: "Kids need help with homework.",
    createdAt: "2023-11-08",
  },
];

// Mock Messages
export const mockMessages: Message[] = [
  {
    id: "msg1",
    senderId: "seeker1",
    receiverId: "provider1",
    content: "Hi Sarah, I'm interested in booking you for elderly care. Are you available next week?",
    timestamp: "2023-11-01T10:30:00",
    isRead: true,
  },
  {
    id: "msg2",
    senderId: "provider1",
    receiverId: "seeker1",
    content: "Hello Jennifer! Yes, I'm available Monday, Wednesday, and Friday next week. What times were you thinking?",
    timestamp: "2023-11-01T11:15:00",
    isRead: true,
  },
  {
    id: "msg3",
    senderId: "seeker3",
    receiverId: "provider3",
    content: "Maria, do you have experience with kids who have ADHD?",
    timestamp: "2023-11-07T14:20:00",
    isRead: false,
  },
];

// Combine all users for authentication mock
export const mockUsers: User[] = [
  ...mockCareProviders,
  ...mockCareSeekers,
  mockAdmin,
];
