import cartActionTypes from "./action-types"

const initialState = {
  products: JSON.parse(localStorage.getItem("cart"))?.products || [],
  totalPrice: JSON.parse(localStorage.getItem("cart"))?.totalPrice || 0,
}

const calculateTotalPrice = (products) => {
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  )
}

const cartReducer = (state = initialState, action) => {
  let updatedProducts = []

  switch (action.type) {
    case cartActionTypes.ADD_PRODUCTS:
      const productAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      )

      if (productAlreadyInCart) {
        updatedProducts = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      } else {
        updatedProducts = [
          ...state.products,
          { ...action.payload, quantity: 1 },
        ]
      }

      return {
        ...state,
        products: updatedProducts,
        totalPrice: calculateTotalPrice(updatedProducts),
      }

    case cartActionTypes.REMOVE_PRODUCTS:
      updatedProducts = state.products.filter(
        (product) => product.id !== action.payload
      )

      return {
        ...state,
        products: updatedProducts,
        totalPrice: calculateTotalPrice(updatedProducts),
      }

    case cartActionTypes.INCREASE_PRODUCT_QUANTITY:
      updatedProducts = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )

      return {
        ...state,
        products: updatedProducts,
        totalPrice: calculateTotalPrice(updatedProducts),
      }

    case cartActionTypes.DECREASE_PRODUCT_QUANTITY:
      updatedProducts = state.products
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)

      return {
        ...state,
        products: updatedProducts,
        totalPrice: calculateTotalPrice(updatedProducts),
      }

    default:
      return state
  }
}

export default cartReducer
