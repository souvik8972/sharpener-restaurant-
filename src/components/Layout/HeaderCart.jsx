
import classes from "./HeaderCart.module.css"
import { IoCartOutline } from "react-icons/io5";

const HeaderCart = () => {
  return (
    <div>
          <button>

              <IoCartOutline />
              <span>Cart</span>
              <span className={classes.item}>0</span>
          </button>
      
    </div>
  )
}

export default HeaderCart
