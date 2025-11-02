import Cart from "../../component/Cart/Cart";
import FormBreed from "../../component/FormBreed/FormBreed";
import ListBreed from "../../component/ListBreed/ListBreed";
import style from "./BreedPage.module.css";
const BreedPage = function () {
  return (
    <div className={style.page}>
      <Cart title="Breed Management">
        <FormBreed></FormBreed>
        <ListBreed></ListBreed>
      </Cart>
    </div>
  );
};
export default BreedPage;
