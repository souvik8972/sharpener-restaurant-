/* eslint-disable react/prop-types */
import { useContext } from "react";
import classes from "./FoodItem.module.css"
import Input from "./Input";
import CartContext from "../../store/cart-context";


const FoodItem = ({ id, name, description, price }) => {
    const cartCtx=useContext(CartContext)

    const onAddCartHandler=(amount)=>{
        cartCtx.addItem({
            id,
            name,
            price,
            amount
        })
    }
    return (
        <li key={id} className={classes.list
        }>
            <div>
                <h3>{name}</h3>
                <div>{description}</div>
                <div className={classes.price}>${price.toFixed(2)}</div>
            </div>
            <Input onAddCart={onAddCartHandler}></Input>
        </li>
    );
};

export default FoodItem;
