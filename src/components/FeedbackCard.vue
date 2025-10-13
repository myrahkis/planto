<script setup>
const { card } = defineProps({ card: Object })
</script>

<template>
  <div class="feedback-card u-card-border-gradient" style="--u-card-border-radius: 5rem">
    <div class="feedback-card-header">
      <img :src="card.avaPath" alt="" />
      <div>
        <p class="name">{{ card.name }}</p>
        <span
          ><img
            class="star"
            src="/icons/star-icon.svg"
            alt=""
            v-for="star in card.starsAmount"
            :key="star"
        /></span>
      </div>
    </div>
    <p class="review-text">{{ card.reviewText }}</p>
  </div>
</template>

<style scoped>
.feedback-card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem;
}
.feedback-card-header {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.name {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--white-color);
  margin-bottom: 0.5rem;
}
.review-text {
  font-size: 2rem;
  font-weight: 400;
}

@media (max-width: 1200px) {
  .feedback-card {
    gap: clamp(0.8rem, 1vw + 0.5rem, 2rem);
    padding: clamp(1.5rem, 2vw + 1rem, 4rem);
  }
  .feedback-card-header {
    gap: clamp(0.8rem, 1vw + 0.5rem, 2rem);

    img {
      width: clamp(3.5rem, 4vw + 1rem, 7.1rem);
    }
  }
  .star {
    width: clamp(1rem, 0.8vw + 0.3rem, 1.5rem) !important;
  }
  .name {
    font-size: clamp(1.4rem, 1vw + 0.5rem, 2.5rem);
    margin-bottom: 0;
  }
  .review-text {
    font-size: clamp(1.2rem, 0.8vw + 0.7rem, 2rem);
  }
}

@media (max-width: 900px) {
  .feedback-card {
    gap: clamp(0.8rem, 1vw + 0.5rem, 1.5rem);
    padding: clamp(1.5rem, 2vw + 1rem, 2.5rem);
  }
  .feedback-card.u-card-border-gradient {
    --u-card-border-radius: 4rem !important;
  }
  .review-text {
    font-size: clamp(1.2rem, 0.8vw, 1.8rem);
  }
}
@media (max-width: 762px) {
  .feedback-card {
    width: 45rem;
  }
}
@media (max-width: 560px) {
  .feedback-card {
    width: 100%;
  }
}
</style>
