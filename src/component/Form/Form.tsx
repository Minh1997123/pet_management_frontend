import FormInputItem, { typeInput } from "./FormItem/FormInputItem";

const Form = function () {
  return (
    <form>
      <div>
        <FormInputItem
          id="petId"
          key="petId"
          type={typeInput.text}
          label="Pet ID"
          placeholder="Input ID"
        ></FormInputItem>
      </div>
      <div>
        <FormInputItem
          id="petName"
          key="petName"
          type={typeInput.text}
          label="Pet Name"
          placeholder="Input Name"
        ></FormInputItem>
        <FormInputItem
          id="age"
          key="age"
          type={typeInput.text}
          label="Age"
          placeholder="Input Age"
        ></FormInputItem>
      </div>
      <div>
        <FormInputItem
          id="type"
          key="type"
          type={typeInput.select}
          label="Type"
          placeholder="Select type"
          option={["Golden Retriever", "Chihuahua", "Munchkin", "Abyssinian"]}
        ></FormInputItem>
      </div>
      <div>
        <FormInputItem
          id="weight"
          key="weight"
          type={typeInput.number}
          label="Weight"
          placeholder="Input Weight"
        ></FormInputItem>
        <FormInputItem
          id="length"
          key="length"
          type={typeInput.number}
          label="Length"
          placeholder="Input Length"
        ></FormInputItem>
      </div>
      <div>
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
          label="Breed"
          placeholder="Input Breed"
          option={["Dog", "Cat"]}
        ></FormInputItem>
      </div>
    </form>
  );
};
export default Form;
