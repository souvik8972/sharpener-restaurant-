/* eslint-disable react/prop-types */
import CartContext from "./cart-context"

const CartProvider = (props) => {
    const addItemToCartHandler=(item)=>{}
    const removeItemFromCartHandler=(id)=>{}
    const value={
        item:[],
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={value}>
            {props.children}

        </CartContext.Provider>
    )
}

export default CartProvider
