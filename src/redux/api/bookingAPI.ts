import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {server} from '../store';
import {BookingMessageResponse} from '../../types/api-types';
import {Booking, User} from '../../types/types';
// import {server} from '../store';
import {API_SERVER} from '../../../envVar';

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
  }),
});

export const {useCreateBookingMutation} = bookingAPI;
