<script setup>
import { onMounted } from 'vue'
import HeadingCorners from './HeadingCorners.vue'
import TopSellingCard from './TopSellingCard.vue'
import { animate, onScroll, stagger } from 'animejs'
import { setIdFromName } from '@/helpers/helpers'

const plantsData = [
  {
    id: setIdFromName('Calatheas'),
    price: 149,
    currency: '$',
    imgPath: 'images/small-plants/sm-plant-6.webp',
    name: 'Calatheas',
  },
  {
    id: setIdFromName('Peperomia obtusifolia'),
    price: 129,
    currency: '$',
    imgPath: 'images/small-plants/sm-plant-2.webp',
    name: 'Peperomia obtusifolia',
  },
  {
    id: setIdFromName('Cactus'),
    price: 100,
    currency: '$',
    imgPath: 'images/small-plants/sm-plant-4.webp',
    name: 'Cactus',
  },
  {
    id: setIdFromName('Monstera deliciosa'),
    price: 99,
    currency: '$',
    imgPath: 'images/small-plants/sm-plant-1.webp',
    name: 'Monstera deliciosa',
  },
  {
    id: setIdFromName('Dracaena fragrans'),
    price: 139,
    currency: '$',
    imgPath: 'images/small-plants/sm-plant-3.webp',
    name: 'Dracaena fragrans',
  },
  {
    id: setIdFromName('Sansevieria'),
    price: 159,
    currency: '$',
    imgPath: 'images/small-plants/sm-plant-5.webp',
    name: 'Sansevieria',
  },
]

// console.log(plantsData)

onMounted(() => {
  const cards = document.querySelectorAll('.plants-cards-grid > *')

  if (!cards.length) return

  animate(cards, {
    opacity: { from: 0.5 },
    x: { from: '15rem', to: 0 },
    duration: 1000,
    delay: stagger(130),
    easing: 'easeOutCubic',
    autoplay: onScroll({
      container: document.body,
      target: '.top-selling-section',
      enter: 'bottom top',
      leave: 'top bottom',
      // debug: true,
    }),
  })
})
</script>

<template>
  <section class="top-selling-section" ref="root" id="top-selling-section">
    <div class="heading-corners">
      <HeadingCorners headingText="Our Top Selling"></HeadingCorners>
    </div>
    <div class="plants-cards-grid">
      <TopSellingCard v-for="(card, index) in plantsData" :key="index" :card="card" />
    </div>
  </section>
</template>

<style scoped>
.top-selling-section {
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.plants-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  column-gap: 3rem;
  row-gap: 12rem;
  width: 100%;
  margin-top: calc(var(--vert-section-padding) + 4rem);
}

@media (min-width: 4000px) {
  .plants-cards-grid {
    column-gap: 5rem;
    row-gap: 20rem;
    margin-top: calc(var(--vert-section-padding) + 8rem);
  }
}

@media (max-width: 1480px) {
  .plants-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: clamp(5rem, 5vw + 1rem, 12rem);
  }
}

@media (max-width: 762px) {
  .plants-cards-grid {
    display: flex;
    flex-direction: column;
    margin-top: calc(var(--vert-section-padding) + 2rem);
    width: fit-content;
  }
}
@media (max-width: 560px) {
  .plants-cards-grid {
    margin-top: var(--vert-section-padding);
  }
}
</style>
