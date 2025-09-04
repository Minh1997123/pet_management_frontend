import style from "./List.module.css";
import { useSelector } from "react-redux";
import ListItem from "./ListItem/ListItem";
import { typeReduxState } from "../../store/type";

const List = function () {
  const listPets = useSelector((state: typeReduxState) => state.listPet);
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
          <th>Date Add</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className={style.list__body}>
        {listPets.map(
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
