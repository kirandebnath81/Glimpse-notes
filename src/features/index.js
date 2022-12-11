//menu
export { toggleMenu } from "./menu/menuSlice";
export { default as menuReducer } from "./menu/menuSlice";

//modal
export {
  toggleTagsModal,
  toggleCreateNoteModal,
  toggleFiltersModal,
} from "./modal/modalSlice";
export { default as modalReducer } from "./modal/modalSlice";

//tags
export { addTags, deleteTags } from "./tags/tagsSlice";
export { default as tagsReducer } from "./tags/tagsSlice";

//notesList
export {
  setMainNotes,
  setArchiveNotes,
  setTrashNotes,
  unarchiveNote,
  restoreNote,
  deleteNote,
  setPinnedNotes,
  setEditNote,
  readNote,
  removeTags,
} from "./notesList/notesListSlice";
export { default as notesListReducer } from "./notesList/notesListSlice";
