<script setup>
const { card } = defineProps({
  card: Object,
})
</script>

<template>
  <div class="carousel-card u-card-border-gradient" style="--u-card-border-radius: 6rem">
    <img :src="card.imgPath" alt="" />
    <div class="card-info-wrapper">
      <h3>{{ card.heading }}</h3>
      <p>
        {{ card.p1 }}
      </p>
      <p>
        {{ card.p2 }}
      </p>
      <div class="card-footer">
        <button class="explore-btn">Explore</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-card {
  display: flex;
  padding: 3rem 6rem;
  padding-left: 0;
  gap: 2.5rem;
  align-items: center;
  min-height: 50rem;

  img {
    margin-top: -8%;
  }
}

.card-info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  p {
    font-size: 2rem;
  }
}

.card-footer {
  display: flex;
  justify-content: space-between;
}
</style>
