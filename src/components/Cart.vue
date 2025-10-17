<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const cart = computed(() => store.state.cartStore.cart)
const totalCartPrice = computed(() => store.getters['cartStore/totalCartPrice'])
const itemsAmount = computed(() => store.getters['cartStore/amountOfItems'])

const deleteItem = (id) => store.commit('cartStore/deleteItem', id)
const addItem = (item) => store.commit('cartStore/addItem', item)
const closeCart = () => store.commit('cartStore/closeCart')
const clearCart = () => store.commit('cartStore/clearCart')
</script>

<template>
  <div class="cart-wrapper">
    <button class="close-btn" @click="closeCart">x</button>
    <div>
      <p class="cart-heading">
        Cart<span>{{ itemsAmount > 0 ? itemsAmount : '' }}</span>
      </p>
      <ul class="cart-list">
        <li v-for="item in cart" :key="item.id">
          <div class="cart-row">
            <img :src="item.imgPath" alt="" :style="{ width: '3.4rem' }" />
            <span>
              {{ item.name }}
            </span>
            <span class="item-price">{{ item.currency }}{{ item?.totalPrice }}</span>
            <div class="quant-btns-wrapper">
              <button class="quant-btn" @click="deleteItem(item.id)">-</button>
              <p>{{ item.quantity }}</p>
              <button class="quant-btn" @click="addItem(item)">+</button>
            </div>
          </div>
        </li>
      </ul>
      <button v-if="cart.length > 0" class="clear-btn" @click="clearCart">Clear</button>
    </div>
    <div class="cart-footer">
      <span class="total-price">${{ totalCartPrice }}</span>
      <button class="checkout-btn">Check out</button>
    </div>
  </div>
</template>

<style scoped>
.cart-wrapper {
  position: fixed;
  top: 0;
  right: 0;
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
.cart-heading {
  position: relative;
  width: fit-content;
  font-size: clamp(2rem, 2.5vw, 3.8rem);
  font-weight: 600;
  color: var(--white-color);
  line-height: 1.18;

  span {
    position: absolute;
    top: -0.2em;
    right: -1.3em;
    font-size: 0.5em;
  }
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

.close-btn {
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-size: 2.3rem;
}
.clear-btn {
  float: right;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  padding: 0.3rem 0.6rem;
  color: rgba(255, 255, 255, 0.25);
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  transition: all 0.1s;

  &:hover {
    border-bottom: 1px solid #9ec84b;
    color: var(--white-color);
  }
}

.cart-footer {
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #9ec84b;
  padding-top: 1rem;
}
.total-price {
  font-size: 1.8rem;
  line-height: 1;
  padding: 1rem 1.3rem;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 1rem;
}
.checkout-btn {
  background-color: #9ec84b;
  color: var(--bg-color);
  padding: 1rem 1.3rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  /* height: fit-content; */
  transition: all 0.2s;

  &:hover {
    background-color: #8fb544;
  }
}

@media (max-width: 762px) {
  .cart-wrapper {
    position: fixed;
    bottom: 0;
    top: auto;
    height: 50rem;
    width: 100%;
    border-top-left-radius: 4rem;
    border-top-right-radius: 4rem;
    box-shadow: 0 -1rem 2.5rem rgb(16, 16, 16, 0.6);
  }
  .cart-list {
    margin-top: 1.5rem;
  }
}
</style>
