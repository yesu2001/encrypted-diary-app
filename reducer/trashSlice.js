import {
  deleteCompletely,
  fetchJournlsData,
  restoreJournalWithId,
} from "@/utils/journalsApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTrashJournals = createAsyncThunk(
  "journals/fetchTrashJournal",
  async ({ userId }) => {
    const data = await fetchJournlsData(userId);
    if (data) {
      const trashData = data.filter((item) => item.status === "deactive");
      return trashData;
    }
    return [];
  }
);

export const deletePermanent = createAsyncThunk(
  "journals/deletePermanent",
  async (id) => {
    try {
      console.log(id);
      await deleteCompletely(id);
      return { id };
    } catch (error) {
      console.log(error);
    }
  }
);
export const restoreJournal = createAsyncThunk(
  "journals/restoreJournal",
  async (id) => {
    try {
      await restoreJournalWithId(id);
      return { id };
    } catch (error) {
      console.log(error);
    }
  }
);

const trashSlice = createSlice({
  name: "trash",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(fetchTrashJournals.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(deletePermanent.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload.id);
        console.log(state.data);
      })
      .addCase(restoreJournal.fulfilled, (state, action) => {
        console.log(action.payload);
        const updatedList = state.data.map((object) => {
          if (object.id === action.payload.id) {
            return { ...object, status: "active" };
          } else {
            return object;
          }
        });
        state.data = [...updatedList];
      });
  },
});

export default trashSlice.reducer;
