import { Outlet } from "react-router";
import NavbarItem from "./NavbarItem/NavbarItem";
import styles from "./Navbar.module.css";
import {
  faFile,
  faHouse,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

type typeNavBarItems = {
  icon: IconDefinition;
  text: string;
}[];

const navBarItems: typeNavBarItems = [
  {
    icon: faHouse,
    text: "Home",
  },
  {
    icon: faFile,
    text: "About",
  },
];
const Navbar = function () {
  return (
    <div className={styles.navbar}>
      <div>
        {navBarItems.map((item) => {
          return <NavbarItem icon={item.icon} text={item.text}></NavbarItem>;
        })}
      </div>
      <Outlet></Outlet>
    </div>
  );
};
export default Navbar;
