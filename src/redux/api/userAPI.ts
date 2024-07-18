import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {server} from '../store';
import {MessageResponse} from '../../types/api-types';
import {User} from '../../types/types';
import {server} from '../store';

export const userAPI = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${server}/api/v1/user`,
  }),
  endpoints: builder => ({
    createUser: builder.mutation<MessageResponse, User>({
      query: user => ({
        url: 'create',
        method: 'POST',
        body: user,
      }),
    }),
    getUsers: builder.query<User[], void>({query: () => 'all'}),
    deleteUser: builder.mutation<MessageResponse, string>({
      query: id => ({
        url: `${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {useCreateUserMutation, useGetUsersQuery, useDeleteUserMutation} =
  userAPI;
