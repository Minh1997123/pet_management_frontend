import { useSelector } from "react-redux";
import Form from "../../component/Form/Form";
import List from "../../component/List/List";
import { typeReduxState } from "../../store/type";
import style from "./HomePage.module.css";
import Cart from "../../component/Cart/Cart";
const HomePage = function () {
  const listPets = useSelector((state: typeReduxState) => state.listPet);
  return (
    <div className={style.home__container}>
      <Cart title={"Pet Management"}>
        <Form></Form>
        {listPets.length ? (
          <div className={style.home__container__list}>
            <List></List>
          </div>
        ) : (
          []
        )}
      </Cart>
    </div>
  );
};

export default HomePage;
