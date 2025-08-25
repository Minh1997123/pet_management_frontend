import style from "./FormInputItem.module.css";
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
      <label htmlFor={props.id} className={style.label}>
        {props.label}
      </label>
      {props.type === "select" ? (
        <select id={props.id} className={style.item} required>
          <option>Select {props.label}</option>
          {props.option?.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
      ) : (
        <input
          className={style.item}
          type={props.type}
          id={props.id}
          name={props.id}
          placeholder={props.placeholder}
          min={0}
          required
        />
      )}
    </>
  );
};
export default FormInputItem;
