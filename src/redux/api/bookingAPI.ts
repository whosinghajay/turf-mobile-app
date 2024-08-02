import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {server} from '../store';
import {BookingMessageResponse} from '../../types/api-types';
import {Booking, User} from '../../types/types';
// import {server} from '../store';
import {API_SERVER} from '../../../envVar';

interface BookingResponse {
  success: boolean;
  bookings: Booking[];
}

export const bookingAPI = createApi({
  reducerPath: 'bookingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_SERVER}/api/v1/booking`,
  }),
  endpoints: builder => ({
    createBooking: builder.mutation<BookingMessageResponse, Booking>({
      query: booking => ({
        url: 'create',
        method: 'POST',
        body: booking,
      }),
    }),
    getBooking: builder.query<BookingResponse, void>({query: () => 'all'}),
    cancelBooking: builder.mutation<BookingMessageResponse, string>({
      query: id => ({
        url: `${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetBookingQuery,
  useCancelBookingMutation,
} = bookingAPI;
