<script setup>
import { animate, svg } from 'animejs'
import { onMounted } from 'vue'

const { headingText } = defineProps({ headingText: { type: String, required: true } })

onMounted(() => {
  animate(svg.createDrawable('.corner--left path'), {
    draw: ['0 0', '0 1', '1 1'],
    ease: 'inOutQuad',
    duration: 2000,
    alternate: true,
    loop: true,
  })

  animate(svg.createDrawable('.corner--right path'), {
    draw: ['0 0', '0 1', '1 1'],
    ease: 'inOutQuad',
    duration: 2000,
    alternate: true,
    loop: true,
  })
})
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
      <g transform="rotate(180 68 40) scale(-1,1) translate(-144,0)">
        <path
          class="line"
          d="M20 70 L20 30 A30 30 0 0 1 50 0 L95 0"
          fill="none"
          stroke="url(#g1)"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
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
  transform-origin: 0 0;
}
.corner--left {
  bottom: -1rem;
  left: -3.5rem;
}

.corner--right {
  top: -1rem;
  right: -3.5rem;
}

@media (max-width: 762px) {
  .corner {
    transform: scaleX(0.6) scaleY(0.6);
  }
  .corner--left {
    bottom: -1.5rem;
    left: -2.5rem;
  }
  .corner--right {
    top: 0;
    right: -6.5rem;
  }
}
</style>
