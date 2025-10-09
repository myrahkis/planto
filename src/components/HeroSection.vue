<script setup>
import { onMounted } from 'vue'
import HeadingCorners from './HeadingCorners.vue'
import { animate, onScroll } from 'animejs'

onMounted(() => {
  animate('.trendy-cards', {
    opacity: { from: 0.5 },
    translateX: { from: '10rem' },
    duration: 1000,
  })

  animate('.hero-feedback', {
    opacity: { from: 0.5 },
    translateX: { from: '-10rem' },
    duration: 1000,
  })
})
</script>

<template>
  <section class="hero-section">
    <div class="hero-info-block">
      <h1>Breath Natureal</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
        incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="info-btns-wrapper">
        <button class="explore-btn">Explore</button>
        <button class="play-btn">
          <img class="play-icon" src="/src/assets/icons/play-icon.svg" alt="" />
          <span>Live Demo...</span>
        </button>
      </div>
    </div>
    <div class="trendy-cards u-card-border-gradient" style="--u-card-border-radius: 6rem">
      <img src="/src/assets/images/small-plants/sm-plant-6.png" alt="" />
      <div class="trendy-cards-info-wrapper">
        <p class="trendy-heading">Trendy House Plant</p>
        <p class="trendy-plant-name">Calathea plant</p>
        <button class="explore-btn">Buy Now</button>
        <span>_ ..</span>
      </div>
    </div>
    <div class="hero-feedback u-card-border-gradient">
      <div class="feedback-header">
        <img src="/src/assets/images/avas/ava-2.png" alt="" />
        <div class="feedback-header-info">
          <p>Alena Patel</p>
          <span
            ><img v-for="star in 5" :key="star" src="/src/assets/icons/star-icon.svg" alt=""
          /></span>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
      </p>
    </div>
    <div class="hero-heading-corners">
      <HeadingCorners headingText="Our Top Sellings" />
    </div>
    <div class="plants-wrapper">
      <div
        class="plants-cart-info cart--1 u-card-border-gradient"
        style="--u-card-border-radius: 12rem"
      >
        <img src="/src/assets/images/medium-plants/m-plant-1.png" alt="" />
        <div class="plants-cart-info-wrapper">
          <h3>For Small Decs Ai Plat</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </p>
          <p class="plants-cart-price">Rs. 599/-</p>
          <div class="plants-cart-btns">
            <button class="explore-btn">Explore</button>
            <button class="plants-cart-btn u-cart-btn-hover">
              <img src="/src/assets/icons/cart-icon.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div
        class="plants-cart-info cart--2 u-card-border-gradient"
        style="--u-card-border-radius: 12rem"
      >
        <img src="/src/assets/images/medium-plants/m-plant-2.png" alt="" />
        <div class="plants-cart-info-wrapper">
          <h3>For Fresh Decs Ai Plat</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </p>
          <p class="plants-cart-price">Rs. 579/-</p>
          <div class="plants-cart-btns">
            <button class="explore-btn">Explore</button>
            <button class="plants-cart-btn u-cart-btn-hover">
              <img src="/src/assets/icons/cart-icon.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  background: url('/src/assets/images/hero-bg.jpg');
  aspect-ratio: 1080 / 1620;
  background-size: 100%;
  padding-top: 20rem;
}

.hero-info-block {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  width: fit-content;

  p {
    font-size: 2.1rem;
  }
}

.info-btns-wrapper {
  display: flex;
  gap: 2.5rem;
}
.play-btn {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  border-radius: 2.5rem;
  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  transition: all 0.2s;

  span {
    font-size: 1.5rem;
    margin-right: 1.5rem;
  }

  &:hover {
    background-color: #50790b;
    border-top: 1px solid var(--text-color);
    border-right: 1px solid var(--text-color);
    border-bottom: 1px solid var(--text-color);
  }
}
.play-icon {
  width: 4.5rem;
}

.trendy-cards {
  position: absolute;
  top: 20rem;
  right: var(--horiz-section-padding);
  width: fit-content;
  padding: 3rem 2rem;

  img {
    margin-top: -27%;
    margin-bottom: 2rem;
    /* width: 28rem; */
  }
}
.trendy-cards-info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 3rem;
}
.trendy-heading {
  font-size: 2.2rem;
  font-weight: 300;
}
.trendy-plant-name {
  font-size: 3.8rem;
  font-weight: 400;
}

.hero-feedback {
  position: absolute;
  top: 30%;
  left: var(--horiz-section-padding);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  width: 43rem;
}
.feedback-header {
  display: flex;
  align-items: center;
  gap: 3rem;
}
.feedback-header-info {
  p {
    font-size: 2.2rem;
    font-weight: 400;
  }
  span {
    display: inline-flex;
    gap: 0.7rem;
  }
}

.hero-heading-corners {
  position: absolute;
  top: 44%;
  left: 50%;
  transform: translate(-44%, -50%);
}

.plants-wrapper {
  position: absolute;
  left: var(--horiz-section-padding);
  right: var(--horiz-section-padding);
  bottom: 8rem;
  /* padding-top: 47%; */
  left: var(--horiz-section-padding);
  display: flex;
  flex-direction: column;
  gap: 8rem;
  width: auto;
}
.plants-cart-info {
  display: flex;
  padding: 4rem 3rem;
  justify-content: space-between;
  gap: 20rem;

  img {
    margin-top: -7%;
  }
}
.plants-cart-info-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  /* color: var(--white-color); */
  p {
    font-size: 2rem;
  }
}
.plants-cart-price {
  font-size: 3.5rem !important;
  font-weight: 600;
  color: var(--white-color);
}
.plants-cart-btns {
  display: flex;
  gap: 2rem;
}
.plants-cart-btn {
  padding: 0.8rem;
  width: fit-content;
  border: 2px solid var(--text-color);
  border-radius: 1rem;

  img {
    width: 2.5rem;
  }
}
</style>
