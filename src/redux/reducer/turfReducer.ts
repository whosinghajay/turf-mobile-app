import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {turfDataInfoType} from '../../types/types';

const initialState: {turf: turfDataInfoType} = {
  turf: {
    _id: '',
    comments: [],
    courtNumbers: 0,
    image: '',
    price: 0,
    services: [],
    slot: [
      {
        courtNumber: 0,
        days: [
          {
            // date: new Date().toISOString(), // or set it to null if you prefer
            date: '',
            slots: [
              {
                time: '',
                booked: false,
              },
            ],
          },
        ],
      },
    ],
    turfLocation: '',
    turfName: '',
    typeOfCourt: '',
    createdAt: undefined,
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
