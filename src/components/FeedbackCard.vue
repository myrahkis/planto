<script setup>
const { card } = defineProps({ card: Array })
</script>

<template>
  <div class="feedback-card u-card-border-gradient" style="--u-card-border-radius: 5rem">
    <div class="feedback-card-header">
      <img :src="card.avaPath" alt="" />
      <div>
        <p class="name">{{ card.name }}</p>
        <span
          ><img
            src="/src/assets/icons/star-icon.svg"
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
</style>
