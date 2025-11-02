import style from "./ListItem.module.css";
import { typePet } from "../../../store/type";
import { useDispatch, useSelector } from "react-redux";
import { deletePet as deletePetRedux } from "../../../store/slice";
import { typeReduxState } from "../../../store/type";
type propsType = typePet & {
  index: number;
  edit?: true;
  find?: boolean;
};

const ListItem = function (props: propsType) {
  const dispatch = useDispatch();
  const editMode = useSelector((state: typeReduxState) => state.editMode);

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
  // ham xoa pet tren database

  const deletePet = async function () {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}pet/${props.id}` ||
        `http://localhost:5000/pet/${props.id}`,
      {
        method: "DELETE",
      }
    );
    return res;
  };
  // ham xoa thu cung
  const deletePetHandler: () => void = async function () {
    const isDelete = window.confirm("Are you sure?");
    if (isDelete) {
      const res = await deletePet();
      if (res.status !== 200) {
        return;
      }
      dispatch(deletePetRedux(props.id as string));
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
      {props.find ? null : (
        <td>
          {!editMode.isEditMode ? (
            <button
              className={style["button--delete"]}
              onClick={deletePetHandler}
            >
              Delete
            </button>
          ) : (
            <button className={style["button--edit"]}>Edit</button>
          )}
        </td>
      )}
    </tr>
  );
};
export default ListItem;
