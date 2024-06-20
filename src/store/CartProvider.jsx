/* eslint-disable react/prop-types */
import CartContext from "./cart-context";
import { useReducer } from "react";

const reducerFunction = (state, action) => {
    if (action.type === 'ADD') {
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
        let updatedItems;

        if (existingItemIndex >= 0) {
            const updatedItem = {
                ...state.items[existingItemIndex],
                amount: state.items[existingItemIndex].amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems = [...state.items, action.item];
        }

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        };
    }

    if (action.type === 'REMOVE') {
        
        const existingItemIndex = state.items.findIndex(item => item.id === action.id);
        
        
        const existingItem = state.items[existingItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return state;
};

const defaultState = {
    items: [],
    totalAmount: 0
};

const CartProvider = (props) => {
    const [cartState, dispatch] = useReducer(reducerFunction, defaultState);

    const addItemToCartHandler = (item) => {
        dispatch({ type: "ADD", item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatch({ type: "REMOVE", id: id });
    };

    const value = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
