<script setup>
import HeadingCorners from './HeadingCorners.vue'
import TopSellingCard from './TopSellingCard.vue'

const plantsData = [
  { imgPath: '/src/assets/images/small-plants/sm-plant-6.png', name: 'Aglaonema' },
  { imgPath: '/src/assets/images/small-plants/sm-plant-2.png', name: 'Peperomia obtusifolia' },
  { imgPath: '/src/assets/images/small-plants/sm-plant-4.png', name: 'Cactus' },
  { imgPath: '/src/assets/images/small-plants/sm-plant-1.png', name: 'Monstera deliciosa' },
  { imgPath: '/src/assets/images/small-plants/sm-plant-3.png', name: 'Dracaena fragrans' },
  { imgPath: '/src/assets/images/small-plants/sm-plant-5.png', name: 'Sansevieria' },
]
</script>

<template>
  <section class="top-selling-section">
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
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.heading-corners {
  position: relative;
  width: fit-content;
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
</style>
