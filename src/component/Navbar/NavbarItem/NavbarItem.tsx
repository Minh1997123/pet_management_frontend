import style from "./NavbarItem.module.css";
import { NavLink } from "react-router";
type props = {
  iconClass: string;
  text: string;
  to: string;
};
const NavbarItem = function (props: props) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      <li className={style.navbar__item}>
        <i className={props.iconClass}></i>
        <span>{props.text}</span>
      </li>
    </NavLink>
  );
};

export default NavbarItem;
