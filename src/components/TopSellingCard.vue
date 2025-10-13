<script setup>
const { card } = defineProps({ card: Object })
</script>

<template>
  <div class="top-selling-card u-card-border-gradient" style="--u-card-border-radius: 6rem">
    <img :src="card.imgPath" alt="" />
    <div class="card-info-wrapper">
      <p class="card-name">{{ card.name }}</p>
      <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <div class="card-footer">
        <p class="card-price">Rs. 359/-</p>
        <button class="cart-btn u-cart-btn-hover">
          <img src="/icons/cart-icon.svg" alt="" />
        </button>
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
      width: 2.5rem;
      height: 2.5rem;
    }
  }
}
</style>
