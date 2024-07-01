import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {server} from '../store';
import {MessageResponse} from '../../types/api-types';
import {User} from '../../types/types';

export const userAPI = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl: `http://localhost:3000/api/v1/user`}),
  endpoints: builder => ({
    createUser: builder.mutation<MessageResponse, User>({
      query: user => ({
        url: 'create',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const {useCreateUserMutation} = userAPI;
