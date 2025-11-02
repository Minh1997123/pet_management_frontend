import style from "./ListBreedItem.module.css";

type typeProps = {
  index: number;
  breed: string;
  type: string;
};
const ListBreedItem = function (props: typeProps) {
  return (
    <tr className={style.item}>
      <td>{props.index}</td>
      <td>{props.breed}</td>
      <td>{props.type}</td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default ListBreedItem;
