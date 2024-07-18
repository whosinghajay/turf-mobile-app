import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Turf} from '../../types/types';
import {server} from '../store';

interface TurfResponse {
  success: boolean;
  total: number;
  turf: Turf[];
}

export const turfAPI = createApi({
  reducerPath: 'turfApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${server}/api/v1/turf`,
  }),
  endpoints: builder => ({
    getTurf: builder.query<TurfResponse, void>({query: () => 'all'}),
  }),
});

export const {useGetTurfQuery} = turfAPI;
