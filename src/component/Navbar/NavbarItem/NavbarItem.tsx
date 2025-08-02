import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
type props = {
  icon: IconDefinition;
  text: string;
};
const NavbarItem = function (props: props) {
  return (
    <div>
      <FontAwesomeIcon icon={props.icon} />
      <span>{props.text}</span>
    </div>
  );
};

export default NavbarItem;
