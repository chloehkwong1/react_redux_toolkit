import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterslice = createSlice({
  name: "counter",
  initialState,
  // create actions with anonymous functions inside this reducers object
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// destructure actions
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
