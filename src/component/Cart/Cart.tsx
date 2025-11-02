import { ReactNode } from "react";
import style from "./Cart.module.css";
type typeProps = {
  title: string;
  children: ReactNode;
};
const Cart = function (props: typeProps) {
  return (
    <div className={style.cart}>
      <header className={`shadow-sm  bg-white rounded ${style.title}`}>
        <h3>{props.title}</h3>
      </header>
      <main className={style.container}>{props.children}</main>
    </div>
  );
};
export default Cart;
