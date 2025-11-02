import { configureStore } from "@reduxjs/toolkit";
import {
  listPetReducer,
  showPetHealthyReducer,
  editModeReducer,
} from "./slice";

const store = configureStore({
  reducer: {
    listPet: listPetReducer,
    showPetHealthy: showPetHealthyReducer,
    editMode: editModeReducer,
  },
});

export default store;
