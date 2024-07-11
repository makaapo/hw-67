import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

interface IntercomState {
  value: string;
}

const password = '1337';

const initialState: IntercomState = {
  value: '',
};

export const intercomSlice = createSlice({
  name: 'intercom',
  initialState,
  reducers: {
    increase: (state:IntercomState, action: PayloadAction<string>) => {
      if (state.value.length < 4) {
        state.value += action.payload;
      }
    },
    decrease: (state:IntercomState) => {
      state.value = state.value.slice(0, -1);
    },
    check: (state:IntercomState) => {
      if (state.value === password) {
        toast.success('Access Granted');
      } else {
        toast.error('Access Denied');
      }
    },
  },
});

export const {
  increase,
  decrease,
  check} = intercomSlice.actions;
export const intercomReducer = intercomSlice.reducer;