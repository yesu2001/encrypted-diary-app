import { combineReducers, configureStore } from "@reduxjs/toolkit";
import journalReducer from "./journalSlice";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  // add reducer here
  journals: journalReducer,
  user: userReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
