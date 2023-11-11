import { createSlice } from '@reduxjs/toolkit';

const counterInitialState = {
  value: 0,
  loading: false,
  fulfilled: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase('counter/loading', (state) => {
        console.log('loading');
        state.loading = true;
        state.fulfilled = false;
      })
      .addCase('counter/fulfilled', (state) => {
        console.log('fulfilled');
        state.loading = false;
        state.fulfilled = true;
      });
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
