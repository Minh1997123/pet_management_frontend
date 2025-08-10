export enum typeInput {
  text = "text",
  color = "color",
  select = "select",
  number = "number",
}
type propsType = {
  id: string;
  type: typeInput;
  label: string;
  placeholder: string;
  option?: string[];
};
const FormInputItem = function (props: propsType): React.JSX.Element {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      {props.type === "select" ? (
        <select>
          <option>Select {props.label}</option>
          {props.option?.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      ) : (
        <input
          type={props.type}
          id={props.id}
          name={props.id}
          placeholder={props.placeholder}
          min={0}
        />
      )}
    </>
  );
};
export default FormInputItem;
