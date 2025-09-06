import { configureStore } from "@reduxjs/toolkit";
import { listPetReducer, showPetHealthyReducer } from "./slice";

const store = configureStore({
  reducer: {
    listPet: listPetReducer,
    showPetHealthy: showPetHealthyReducer,
  },
});

export default store;
