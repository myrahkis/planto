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
  {
    imgPath: '/src/assets/images/big-plants/l-plant-1.png',
    heading: 'Maxime aspernatur debitis dolore incidunt!',
    p1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quia tempora veniam expedita sunt inventore, corrupti voluptates beatae aliquid voluptas architecto numquam necessitatibus quasi? Similique laborum necessitatibus amet repellat saepe.',
    p2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quia tempora veniam expedita sunt inventore, corrupti voluptates beatae aliquid voluptas architecto numquam necessitatibus quasi? Similique laborum necessitatibus amet repellat saepe.',
  },
]

const curIdx = ref(0)
const direction = ref('next')

const visibleCard = computed(() => {
  return bestO2Plants[curIdx.value]
})

function nextCardHandle() {
  direction.value = 'next'
  curIdx.value = (curIdx.value + 1) % bestO2Plants.length
}
function prevCardHandle() {
  direction.value = 'prev'
  curIdx.value = (curIdx.value - 1 + bestO2Plants.length) % bestO2Plants.length
}
</script>

<template>
  <section class="best-o2-section">
    <div class="heading-corners">
      <HeadingCorners headingText="Our Best o2" />
    </div>
    <div class="carousel">
      <transition :name="direction" mode="out-in">
        <CarouselCard
          :card="visibleCard"
          :key="curIdx"
          :curIdx="curIdx"
          :cardsLength="bestO2Plants.length"
          :transitionName="transitionName"
          @prev="prevCardHandle"
          @next="nextCardHandle"
        />
      </transition>
      <div class="dots" aria-hidden="false">
        <span
          v-for="n in bestO2Plants.length"
          :key="n"
          :class="['dot', { active: n - 1 === curIdx }]"
        />
      </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: var(--vert-section-padding);
}

.dots {
  display: flex;
  gap: 0.5rem;
  width: fit-content;
}
.dot {
  display: inline-block;
  width: 7px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  transition: all 220ms ease;
  transform-origin: center;
  opacity: 0.8;
}
.dot.active {
  width: 18px;
  height: 6px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.95);
  opacity: 1;
}

.next-enter-active,
.next-leave-active,
.prev-enter-active,
.prev-leave-active {
  transition: transform 0.4s ease-in;
  will-change: transform;
}
.next-enter-from {
  transform: translateX(30px) scale(0.99);
}
.next-enter-to {
  transform: translateX(0) scale(1);
}
.next-leave-from {
  transform: translateX(0) scale(1);
}
.next-leave-to {
  transform: translateX(-30px) scale(0.97);
}
.prev-enter-from {
  transform: translateX(-30px) scale(0.99);
}
.prev-enter-to {
  transform: translateX(0) scale(1);
}
.prev-leave-from {
  transform: translateX(0) scale(1);
}
.prev-leave-to {
  transform: translateX(30px) scale(0.97);
}
</style>
