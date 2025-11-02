import FormInputItem from "../Form/FormItem/FormInputItem";
import { typeInput } from "../Form/FormItem/FormInputItem";
import style from "./FormSearch.module.css";
const FormSearch = function () {
  return (
    <form className={style.form}>
      <FormInputItem
        id="name"
        type={typeInput.text}
        label="Pet Name"
        placeholder="Input Name"
      ></FormInputItem>
      <FormInputItem
        id="type"
        type={typeInput.select}
        label="Type"
        option={["Dog", "Cat"]}
      ></FormInputItem>
      <FormInputItem
        id="breed"
        type={typeInput.select}
        label="Breed"
        option={[]}
      ></FormInputItem>
      <div className={style.checkbox}>
        <div>
          <input type="checkbox" id="vaccinated" name="vaccinated" />
          <label htmlFor="vaccinated">vaccinated</label>
        </div>
        <div>
          <input type="checkbox" id="dewormed" name="dewormed" />
          <label htmlFor="dewormed">dewormed</label>
        </div>
        <div>
          <input type="checkbox" id="sterilized" name="sterilized" />
          <label htmlFor="sterilized">sterilized</label>
        </div>
      </div>
      <button className={style.button}>Find</button>
    </form>
  );
};
export default FormSearch;
