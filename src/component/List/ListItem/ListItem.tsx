type propsType = {
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

const ListItem = function (props: propsType) {
  const checkHandler = function (value: boolean) {
    if (value) {
      return <td>✔</td>;
    } else {
      return <td>X</td>;
    }
  };
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td>{props.type}</td>
      <td>{props.weight}</td>
      <td>{props.length} kg</td>
      <td>{props.length} cm</td>
      <td>{props.breed}</td>
      {checkHandler(props.vaccinated)}
      {checkHandler(props.dewormed)}
      {checkHandler(props.sterilized)}
      <td></td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
};
export default ListItem;
