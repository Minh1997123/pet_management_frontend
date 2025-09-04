export type typeFormInputItemProps = {};

export type typePet = {
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

export type typeReduxState = {
  listPet: typePet[];
};
