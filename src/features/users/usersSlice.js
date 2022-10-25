import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Chloe Wong" },
  { id: "1", name: "Bartolomeu Ribeiro" },
  { id: "2", name: "Onyela Ogah" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
