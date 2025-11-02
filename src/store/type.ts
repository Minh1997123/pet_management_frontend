export type typeFormInputItemProps = {};

export type typePet = {
  id?: string;
  _id?: string;
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
export type typeEditMode = {
  isShowForm: boolean;
  isEditMode: boolean;
};
export type typeReduxState = {
  listPet: typePet[];
  showPetHealthy: boolean;
  editMode: typeEditMode;
};

export type typeDataSocketIO = {
  listPet: typePet[];
};
