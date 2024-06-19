// import React from 'react'
import Modal from "../UI/Modal";
import classes from "./Cart.module.css"
const Cart = () => {
    const cartitems = (
        <ul className={classes["cart-items"]}>
            {[{ id: "11", name: "sushi", amount: 13, price: 122.55 }].map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );

    return (
        <Modal>
            {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>34.55</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]}> Close</button>
                <button className={classes.button}> Order</button>

            </div>




        </Modal>
    )
}

export default Cart
