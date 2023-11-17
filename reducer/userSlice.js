import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    userData: null,
    error: null,
  },
  reducers: {
    saveUser: (state, action) => {
      state.isLoading = false;
      state.userData = action.payload.user;
    },
  },
  extraReducers: (builders) => {},
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
