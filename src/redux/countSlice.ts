import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CountState {
  value: number;
}

const initialState: CountState = {
  value: 0,
};

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    storeCount: (state: CountState, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { storeCount } = countSlice.actions;

export default countSlice.reducer;
