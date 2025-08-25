import ListItem from "./ListItem/ListItem";
const List = function () {
  return (
    <table>
      <thead>
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
      {/* <ListItem ></ListItem> */}
    </table>
  );
};
export default List;
