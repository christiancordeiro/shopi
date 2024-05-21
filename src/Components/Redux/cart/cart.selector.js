export const selectProductsCount = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  )
}

export const selectProductsTotalPrice = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  )
}

export const persistCart = (store) => (next) => (action) => {
  const result = next(action)
  const state = store.getState()
  localStorage.setItem("cart", JSON.stringify(state.cartReducer))
  return result
}
