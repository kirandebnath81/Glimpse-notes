import { configureStore } from "@reduxjs/toolkit";

//reducers
import {
  menuReducer,
  modalReducer,
  tagsReducer,
  notesListReducer,
} from "./features";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    modal: modalReducer,
    tags: tagsReducer,
    notesList: notesListReducer,
  },
});
