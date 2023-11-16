import {
  fetchJournlsData,
  insertNewJournal,
  pushToTrash,
  updateJournalContent,
  updateJournalTitle,
} from "@/utils/journalsApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchJournals = createAsyncThunk(
  "fetchJournal",
  async ({ userId }) => {
    console.log("userId", userId);
    const data = await fetchJournlsData(userId);
    console.log(data);
    if (data) {
      return data;
    }
  }
);

export const addNewJournal = createAsyncThunk(
  "addNewJournal",
  async ({ newJournal }) => {
    const data = await insertNewJournal(newJournal);
    console.log(data);
  }
);

export const updateTitle = createAsyncThunk(
  "updateTitle",
  async ({ title, id }) => {
    try {
      const data = await updateJournalTitle(title, id);
      console.log(data);
    } catch (error) {
      console.log(error?.status);
    }
  }
);

export const updateContent = createAsyncThunk(
  "updateContent",
  async ({ content, id }) => {
    try {
      const data = await updateJournalContent(content, id);
      console.log(data);
    } catch (error) {
      console.log(error?.status);
    }
  }
);

export const deleteJournal = createAsyncThunk(
  "deleteJournal",
  async ({ id }) => {
    try {
      await pushToTrash(id);
    } catch (error) {
      console.log(error);
    }
  }
);

const journalSlice = createSlice({
  name: "journals",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(fetchJournals.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default journalSlice.reducer;
