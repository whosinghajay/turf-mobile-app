import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Turf} from '../../types/types';
// import {server} from '../store';
import {API_SERVER} from '../../../envVar';
import {updateTurfRequest, updateTurfResponse} from '../../types/api-types';

interface TurfResponse {
  success: boolean;
  total: number;
  turf: Turf[];
}

export const turfAPI = createApi({
  reducerPath: 'turfApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_SERVER}/api/v1/turf`,
  }),
  endpoints: builder => ({
    getTurf: builder.query<TurfResponse, void>({query: () => 'all'}),
    updateTurf: builder.mutation<updateTurfResponse, updateTurfRequest>({
      query: ({body, turfId}) => ({
        url: `${turfId}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const {useGetTurfQuery, useUpdateTurfMutation} = turfAPI;
