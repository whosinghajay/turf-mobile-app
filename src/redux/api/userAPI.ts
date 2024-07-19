import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {server} from '../store';
import {MessageResponse} from '../../types/api-types';
import {User} from '../../types/types';
// import {server} from '../store';
import {API_SERVER} from '../../../envVar';

export const userAPI = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_SERVER}/api/v1/user`,
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
