import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {User} from '../../types/types';

const initialState = {
  user: {
    phoneNumber:NaN,
    gender: '',
    fullName: '',
    location: '',
    role: '',
  },
};

export const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const {userLogin} = userReducer.actions;

export default userReducer.reducer;