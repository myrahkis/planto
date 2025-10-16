const cartModule = {
  state: {
    cart: [],
    isOpened: false,
  },
  mutations: {
    addItem(state, item) {
      const doesExist = state.cart.find((cartItem) => cartItem.id === item.id)

      if (doesExist) {
        doesExist.quantity++
      } else {
        state.cart.push({ ...item, quantity: 1 })
      }
    },
    deleteItem(state, id) {
      const item = state.cart.find((item) => item.id === id)

      if (item === undefined) return

      if (item.quantity > 1) item.quantity--
      else state.cart = state.cart.filter((item) => item.id !== id)
    },
    openCart(state) {
      state.isOpened = !state.isOpened
    },
  },
  namespaced: true,
}

export default cartModule
