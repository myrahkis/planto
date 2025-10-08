<script setup>
import { computed, ref } from 'vue'
import CarouselCard from './CarouselCard.vue'
import HeadingCorners from './HeadingCorners.vue'

const bestO2Plants = [
  {
    imgPath: '/src/assets/images/big-plants/l-plant-1.png',
    heading: 'We Have Small And Best O2 Plants Collection’s',
    p1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quia tempora veniam expedita sunt inventore, corrupti voluptates beatae aliquid voluptas architecto numquam necessitatibus quasi? Similique laborum necessitatibus amet repellat saepe.',
    p2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quia tempora veniam expedita sunt inventore, corrupti voluptates beatae aliquid voluptas architecto numquam necessitatibus quasi? Similique laborum necessitatibus amet repellat saepe.',
  },
  {
    imgPath: '/src/assets/images/big-plants/l-plant-2.png',
    heading: 'Lorem ipsum dolor sit amet, adipisicing elit',
    p1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quia tempora veniam expedita sunt inventore, corrupti voluptates beatae aliquid voluptas architecto numquam necessitatibus quasi? Similique laborum necessitatibus amet repellat saepe.',
    p2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quia tempora veniam expedita sunt inventore, corrupti voluptates beatae aliquid voluptas architecto numquam necessitatibus quasi? Similique laborum necessitatibus amet repellat saepe.',
  },
]

const curIdx = ref(0)

const visibleCard = computed(() => {
  return bestO2Plants[curIdx.value]
})

function nextCardHandle() {
  curIdx.value = (curIdx.value + 1) % bestO2Plants.length
}
function prevCardHandle() {
  curIdx.value = (curIdx.value - 1 + bestO2Plants.length) % bestO2Plants.length
}
</script>

<template>
  <section class="best-o2-section">
    <div class="heading-corners">
      <HeadingCorners headingText="Our Best o2" />
    </div>
    <div class="carousel">
      <CarouselCard
        :card="visibleCard"
        :key="curIdx"
        :curIdx="curIdx + 1"
        :cardsLength="bestO2Plants.length"
        :transitionName="transitionName"
        @prev="prevCardHandle"
        @next="nextCardHandle"
      />
    </div>
  </section>
</template>

<style scoped>
.best-o2-section {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.carousel {
  margin-top: var(--vert-section-padding);
}
</style>
