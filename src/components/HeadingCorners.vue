<script setup>
const { headingText } = defineProps({ headingText: { type: String, required: true } })
</script>

<template>
  <div class="corner corner--left">
    <svg viewBox="-4 -4 144 88" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="g1" cx="50" cy="30" r="50" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#55B000" />
          <stop offset="0.4" stop-color="rgba(255,255,255,0.1)" />
          <stop offset="1" stop-color="#50790B" />
        </radialGradient>
      </defs>
      <path
        d="M20 70 L20 30 A30 30 0 0 1 50 0 L95 0"
        fill="none"
        stroke="url(#g1)"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
  <h2>{{ headingText }}</h2>
  <div class="corner corner--right">
    <svg viewBox="-4 -4 144 88" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <svg viewBox="-4 -4 144 88" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g2" cx="94" cy="30" r="50" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#55B000" />
              <stop offset="0.4" stop-color="rgba(255,255,255,0.1)" />
              <stop offset="1" stop-color="#50790B" />
            </radialGradient>
          </defs>
          <path
            d="M124 70 L124 30 A30 30 0 0 0 94 0 L49 0"
            fill="none"
            stroke="url(#g2)"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </defs>
      <path
        d="M124 70 L124 30 A30 30 0 0 0 94 0 L49 0"
        fill="none"
        stroke="url(#g2)"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<style scoped>
.corner {
  position: absolute;
  width: 10rem;
  height: 5rem;
  pointer-events: none;
}
.corner--left {
  bottom: -1rem;
  left: -3.5rem;
  transform: scaleX(-1) rotate(180deg);
}
.corner--right {
  top: -1rem;
  right: -3.5rem;
}
</style>
