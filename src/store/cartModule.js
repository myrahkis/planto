const cartModule = {
  state: {
    cart: [],
    isOpened: false,
  },
  getters: {
    totalCartPrice(state) {
      return state.cart.reduce((acc, cur) => acc + cur.totalPrice, 0)
    },
  },
  mutations: {
    addItem(state, item) {
      const doesExist = state.cart.find((cartItem) => cartItem.id === item.id)

      if (doesExist) {
        doesExist.quantity++
        doesExist.totalPrice += doesExist.price
      } else {
        state.cart.push({ ...item, quantity: 1, totalPrice: item.price })
      }
    },
    deleteItem(state, id) {
      const item = state.cart.find((item) => item.id === id)

      if (item === undefined) return

      if (item.quantity > 1) {
        item.quantity--
        item.totalPrice -= item.price
      } else state.cart = state.cart.filter((item) => item.id !== id)
    },
    openCart(state) {
      state.isOpened = true
    },
    closeCart(state) {
      state.isOpened = false
    },
  },
  namespaced: true,
}

export default cartModule
