import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {server} from '../store';
import {User, UserResponse} from '../../types/types';
// import {server} from '../store';
import {API_SERVER} from '../../../envVar';
import {UserMessageResponse} from '../../types/api-types';

export const userAPI = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_SERVER}/api/v1/user`,
  }),
  endpoints: builder => ({
    createUser: builder.mutation<UserMessageResponse, User>({
      query: user => ({
        url: 'create',
        method: 'POST',
        body: user,
      }),
    }),
    getUsers: builder.query<UserResponse, void>({query: () => 'all'}),
    deleteUser: builder.mutation<UserMessageResponse, string>({
      query: id => ({
        url: `${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {useCreateUserMutation, useGetUsersQuery, useDeleteUserMutation} =
  userAPI;
