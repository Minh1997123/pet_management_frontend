import FormInputItem, { typeInput } from "./FormItem/FormInputItem";
import { useDispatch } from "react-redux";
import { addPet } from "../../store/slice";
import style from "./Form.module.css";
import { typePet } from "../../store/type";

const Form = function () {
  const dispatch = useDispatch();
  // ham validate form
  const valiDateHandler: (petInfo: typePet) => boolean = function (petInfo) {
    let key: keyof typePet;
    for (key in petInfo) {
      if (key === "sterilized" || key === "dewormed" || key === "vaccinated") {
        continue;
      }
      if (!petInfo[key]) {
        if (key === "type") {
          alert("Please select Type!");
        } else if (key === "breed") {
          alert("Please select Breed!");
        } else {
          alert(`Please input for ${key}`);
        }
        return false;
      }
    }
    const isCheckAge = petInfo.age < 1 && petInfo.age > 15;
    const isCheckWeight = petInfo.weight < 1 && petInfo.weight > 15;
    const isCheckLength = petInfo.length < 1 && petInfo.length > 100;
    if (isCheckAge) {
      alert(`Age must be between 1 and 15!`);
      return false;
    }
    if (isCheckLength) {
      alert(`Length must be between 1 and 100!`);
      return false;
    }
    if (isCheckWeight) {
      alert(`Weight must be between 1 and 15!`);
      return false;
    }
    return true;
  };
  // ham them thong tin pet vao danh sach
  const addPetHandler = function (petInfo: typePet, element: HTMLFormElement) {
    if (valiDateHandler(petInfo)) {
      dispatch(addPet(petInfo));
      element.reset();
    }
  };

  // lay gia thong tin tu form va them vao danh sach
  const submitHandler: (event: React.FormEvent) => void = function (event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    const newData = {
      id: Math.random().toString(),
      name: String(data.name),
      age: Number(data.age),
      weight: Number(data.weight),
      length: Number(data.length),
      breed: String(data.breed),
      type: String(data.type),
      color: String(data.color),
      vaccinated: fd.has("vaccinated"),
      dewormed: fd.has("dewormed"),
      sterilized: fd.has("sterilized"),
      dateAdd: new Date().toISOString(),
    };
    addPetHandler(newData, form);
  };
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <div className={`${style.input__item} ${style["label--last"]}`}>
        <FormInputItem
          id="name"
          key="name"
          type={typeInput.text}
          label="Pet Name"
          placeholder="Input Name"
        ></FormInputItem>
        <FormInputItem
          id="age"
          key="age"
          type={typeInput.number}
          label="Age"
          placeholder="Input Age"
          defaultValue={1}
          max={15}
        ></FormInputItem>
      </div>
      <div className={`${style.input__item} ${style["input--full"]}`}>
        <FormInputItem
          id="type"
          key="type"
          type={typeInput.select}
          label="Breed"
          placeholder="Input Breed"
          option={["Dog", "Cat"]}
        ></FormInputItem>
      </div>
      <div
        className={`${style.input__item} ${style["label--last"]} ${style["input--half"]}`}
      >
        <FormInputItem
          id="weight"
          key="weight"
          type={typeInput.number}
          label="Weight"
          placeholder="Input Weight"
          max={15}
          defaultValue={1}
        ></FormInputItem>
        <FormInputItem
          id="length"
          key="length"
          type={typeInput.number}
          label="Length"
          placeholder="Input Length"
          max={100}
          defaultValue={1}
        ></FormInputItem>
      </div>
      <div
        className={`${style.input__item} ${style["label--last"]} ${style["input--half"]}`}
      >
        <FormInputItem
          id="color"
          key="color"
          type={typeInput.color}
          label="Color"
          placeholder="Input Color"
        ></FormInputItem>
        <FormInputItem
          id="breed"
          key="breed"
          type={typeInput.select}
          label="Type"
          placeholder="Select type"
          option={["Golden Retriever", "Chihuahua", "Munchkin", "Abyssinian"]}
        ></FormInputItem>
      </div>
      <div className={style.checkbox}>
        <div className={style.checkbox__items}>
          <div className={style.checkbox__item}>
            <input type="checkbox" id="vaccinated" name="vaccinated" />
            <label htmlFor="vaccinated">Vaccinated</label>
          </div>
          <div className={style.checkbox__item}>
            <input type="checkbox" id="dewormed" name="dewormed" />
            <label htmlFor="dewormed">Dewormed</label>
          </div>
          <div className={style.checkbox__item}>
            <input type="checkbox" id="sterilized" name="sterilized" />
            <label htmlFor="sterilized">Sterilized</label>
          </div>
        </div>
      </div>
      <div className={style.form__button}>
        <button className={style["form__button--submit"]} type="submit">
          Submit
        </button>
        <button className={style["form__button--show"]}>
          Show Healthy Pet
        </button>
      </div>
    </form>
  );
};
export default Form;
