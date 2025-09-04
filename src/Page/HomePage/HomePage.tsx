import { useSelector } from "react-redux";
import Form from "../../component/Form/Form";
import List from "../../component/List/List";
import { typeReduxState } from "../../store/type";
import style from "./HomePage.module.css";
const FormPage = function () {
  const listPets = useSelector((state: typeReduxState) => state.listPet);
  return (
    <div className={style.home__container}>
      <header>
        <h1>Pet Management</h1>
      </header>
      <Form></Form>
      {listPets.length ? (
        <div className={style.home__container__list}>
          <List></List>
        </div>
      ) : (
        []
      )}
    </div>
  );
};

export default FormPage;
