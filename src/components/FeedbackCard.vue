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

@media (min-width: 1920px) {
  .feedback-card-header {
    gap: clamp(1rem, 0.8vw + 0.5rem, 2.5rem);

    img {
      width: clamp(4.5rem, 3.5vw + 1rem, 8.5rem);
    }
  }
  .star {
    width: clamp(1.6rem, 0.6vw + 0.3rem, 2rem) !important;
  }
  .name {
    font-size: clamp(1.8rem, 1.2vw, 3rem);
  }
  .review-text {
    font-size: clamp(1.8rem, 1.1vw, 2.5rem);
  }
}
@media (min-width: 4000px) {
  .feedback-card {
    gap: 3rem;
    padding: 6rem;
  }
  .feedback-card-header {
    gap: clamp(1.5rem, 0.7vw + 0.6rem, 3.5rem);

    img {
      width: clamp(6rem, 4vw, 13rem);
    }
  }
  .star {
    width: clamp(2.2rem, 1vw, 3rem) !important;
  }
  .name {
    font-size: clamp(3rem, 2vw, 4.5rem);
  }
  .review-text {
    font-size: clamp(3rem, 1.5vw, 4.1rem);
  }
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
