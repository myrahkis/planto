<script setup>
const bestO2Plants = []
</script>

<template>
  <section class="best-o2-section">
    <h2>Our Best o2</h2>
    <div class="carousel">
      <div class="carousel-card" v-for="(item, index) in bestO2Plants" :key="index">
        <img src="" alt="" />
        <h3>heading</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quia tempora veniam
          expedita sunt inventore, corrupti voluptates beatae aliquid voluptas architecto numquam
          necessitatibus quasi? Similique laborum necessitatibus amet repellat saepe.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugiat voluptates quam modi
          similique voluptatum nobis, repudiandae magnam officiis dolores natus quibusdam! Deserunt
          cumque modi, ipsam debitis animi impedit. Nobis?
        </p>
        <div class="card-footer">
          <button>Explore</button>
          <div>
            <button>prev</button>
            <p>01/04</p>
            <button>next</button>
          </div>
        </div>
      </div>
      <div>dots</div>
    </div>
  </section>
</template>
