<script setup>
const plantsData = []
</script>

<template>
  <section class="top-selling-section">
    <h2>Our Top Selling</h2>
    <div class="plants-cards">
      <div class="plant-card" v-for="(item, index) in plantsData" :key="index">
        <img src="" alt="" />
        <h3>Plant name</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ad aspernatur a dicta
          doloremque rem adipisci dolor cum illo odio.
        </p>
        <div>Price</div>
        <button>to cart</button>
      </div>
    </div>
  </section>
</template>
