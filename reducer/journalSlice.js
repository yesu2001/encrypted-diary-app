import {
  decryptData,
  encryptData,
  fetchJournlsData,
  fetchOneJournal,
  insertNewJournal,
  pushToTrash,
  updateJournalContent,
  updateJournalTitle,
} from "@/utils/journalsApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchActiveJournals = createAsyncThunk(
  "journals/fetchActiveJournals",
  async ({ userId }) => {
    const data = await fetchJournlsData(userId);
    if (data) {
      const activeData = data.filter((item) => item.status === "active");
      const activeJournals = activeData.map((item) => {
        const decryptedTitle = decryptData(item.title);
        const decryptedContent = decryptData(item.content);
        return { ...item, title: decryptedTitle, content: decryptedContent };
      });
      return activeJournals;
    }
  }
);

export const fetchSingleJournal = createAsyncThunk(
  "journals/fetchSingleJournal",
  async ({ id }) => {
    const data = await fetchOneJournal(id);
    if (data) {
      const decryptedTitle = decryptData(data[0].title);
      const decryptedContent = decryptData(data[0].content);
      const journal = {
        ...data[0],
        title: decryptedTitle,
        content: decryptedContent,
      };
      console.log(journal);
      return journal;
    }
  }
);

export const addNewJournal = createAsyncThunk(
  "journals/addNewJournal",
  async ({ newJournal }) => {
    const encryptedTitle = encryptData(newJournal.title);
    const encryptedContent = encryptData(newJournal.content);
    const journal = {
      ...newJournal,
      title: encryptedTitle,
      content: encryptedContent,
    };
    await insertNewJournal(journal);
    return newJournal;
  }
);

export const updateTitle = createAsyncThunk(
  "journals/updateTitle",
  async ({ title, id }) => {
    try {
      const encryptedTitle = encryptData(title);
      await updateJournalTitle(encryptedTitle, id);
      return { title, id };
    } catch (error) {
      console.log(error?.status);
    }
  }
);

export const updateContent = createAsyncThunk(
  "journals/updateContent",
  async ({ content, id }) => {
    try {
      const encryptedContent = encryptData(content);
      await updateJournalContent(encryptedContent, id);
      return { content, id };
    } catch (error) {
      console.log(error?.status);
    }
  }
);

export const deleteJournal = createAsyncThunk(
  "journals/deleteJournal",
  async ({ id }) => {
    try {
      await pushToTrash(id);
      return { id };
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
    builders
      .addCase(fetchActiveJournals.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(addNewJournal.fulfilled, (state, action) => {
        state.data = [action.payload, ...state.data];
      })
      .addCase(updateTitle.fulfilled, (state, action) => {
        const updatedList = state.data.map((object) => {
          if (object.id === action.payload.id) {
            return { ...object, title: action.payload.title };
          } else {
            return object;
          }
        });
        state.data = [...updatedList];
      })
      .addCase(updateContent.fulfilled, (state, action) => {
        const updatedList = state.data.map((object) => {
          if (object.id === action.payload.id) {
            return { ...object, content: action.payload.content };
          } else {
            return object;
          }
        });
        state.data = [...updatedList];
      })
      .addCase(deleteJournal.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      });
  },
});

export default journalSlice.reducer;
