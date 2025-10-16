<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const cart = computed(() => store.state.cartStore.cart)
const totalCartPrice = computed(() => store.getters['cartStore/totalCartPrice'])

const deleteItem = (value) => store.commit('cartStore/deleteItem', value)
const addItem = (value) => store.commit('cartStore/addItem', value)
const closeCart = () => store.commit('cartStore/closeCart')
</script>

<template>
  <div class="cart-wrapper">
    <button class="close-btn" @click="closeCart">x</button>
    <div>
      <h3>Cart</h3>
      <ul class="cart-list">
        <li v-for="item in cart" :key="item.id">
          <div class="cart-row">
            <img :src="item.imgPath" alt="" :style="{ width: '3.4rem' }" />
            <span>
              {{ item.name }}
            </span>
            <span class="item-price">{{ item.currency }}{{ item?.totalPrice }}</span>
            <div class="btns-wrapper">
              <button class="quantBtn" @click="deleteItem(item.id)">-</button>
              <p>{{ item.quantity }}</p>
              <button class="quantBtn" @click="addItem(item)">+</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="cart-footer">
      <span class="total-price">${{ totalCartPrice }}</span>
      <button>Check out</button>
    </div>
  </div>
</template>

<style scoped>
.cart-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  /* bottom: 0; */
  z-index: 8000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  height: 100vh;
  width: 45rem;
  background-color: rgba(38, 46, 33, 0.8);
  backdrop-filter: blur(28px);
  color: var(--text-color);
  box-shadow: -1rem 0rem 2.5rem rgb(16, 16, 16, 0.6);
}
.cart-list {
  list-style: inside decimal;
  margin-top: 3rem;
}

.cart-list li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.cart-row {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 0.5rem;
}
.item-price {
  color: #9ec84b;
}

.btns-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.3rem 0.5rem;
  border-radius: 1rem;
}
.close-btn {
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-size: 2.3rem;
}
.quantBtn {
  font-size: 1.5rem;
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;

  &:hover {
    background-color: #33392f;
  }
}

.cart-footer {
  display: flex;
  justify-content: space-between;
}
.total-price {
  font-size: 2rem;
}
</style>
