
import { useContext } from "react";
import classes from "./HeaderCart.module.css"
import { IoCartOutline } from "react-icons/io5";
import CartContext from "../../store/cart-context";

const HeaderCart = ({ onShowcart }) => {
  const contextApi=useContext(CartContext)
  let count=contextApi.item.reduce((currNum,i)=>{
    return currNum+i
  },0)
  return (
    <div>
      <button onClick={onShowcart}>

              <IoCartOutline />
              <span>Cart</span>
              <span className={classes.item}>{count}</span>
          </button>
      
    </div>
  )
}

export default HeaderCart
