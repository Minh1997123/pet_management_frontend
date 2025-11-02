import Cart from "../../component/Cart/Cart";
import style from "./SearchPage.module.css";
import List from "../../component/List/List";
import FormSearch from "../../component/FormSearch/FormSearch";
const SearchPage = function () {
  return (
    <div className={style.page}>
      <Cart title="Search Pet">
        <FormSearch></FormSearch>
        <List find></List>
      </Cart>
    </div>
  );
};
export default SearchPage;
