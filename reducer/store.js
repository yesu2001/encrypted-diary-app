import { combineReducers, configureStore } from "@reduxjs/toolkit";
import journalReducer from "./journalSlice";
import userReducer from "./userSlice";
import trashReducer from "./trashSlice";

const rootReducer = combineReducers({
  // add reducer here
  journals: journalReducer,
  user: userReducer,
  trash: trashReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
