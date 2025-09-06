import style from "./List.module.css";
import { useSelector } from "react-redux";
import ListItem from "./ListItem/ListItem";
import { typeReduxState } from "../../store/type";
import { useState, useEffect } from "react";
const List = function () {
  const reduxState = useSelector((state: typeReduxState) => state);
  const listPets = reduxState.listPet;
  const showPetHealthy = reduxState.showPetHealthy;
  const [newListPets, setMewListPets] = useState(listPets);
  // hien thi list pet healthy
  useEffect(
    function () {
      if (!showPetHealthy) {
        const healThyPets = listPets.filter((pet) => {
          return pet.dewormed && pet.sterilized && pet.vaccinated;
        });
        return setMewListPets(healThyPets);
      }
      return setMewListPets(listPets);
    },
    [showPetHealthy, listPets]
  );
  return (
    <table className={style.list}>
      <thead className={style.list__head}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Type</th>
          <th>Weight</th>
          <th>Length</th>
          <th>Breed</th>
          <th>Color</th>
          <th>Vaccinated</th>
          <th>Dewormed</th>
          <th>Sterilized</th>
          <th>BMI</th>
          <th>Date Add</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className={style.list__body}>
        {newListPets.map(
          (
            {
              id,
              name,
              age,
              type,
              weight,
              length,
              breed,
              color,
              vaccinated,
              dewormed,
              sterilized,
              dateAdd,
            },
            index
          ) => {
            return (
              <ListItem
                key={id}
                id={id}
                name={name}
                age={age}
                type={type}
                weight={weight}
                length={length}
                breed={breed}
                color={color}
                vaccinated={vaccinated}
                dewormed={dewormed}
                sterilized={sterilized}
                dateAdd={dateAdd}
                index={index}
              ></ListItem>
            );
          }
        )}
      </tbody>
    </table>
  );
};
export default List;
