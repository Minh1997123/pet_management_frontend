import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import style from "./NavbarItem.module.css";
type props = {
  icon: IconDefinition;
  text: string;
};
const NavbarItem = function (props: props) {
  return (
    <div className={style.navbar__item}>
      <FontAwesomeIcon icon={props.icon} />
      <span>{props.text}</span>
    </div>
  );
};

export default NavbarItem;
