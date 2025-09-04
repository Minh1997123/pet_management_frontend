import { createSlice } from "@reduxjs/toolkit";

type typeValue = {
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
  payload: typeValue;
};
const defaultValue: typeValue[] = [];
const listPetSlice = createSlice({
  name: "listPet",
  initialState: defaultValue,
  reducers: {
    addPet: (state, actions: typeActions) => {
      return [...state, actions.payload];
    },
  },
});

export const { addPet } = listPetSlice.actions;
export default listPetSlice.reducer;
