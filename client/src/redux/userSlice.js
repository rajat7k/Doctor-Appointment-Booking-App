import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state,actions) => {
      state.user = actions.payload;
    },
    
  },
});

export const { setUser } = usersSlice.actions;