import ListBreedItem from "./ListBreedItem/ListBreedItem";
import style from "./ListBreed.module.css";
const ListBreed = function () {
  return (
    <table className={style.list}>
      <thead>
        <tr>
          <th>#</th>
          <th>Breed</th>
          <th>Type</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <ListBreedItem index={1} breed="test" type="Cat"></ListBreedItem>
        <ListBreedItem index={2} breed="test" type="Cat"></ListBreedItem>
      </tbody>
    </table>
  );
};

export default ListBreed;
