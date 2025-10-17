<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const { card } = defineProps({ card: Object })

const store = useStore()
const addItem = (item) => store.commit('cartStore/addItem', item)
const deleteItem = (id) => store.commit('cartStore/deleteItem', id)
const openCart = () => store.commit('cartStore/openCart')
const isAdded = computed(() => store.getters['cartStore/isInCart'](card.id))

function cartClickHandle() {
  if (isAdded.value) {
    openCart()
  } else {
    addItem(card)
  }
}
</script>

<template>
  <div class="top-selling-card u-card-border-gradient" style="--u-card-border-radius: 6rem">
    <img :src="card.imgPath" alt="" />
    <div class="card-info-wrapper">
      <p class="card-name">{{ card.name }}</p>
      <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <div class="card-footer">
        <p class="card-price">{{ card.currency }}{{ card.price }}</p>
        <div class="btns-wrapper">
          <button class="cart-btn u-cart-btn-hover" @click="cartClickHandle">
            <img src="/icons/cart-icon.svg" alt="" />
          </button>
          <div v-if="isAdded" class="quant-btns-wrapper">
            <button class="quant-btn" @click="deleteItem(card.id)">-</button>
            <span>{{ isAdded?.quantity }}</span>
            <button class="quant-btn" @click="addItem(card)">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-selling-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 4.5rem;
  gap: 3rem;

  img {
    margin-top: -28%;
  }
}
.card-info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.card-name,
.card-price {
  font-size: 3.8rem;
  font-weight: 400;
  color: var(--white-color);
}
.card-desc {
  font-size: 2.4rem;
  font-weight: 300;
}
.card-footer {
  display: flex;
  justify-content: space-between;
}

.btns-wrapper {
  display: inline-flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 1.3rem;
}
/* .quant-btns-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
} */
.cart-btn {
  display: flex;
  align-items: center;
  border: 1px solid var(--white-color);
  border-radius: 1rem;
  padding: 0.8rem;

  img {
    width: 2.5rem;
  }
}

@media (min-width: 1920px) {
  .top-selling-card {
    img {
      width: clamp(28rem, 30vw, 46rem);
      height: clamp(28rem, 30vw, 46rem);
    }
  }
  .cart-btn {
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
}
@media (min-width: 2560px) {
}
@media (min-width: 4000px) {
  .top-selling-card {
    padding: 6rem;
    img {
      width: clamp(35rem, 20vw, 70rem);
      height: clamp(35rem, 20vw, 70rem);
    }
  }
  .cart-btn {
    padding: 2rem 1.5rem;
    img {
      width: clamp(4rem, 2vw, 6rem);
      height: clamp(4rem, 2vw, 6rem);
    }
  }
  .card-name,
  .card-price {
    font-size: clamp(4.5rem, 2vw, 6rem);
    font-weight: 400;
  }
  .card-desc {
    font-size: clamp(3rem, 1.1vw, 4.5rem);
    font-weight: 300;
  }
}

@media (max-width: 1480px) {
  .top-selling-card {
    img {
      margin-top: -15%;
      width: clamp(13rem, 25vw, 35.75rem);
      height: clamp(13rem, 25vw, 35.7rem);
    }
  }
  .cart-btn {
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
}
@media (max-width: 1100px) {
  .card-name,
  .card-price {
    font-size: clamp(1.8rem, 2vw + 0.5rem, 3.8rem);
  }
  .card-desc {
    font-size: clamp(1.4rem, 1.2vw + 0.5rem, 2.4rem);
  }
}
@media (max-width: 762px) {
  .top-selling-card {
    img {
      margin-top: -23%;
      width: clamp(20rem, 5vw, 20.5rem);
      height: clamp(20rem, 5vw, 20rem);
    }
  }
  .cart-btn {
    img {
      width: clamp(1.5rem, 1vw + 1rem, 2.5rem);
      height: clamp(1.5rem, 1vw + 1rem, 2.5rem);
    }
  }
}
</style>
