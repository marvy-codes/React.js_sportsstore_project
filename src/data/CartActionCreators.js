import { ActionTypes} from "./Types";

export const addToCart = (product, quantity) => ({
    type: ActionTypes.CART_ADD,
    payload: {
        product, 
        quantity: quantity || 1
    }
});

export const updateCartQuantity = (product, quantity) => ({
    type: ActionTypes.CART_UPDATE,
    payload: { product, quantity }
})

export const removeFromCart = (product) => ({
    type: ActionTypes.CART_REMOVE,
    payload: product
})

export const clearCart = () => ({
    type: ActionTypes.CART_CLEAR
})

// payload property carries the data required to execute the action