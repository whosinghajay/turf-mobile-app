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
  courtNumber: Number;
  days: dayType[];
}

export interface Turf {
  image: string;
  turfName: string;
  turfLocation: string;
  services: [];
  courtNumbers: number;
  price: number;
  typeOfCourt: string;
  _id: any;
  comments: [];
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
