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
    width: clamp(20rem, 40vw, 60rem);
    height: clamp(20rem, 40vw, 60rem);
  }
}

.card-info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  p {
    font-size: clamp(1.2rem, 1.3vw, 2rem);
  }
}

.card-footer {
  display: flex;
  justify-content: space-between;
}

@media (min-width: 1920px) {
  .carousel-card {
    img {
      margin-top: -10%;
      width: clamp(25rem, 38vw, 70rem);
      height: clamp(25rem, 38vw, 70rem);
    }
  }
  .card-info-wrapper {
    p {
      font-size: clamp(1.4rem, 1.1vw, 2.4rem);
    }
  }
}
@media (min-width: 4000px) {
  .carousel-card {
    padding: 5rem 9rem;
    padding-left: 0;
  }
  .carousel-card {
    img {
      margin-top: -10%;
      width: clamp(50rem, 40vw, 110rem);
      height: clamp(50rem, 40vw, 110rem);
    }
  }
  .card-info-wrapper {
    p {
      font-size: clamp(2rem, 2vw, 3.6rem);
    }
  }
}

@media (max-width: 900px) {
  .carousel-card {
    align-items: start;
    min-height: clamp(20rem, 40vw, 60rem);
    padding: clamp(1rem, 2vw + 1rem, 3rem) clamp(2rem, 4vw, 6rem);
    padding-left: 0;

    img {
      align-self: center;
    }
  }

  .card-info-wrapper {
    align-self: center;
    gap: clamp(1rem, 1.8vw, 2.5rem);

    p {
      font-size: clamp(1rem, 1.3vw, 1.5rem);
    }
  }
}
@media (max-width: 670px) {
  .carousel-card {
    flex-direction: column;
    padding: clamp(4rem, 4vw, 6rem);
    width: 50rem;
  }
  .card-info-wrapper {
    p {
      font-size: clamp(1.1rem, 1.3vw, 1.5rem);
    }
  }
}
@media (max-width: 670px) {
  .carousel-card {
    padding: clamp(3rem, 4vw, 4rem);
    width: 100%;
  }
}
</style>
