import style from "./FormBreed.module.css";
import FormInputItem from "../Form/FormItem/FormInputItem";
import { typeInput } from "../Form/FormItem/FormInputItem";
const FormBreed = function () {
  return (
    <form className={style.form}>
      <div className={style.item}>
        <FormInputItem
          id={"breed"}
          type={typeInput.text}
          label="Breed"
          placeholder="Input Breed"
        ></FormInputItem>
      </div>
      <div className={style.item}>
        <FormInputItem
          id="type"
          type={typeInput.select}
          label="Type"
          option={["Dog", "Cat"]}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormBreed;
