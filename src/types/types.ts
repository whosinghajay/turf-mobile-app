export interface User {
  phoneNumber: number;
  gender: string;
  fullName: string;
  location: string;
  role: string;
}

export interface userInfoType {
  fullName?: string;
  location?: string;
  gender?: string;
  role?: string;
}

interface timeSlotType {
  time: string;
  booked: boolean;
}

interface dayType {
  date: string;
  slots: timeSlotType[];
}

interface SlotType {
  courtNumber: number;
  days: dayType[];
}

export interface Turf {
  image: string;
  turfName: string;
  turfLocation: string;
  services: string[];
  courtNumbers: number;
  price: number;
  typeOfCourt: string;
  _id: any;
  comments: string[];
  slot: SlotType[];
  createdAt: Date;
  updatedAt: Date;
}

export interface userDataType {
  fullName: string;
  location: string;
  phoneNumber: number;
  role: string;
  gender: string;
}

export interface turfDataInfoType {
  createdAt: any;
  _id: string;
  comments: string[];
  courtNumbers: number;
  image: string;
  price: number;
  services: string[];
  slot: SlotType[];
  turfLocation: string;
  turfName: string;
  typeOfCourt: string;
}

export interface Booking {
  userId: string;
  status: string;
  turfInfo: {
    turfName: string;
    turfPhoto: string;
    turfPrice: number;
    turfLocation: string;
    turfId: string;
    slot: {
      courtNumber: number;
      date: string;
      time: string;
      booked: boolean;
    }[];
  };
  total: number;
}
