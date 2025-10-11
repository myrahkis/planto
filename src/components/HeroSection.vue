<script setup>
import { onMounted } from 'vue'
import { animate, onScroll } from 'animejs'
import HeadingCorners from './HeadingCorners.vue'

onMounted(() => {
  animate('.hero-heading', {
    '--pos': ['0%', '100%'],
    easing: 'linear',
    duration: 2400,
    loop: true,
    alternate: true,
  })
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

  animate('.cart--1', {
    opacity: { from: 0.5 },
    x: { from: '10rem', to: 0 },
    duration: 1000,
    easing: 'easeOutCubic',
    autoplay: onScroll({
      container: document.body,
      target: '.cart--1',
      enter: 'bottom top',
      leave: 'top bottom',
      // debug: true,
    }),
  })
  animate('.cart--2', {
    opacity: { from: 0.5 },
    x: { from: '-10rem', to: 0 },
    duration: 1000,
    easing: 'easeOutCubic',
    autoplay: onScroll({
      container: document.body,
      target: '.cart--2',
      enter: 'bottom top',
      leave: 'top bottom',
      // debug: true,
    }),
  })
})
</script>

<template>
  <section class="hero-section">
    <div class="hero-info-block">
      <h1 class="hero-heading">Breath Natureal</h1>
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
      </div>
    </div>
    <div class="hero-feedback u-card-border-gradient">
      <div class="feedback-header">
        <img class="ava-img" src="/src/assets/images/avas/ava-2.png" alt="" />
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
  padding-top: clamp(8rem, 17vw, 20rem);
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

.hero-heading {
  display: inline-block;
  background: linear-gradient(90deg, #95bf40 0%, #a1e87d 40%, #d6f5e0 60%, #95bf40 100%);
  background-size: 200% 100%;
  background-position: 0% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  --pos: 0%;
  background-position: var(--pos) 50%;
}
.hero-heading::selection,
.hero-heading::-moz-selection {
  color: var(--bg-color);
  -webkit-text-fill-color: var(--bg-color);
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
  top: clamp(8rem, 17vw, 20rem);
  right: var(--horiz-section-padding);
  width: fit-content;
  padding: 3rem 2rem;

  img {
    margin-top: -27%;
    margin-bottom: 2rem;
    width: 100%;
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
  gap: clamp(2rem, 10vw, 20rem);

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

@media (max-width: 1250px) {
  .hero-section {
    padding-top: clamp(8rem, 17vw, 20rem);
  }

  .hero-info-block {
    p {
      font-size: clamp(1rem, 1.2vw, 2.1rem);
    }
  }

  .play-btn {
    span {
      font-size: clamp(1rem, 0.5vw + 0.8rem, 1.5rem);
    }
  }
  .play-icon {
    width: clamp(2rem, 4vw, 4.5rem);
  }

  .trendy-cards {
    top: clamp(8rem, 17vw, 20rem);
    img {
      margin-top: -37%;
      width: clamp(18rem, 20vw, 35rem);
    }
  }
  .trendy-cards-info-wrapper {
    padding: 0 clamp(1rem, 1.5vw, 3rem);
  }
  .trendy-heading {
    font-size: clamp(1rem, 1.2vw, 2.2rem);
  }
  .trendy-plant-name {
    font-size: clamp(1.8rem, 2vw, 3.8rem);
  }

  .hero-feedback {
    padding: clamp(1rem, 3vw, 3rem);
    gap: clamp(0.8rem, 1.8vw, 2rem);
    width: clamp(20rem, 35vw, 43rem);

    p {
      font-size: clamp(1rem, 0.5vw, 1.5rem);
    }
  }
  .feedback-header {
    gap: clamp(1rem, 3vw, 3rem);
  }
  .ava-img {
    width: clamp(4rem, 5vw, 7.1rem);
  }
  .feedback-header-info {
    p {
      font-size: clamp(1.2rem, 1.5vw, 2.2rem);
    }
    span {
      gap: clamp(0.3rem, 0.5vw, 0.7rem);

      img {
        width: clamp(0.8rem, 1.5vw, 1.5rem);
      }
    }
  }

  .hero-heading-corners {
    top: 48%;
    transform: translate(-44%, -48%);
  }

  .plants-wrapper {
    bottom: clamp(3rem, 6vw, 8rem);
    gap: clamp(3rem, 6vw, 8rem);
  }
  .plants-cart-info {
    padding: clamp(1.5rem, 3vw, 4rem) clamp(1rem, 3vw, 3rem);

    img {
      margin-top: -9%;
      width: clamp(22rem, 25vw, 50rem);
    }
  }
  .plants-cart-info-wrapper {
    p {
      font-size: clamp(1rem, 1.2vw, 2rem);
    }
  }
  .plants-cart-price {
    font-size: clamp(1.8rem, 2.5vw, 3.5rem) !important;
  }
  .plants-cart-btn {
    img {
      width: clamp(1.2rem, 2vw, 2.5rem);
    }
  }
}

@media (max-width: 762px) {
  .hero-section {
    display: grid;
    height: fit-content;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1.2fr auto;
    padding-top: clamp(13rem, 17vw, 20rem);
    background-repeat: no-repeat;
    row-gap: 2rem;
    column-gap: 1rem;
  }
  .hero-info-block {
    grid-column: 1 / 1;
    grid-row: 1;
  }
  .trendy-cards {
    position: relative;
    top: 0;
    right: 0;
    grid-column: 2 / -1;
    grid-row: 1;
    padding: clamp(1.5rem, 3vw, 3rem) clamp(1.5rem, 2vw, 2rem);
    margin-left: auto;

    img {
      margin-top: -37%;
      width: clamp(10rem, 15vw, 18rem);
    }
  }
  .trendy-cards.u-card-border-gradient {
    --u-card-border-radius: 3rem !important;
  }
  .trendy-cards-info-wrapper {
    padding: 0 clamp(0.8rem, 1.5vw, 2rem);
  }
  .trendy-heading {
    font-size: clamp(0.9rem, 1.2vw, 1.6rem);
  }
  .trendy-plant-name {
    font-size: clamp(1.3rem, 1.8vw, 2.8rem);
  }

  .hero-feedback {
    position: relative;
    top: 0;
    left: 0;
    grid-column: 1 / 1;
    grid-row: 2;
  }
  .hero-heading-corners {
    position: relative;
    top: 0;
    left: 0;
    transform: translate(0);
    display: flex;
    margin: 2rem auto;
    margin-top: 4rem;
    width: fit-content;
    grid-column: 1 / -1;
    grid-row: 3;
  }

  .plants-wrapper {
    position: relative;
    bottom: 0;
    right: 0;
    left: 0;
    grid-column: 1 / -1;
    grid-row: 4 / -1;
  }
  .plants-cart-info.cart--1.u-card-border-gradient,
  .plants-cart-info.cart--2.u-card-border-gradient {
    --u-card-border-radius: 4rem !important;
  }
  .plants-cart-info {
    flex-direction: column;
    align-items: center;
    gap: clamp(1.5rem, 4vw, 5rem);
    padding: clamp(2rem, 3vw, 4rem) clamp(3rem, 3vw, 3rem);

    img {
      margin-top: -9%;
      width: clamp(18rem, 15vw, 22rem);
      height: 18rem;
    }
  }
  .plants-cart-info-wrapper {
    gap: 1rem;
  }

  .plants-cart-btn {
    height: fit-content !important;

    img {
      width: clamp(1.2rem, 2vw, 2.5rem);
      height: clamp(1.2rem, 2vw, 2.5rem);
    }
  }
}
</style>
