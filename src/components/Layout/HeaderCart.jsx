/* eslint-disable react/prop-types */
import { useContext } from "react";
import classes from "./HeaderCart.module.css";
import { IoCartOutline } from "react-icons/io5";
import CartContext from "../../store/cart-context";

const HeaderCart = ({ onShowcart }) => {
  const contextApi = useContext(CartContext);
  const count = contextApi.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  return (
    <div>
      <button onClick={onShowcart} className={classes.button}>
        <IoCartOutline />
        <span>Cart</span>
        <span className={classes.item}>{count}</span>
      </button>
    </div>
  );
};

export default HeaderCart;
