import { Outlet } from "react-router";
import NavbarItem from "./NavbarItem/NavbarItem";
import styles from "./Navbar.module.css";
import { useState } from "react";
type typeNavBarItems = {
  iconClass: string;
  text: string;
  to: string;
}[];

const navBarItems: typeNavBarItems = [
  {
    iconClass: "bi bi-house",
    text: "Home",
    to: "/",
  },
  {
    iconClass: "bi bi-pencil-square",
    text: "Edit",
    to: "/edit",
  },
  {
    iconClass: "bi bi-search",
    text: "Search",
    to: "/search",
  },
  {
    iconClass: "bi bi-list-ul",
    text: "Breed",
    to: "/breed",
  },
];

const Navbar = function () {
  const [active, setActive] = useState(true);
  const activeHandler = function (event: React.MouseEvent<HTMLElement>) {
    const targetElement = event.target as Element;
    if (!targetElement.closest(".list")) {
      setActive((pre) => !pre);
    }
  };
  return (
    <div className={styles.sidebar}>
      <nav className={`${active ? styles.active : ""}`} onClick={activeHandler}>
        <header className={styles.header}>
          {active ? (
            <strong>
              <i className="bi bi-list"></i>
            </strong>
          ) : (
            <h3>
              <i className="bi bi-envelope-paper-heart-fill"></i>
              <span>Pet App</span>
            </h3>
          )}
        </header>
        <ul className="list">
          {navBarItems.map((item) => {
            return (
              <NavbarItem
                key={item.text}
                iconClass={item.iconClass}
                text={item.text}
                to={item.to}
              ></NavbarItem>
            );
          })}
        </ul>
      </nav>
      <div className={styles.content}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Navbar;
