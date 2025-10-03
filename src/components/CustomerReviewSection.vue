<script setup>
const feedbacks = []
</script>

<template>
  <section class="customer-review-section">
    <h2>Customer Review</h2>
    <div class="feedbacks">
      <div class="feedback-card" v-for="(item, index) in feedbacks" :key="index">
        <div class="card-header">
          <img src="" alt="" />
          <p>name</p>
          <p>feedback</p>
        </div>
      </div>
    </div>
  </section>
</template>
