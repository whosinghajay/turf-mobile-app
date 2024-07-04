import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {server} from '../store';
import {MessageResponse} from '../../types/api-types';
import {User} from '../../types/types';

export const userAPI = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl: `https://600a-2401-4900-1c19-b135-1c05-ad4f-19db-2a07.ngrok-free.app/api/v1/user`}),
  endpoints: builder => ({
    createUser: builder.mutation<MessageResponse, User>({
      query: user => ({
        url: 'create',
        method: 'POST',
        body: user,
      }),
    }),
    getUser : builder.query<User[], string>({query:()=>"all"})
  }),
});

export const {useCreateUserMutation, useGetUserQuery} = userAPI;
