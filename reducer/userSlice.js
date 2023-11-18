import { createClient } from "@/utils/supabase/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const saveUser = createAsyncThunk("user/saveUser", async ({ user }) => {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("user_id", user.user_id);
    console.log("error", error);
    if (error) {
      throw new Error("Something went wrong when fetching the user", error);
    }
    console.log(data[0]);
    return data[0];
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
