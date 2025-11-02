import { createSlice } from "@reduxjs/toolkit";
import { typePet, typeEditMode } from "./type";

type typeActionsAddPet = {
  type: string;
  payload: typePet;
};
type typeActionsAddListPet = {
  type: string;
  payload: typePet[];
};
type typeActionsDeletePet = {
  type: string;
  payload: string;
};

type typeActionsEditMode = {
  type: string;
  payload: boolean;
};
const defaultListValue: typePet[] = [];
const defaultShowHealthy: boolean = true;
const defaultEditMode: typeEditMode = {
  isShowForm: false,
  isEditMode: false,
};
const listPetSlice = createSlice({
  name: "listPet",
  initialState: defaultListValue,
  reducers: {
    // them toan bo danh sach thu cung
    addListPet: (state, actions: typeActionsAddListPet) => {
      return actions.payload;
    },
    // them tung thu cung
    addPet: (state, actions: typeActionsAddPet) => {
      return [...state, actions.payload];
    },
    // xoa thu cung
    deletePet: (state, actions: typeActionsDeletePet) => {
      const newListPet = state.filter((pet) => {
        return pet.id !== actions.payload;
      });
      return newListPet;
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

const editModeSlice = createSlice({
  name: "editMode",
  initialState: defaultEditMode,
  reducers: {
    showEditMode: (state, actions: typeActionsEditMode) => {
      return {
        isEditMode: actions.payload,
        isShowForm: state.isShowForm,
      };
    },
    showForm: (state, actions: typeActionsEditMode) => {
      return {
        isEditMode: state.isEditMode,
        isShowForm: actions.payload,
      };
    },
  },
});

// list pet
export const { addPet, addListPet, deletePet } = listPetSlice.actions;
export const listPetReducer = listPetSlice.reducer;

// show pet healthy
export const { showPetHealthy } = showPetHealthySlice.actions;
export const showPetHealthyReducer = showPetHealthySlice.reducer;

// show pet healthy
export const { showEditMode, showForm } = editModeSlice.actions;
export const editModeReducer = editModeSlice.reducer;
