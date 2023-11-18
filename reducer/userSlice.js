import { createClient } from "@/utils/supabase/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const saveUser = createAsyncThunk("user/saveUser", async ({ user }) => {
  try {
    console.log(user);
    const supabase = createClient();
    const { data, error } = await supabase
      .from("profiles")
      .insert(user)
      .select();
    console.log("error", error);
    if (error) {
      throw new Error("User already exists", error);
    }
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    userData: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(saveUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.userData = action.payload;
    });
  },
});

export default userSlice.reducer;
