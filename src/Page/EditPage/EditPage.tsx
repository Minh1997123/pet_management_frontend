import Cart from "../../component/Cart/Cart";
import Form from "../../component/Form/Form";
import List from "../../component/List/List";
import style from "./EditPage.module.css";
import { typeReduxState } from "../../store/type";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { showEditMode } from "../../store/slice";
const EditPage = function () {
  const dispatch = useDispatch();
  const listPets = useSelector((state: typeReduxState) => state.listPet);
  const editMode = useSelector((state: typeReduxState) => state.editMode);
  useEffect(function () {
    dispatch(showEditMode(true));
    return () => {
      dispatch(showEditMode(false));
    };
  }, []);
  return (
    <div className={style.page}>
      <Cart title="Edit Pet">
        {editMode.isShowForm && <Form edit></Form>}
        {listPets.length ? <List></List> : []}
      </Cart>
    </div>
  );
};
export default EditPage;
