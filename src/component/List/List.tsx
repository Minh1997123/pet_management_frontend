import style from "./List.module.css";
import { useSelector } from "react-redux";
import ListItem from "./ListItem/ListItem";
import { typeReduxState, typeDataSocketIO } from "../../store/type";
import { useState, useEffect } from "react";
import openSocket from "socket.io-client";

type typeProps = { find?: true };

const List = function (props: typeProps) {
  const listPets = useSelector((state: typeReduxState) => state.listPet);
  const showPetHealthy = useSelector(
    (state: typeReduxState) => state.showPetHealthy
  );
  const [newListPets, setMewListPets] = useState(listPets);
  // effect ket noi voi socketIO
  useEffect(function () {
    const socket = openSocket(
      process.env.REACT_APP_API_URL || "http://localhost:5000"
    );
    // gui su kien listPet len server
    socket.on("listPet", (data: typeDataSocketIO) => {
      const newListPetSocket = data.listPet.map((pet: any) => {
        return { ...pet, id: pet._id };
      });
      setMewListPets(newListPetSocket);
    });
  }, []);
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
          {props.find ? null : <th>Action</th>}
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
                find={props.find}
              ></ListItem>
            );
          }
        )}
      </tbody>
    </table>
  );
};
export default List;
