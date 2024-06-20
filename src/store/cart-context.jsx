import React from "react"


const CartContext=React.createContext({
    item:[],
    totalAmount:0,
    // eslint-disable-next-line no-unused-vars
    addItem:(item)=>{},
    // eslint-disable-next-line no-unused-vars
    removeItem:(id)=>{},
    
})

export default CartContext