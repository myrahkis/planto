<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const cart = computed(() => store.state.cartStore.cart)
const deleteItem = (value) => store.commit('cartStore/deleteItem', value)
const addItem = (value) => store.commit('cartStore/addItem', value)
</script>

<template>
  <div class="cart-wrapper">
    <ul class="cart-list">
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} {{ item.quantity !== 1 ? `/ ${item.quantity}` : '' }}
        <button @click="deleteItem(item.id)">delete</button>
        <button @click="addItem(item)">add</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.cart-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  /* bottom: 0; */
  z-index: 8000;
  padding: 2rem;
  height: 100vh;
  width: 45rem;
  background-color: darkseagreen;
  color: var(--bg-color);
  box-shadow: -1rem 0rem 2rem rgba(24, 24, 24, 1);
}
</style>
