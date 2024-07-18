import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {turfDataInfoType, User} from '../../types/types';

const initialState = {
  turf: {
    _id: '',
    comments: [],
    courtNumbers: 0,
    image: '',
    price: 0,
    services: [],
    slot: [],
    turfLocation: '',
    turfName: '',
    typeOfCourt: '',
  },
};

export const turfReducer = createSlice({
  name: 'turfReducer',
  initialState,
  reducers: {
    turfData: (state, action: PayloadAction<turfDataInfoType>) => {
      state.turf = action.payload;
    },
  },
});

export const {turfData} = turfReducer.actions;

export default turfReducer.reducer;
