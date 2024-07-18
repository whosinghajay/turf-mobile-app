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
  slot: [];
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
  comments: [];
  courtNumbers: number;
  image: string;
  price: number;
  services: [];
  slot: [];
  turfLocation: string;
  turfName: string;
  typeOfCourt: string;
}
