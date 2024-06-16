/* eslint-disable react/prop-types */
import classes from "./FoodItem.module.css"
import Input from "./Input";

const FoodItem = ({ id, name, description, price }) => {
    return (
        <li key={id} className={classes.list
        }>
            <div>
                <h3>{name}</h3>
                <div>{description}</div>
                <div className={classes.price}>${price.toFixed(2)}</div>
            </div>
            <Input></Input>
        </li>
    );
};

export default FoodItem;
