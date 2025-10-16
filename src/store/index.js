import { createStore } from 'vuex'
import cartModule from './cartModule'

const store = createStore({
  modules: {
    cartStore: cartModule,
  },
})

export default store
