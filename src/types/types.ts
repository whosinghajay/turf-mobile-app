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
