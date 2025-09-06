import { createSlice } from "@reduxjs/toolkit";

type typeListValue = {
  id: string;
  name: string;
  age: number;
  type: string;
  weight: number;
  length: number;
  breed: string;
  color: string;
  vaccinated: boolean;
  dewormed: boolean;
  sterilized: boolean;
  dateAdd: string;
};
type typeActions = {
  type: string;
  payload: typeListValue;
};
const defaultListValue: typeListValue[] = [];
const defaultShowHealthy: boolean = true;
const listPetSlice = createSlice({
  name: "listPet",
  initialState: defaultListValue,
  reducers: {
    addPet: (state, actions: typeActions) => {
      return [...state, actions.payload];
    },
  },
});
const showPetHealthySlice = createSlice({
  name: "showPetHealthy",
  initialState: defaultShowHealthy,
  reducers: {
    showPetHealthy: (state) => {
      return !state;
    },
  },
});

// list pet
export const { addPet } = listPetSlice.actions;
export const listPetReducer = listPetSlice.reducer;

// show pet healthy
export const { showPetHealthy } = showPetHealthySlice.actions;
export const showPetHealthyReducer = showPetHealthySlice.reducer;
