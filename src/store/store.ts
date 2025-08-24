import { configureStore } from "@reduxjs/toolkit";
import listPetReducer from "./slice";

const store = configureStore({
  reducer: {
    listPet: listPetReducer,
  },
});

export default store;
