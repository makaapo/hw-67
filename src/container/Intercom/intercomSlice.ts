import {createSlice} from '@reduxjs/toolkit';

interface IntercomState {
  value: string;
}

const password = '1337'

const initialState: IntercomState = {
  value: '',
}
export const intercomSlice = createSlice({
  name: 'intercom',
  initialState,
  reducers: {
    increase: (state) => {
      state.value;
    },
    decrease: (state) => {
      state.value;
    }
  },
})

export const intercomReducer = intercomSlice.reducer;
export const {
  increase,
  decrease} = intercomSlice.actions;