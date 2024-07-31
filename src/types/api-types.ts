import {Turf} from './types';

export interface UserMessageResponse {
  success: boolean;
  message: string;
  user: any;
}
export interface BookingMessageResponse {
  success: boolean;
  message: string;
  booking: any;
}

export interface updateTurfResponse {
  success: boolean;
  message: string;
  turf: Turf;
}

export interface updateTurfRequest {
  turfId: string;
  body: Turf;
}
