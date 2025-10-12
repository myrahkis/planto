<script setup>
import { onMounted } from 'vue'
import FeedbackCard from './FeedbackCard.vue'
import HeadingCorners from './HeadingCorners.vue'
import { animate, onScroll, stagger } from 'animejs'

const feedbacks = [
  {
    avaPath: '/src/assets/images/avas/ava-4.png',
    name: 'Maln Josi',
    starsAmount: 5,
    reviewText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    avaPath: '/src/assets/images/avas/ava-2.png',
    name: 'Alina Thakur',
    starsAmount: 5,
    reviewText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    avaPath: '/src/assets/images/avas/ava-3.png',
    name: 'Max Makvana',
    starsAmount: 5,
    reviewText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
]

onMounted(() => {
  const cards = document.querySelectorAll('.feedbacks-grid > *')

  if (!cards.length) return

  animate(cards, {
    opacity: { from: 0.5 },
    x: { from: stagger(['-20rem', '20rem']) },
    easing: 'easeOutCubic',
    autoplay: onScroll({
      container: document.body,
      target: '.customer-review-section',
      enter: 'bottom+=150 top-=50',
      leave: 'top bottom',
      sync: 'inOutCirc',
      // debug: true,
    }),
  })
})
</script>

<template>
  <section class="customer-review-section">
    <div class="heading-corners">
      <HeadingCorners headingText="Customer Review" />
    </div>
    <div class="feedbacks-grid">
      <FeedbackCard v-for="(card, index) in feedbacks" :key="index" :card="card" />
    </div>
  </section>
</template>

<style scoped>
.customer-review-section {
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.feedbacks-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  width: 100%;
  margin-top: var(--vert-section-padding);
}

@media (max-width: 1200px) {
  .feedbacks-grid {
    gap: clamp(1rem, 1vw, 3rem);
  }
}
@media (max-width: 762px) {
  .feedbacks-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
