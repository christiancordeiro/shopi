import cartActionTypes from "./action-types"

export const addProductsToCart = (payload) => ({
  type: cartActionTypes.ADD_PRODUCTS,
  payload,
})

export const removeProductsFromCart = (payload) => ({
  type: cartActionTypes.REMOVE_PRODUCTS,
  payload,
})

export const increaseProductQuantity = (payload) => ({
  type: cartActionTypes.INCREASE_PRODUCT_QUANTITY,
  payload,
})

export const decreaseProductQuantity = (payload) => ({
  type: cartActionTypes.DECREASE_PRODUCT_QUANTITY,
  payload,
})
