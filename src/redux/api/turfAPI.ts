import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Turf} from '../../types/types';
// import {server} from '../store';
import {API_SERVER} from '../../../envVar';
import {
  createTurfRequest,
  createTurfResponse,
  updateTurfRequest,
  updateTurfResponse,
} from '../../types/api-types';

interface TurfResponse {
  success: boolean;
  total: number;
  turf: Turf[];
}
interface SingleTurfResponse {
  success: boolean;
  total: number;
  turf: Turf;
}

export const turfAPI = createApi({
  reducerPath: 'turfApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_SERVER}/api/v1/turf`,
  }),
  endpoints: builder => ({
    getTurf: builder.query<TurfResponse, void>({query: () => 'all'}),
    getSingleTurf: builder.query<SingleTurfResponse, string>({
      query: id => ({
        url: `${id}`,
        method: 'GET',
      }),
    }),
    updateTurf: builder.mutation<updateTurfResponse, updateTurfRequest>({
      query: ({body, turfId}) => ({
        url: `${turfId}`,
        method: 'PUT',
        body,
      }),
    }),
    createTurf: builder.mutation<createTurfResponse, FormData>({
      query: formData => ({
        url: 'create',
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    }),
  }),
});

export const {
  useGetTurfQuery,
  useUpdateTurfMutation,
  useGetSingleTurfQuery,
  useCreateTurfMutation,
} = turfAPI;
