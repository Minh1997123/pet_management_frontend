import style from "./ListItem.module.css";
import { typePet } from "../../../store/type";
type propsType = typePet & {
  index: number;
};

const ListItem = function (props: propsType) {
  // kiem tra xem da chon checkbox chua
  const checkHandler = function (value: boolean) {
    if (value) {
      return (
        <td>
          <div className={`${style.circle} ${style["circle--green"]}`}>✔</div>
        </td>
      );
    } else {
      return (
        <td>
          <div className={`${style.circle} ${style["circle--red"]}`}>X</div>
        </td>
      );
    }
  };
  // lay ngay theo mui gio cua may tinh
  const getDateLocal = function (date: string) {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  };

  // ham xoa thu cung
  const deletePetHandler: () => void = function () {
    const isDelete = window.confirm("Are you sure?");
    if (isDelete) {
      console.log(props.id);
    }
  };
  // ham tinh BMI cho thu cung
  const calculateBMI = function (type: string) {
    const num = type === "Dog" ? 703 : 886;
    const BMI = (props.weight * num) / props.length ** 2;
    return BMI.toFixed(2);
  };
  return (
    <tr
      className={`${style.list__item} ${
        props.index % 2 === 0 && style["list__item--gray"]
      }`}
    >
      <td>
        <strong>{props.id}</strong>
      </td>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td>{props.type}</td>
      <td>{props.weight} kg</td>
      <td>{props.length} cm</td>
      <td>{props.breed}</td>
      <td>
        <div
          style={{ backgroundColor: `${props.color}` }}
          className={style["item--square"]}
        ></div>
      </td>
      {checkHandler(props.vaccinated)}
      {checkHandler(props.dewormed)}
      {checkHandler(props.sterilized)}
      <td>{calculateBMI(props.type)}</td>
      <td>{getDateLocal(props.dateAdd)}</td>
      <td>
        <button className={style["button--delete"]} onClick={deletePetHandler}>
          Delete
        </button>
      </td>
    </tr>
  );
};
export default ListItem;
