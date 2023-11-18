import {
  fetchJournlsData,
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
      return activeData;
    }
  }
);

// export const fetchSingleJournal = createAsyncThunk(
//   "journals/fetchSingleJournal",
//   async ({ id }) => {
//     const data = await fetchJournal(id);
//     if (data) {
//       const activeData = data.filter((item) => item.status === "active");
//       return activeData;
//     }
//   }
// );

export const addNewJournal = createAsyncThunk(
  "journals/addNewJournal",
  async ({ newJournal }) => {
    await insertNewJournal(newJournal);
    return newJournal;
  }
);

export const updateTitle = createAsyncThunk(
  "journals/updateTitle",
  async ({ title, id }) => {
    try {
      await updateJournalTitle(title, id);
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
      console.log(id);
      await updateJournalContent(content, id);
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
