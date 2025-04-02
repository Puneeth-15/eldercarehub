
export type UserRole = 'care-seeker' | 'care-provider' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  bio?: string;
  phone?: string;
  location?: string;
  isVerified: boolean;
  createdAt: string;
}

export interface CareProvider extends User {
  role: 'care-provider';
  services: ('elderly' | 'childcare' | 'both')[];
  skills: string[];
  experience: number; // years
  hourlyRate: number;
  availability: {
    days: ('mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun')[];
    startTime: string;
    endTime: string;
  }[];
  rating: number;
  reviews: Review[];
  certifications: string[];
}

export interface CareSeeker extends User {
  role: 'care-seeker';
  careType: ('elderly' | 'childcare' | 'both')[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Booking {
  id: string;
  careSeekerId: string;
  careProviderId: string;
  startTime: string;
  endTime: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalAmount: number;
  notes?: string;
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}
