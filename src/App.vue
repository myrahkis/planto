<script setup>
import { onMounted, onBeforeUnmount, computed } from 'vue'
import { animate } from 'animejs'
import BestO2Section from './components/BestO2Section.vue'
import CustomerReviewSection from './components/CustomerReviewSection.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import TopSellingSection from './components/TopSellingSection.vue'
import { useStore } from 'vuex'
import Cart from './components/Cart.vue'

const store = useStore()
const isCartOpened = computed(() => store.state.cartStore.isOpened)

const rand = (min, max) => min + Math.random() * (max - min)

const LEAF_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.845 511.845" width="22" height="22">
    <g><path style="fill:#9ed36a;" d="M503.141 8.696c-0.016 0-215.215-56.483-390.225 118.511C-31.579 271.711 96.155 415.69 96.155 415.69s143.979 127.742 288.476-16.775C559.64 223.928 503.156 8.728 503.141 8.696Z"/>
      <g style="opacity:0.2"><path style="fill:#ffffff;" d="M503.141 8.696l-21.337-4.108c0.016 0.031 56.499 219.339-118.495 394.326-48.172 48.203-96.299 66.104-139.052 68.572 47.705 2.75 104-12.184 160.374-68.572C559.64 223.928 503.156 8.728 503.141 8.696Z"/></g>
      <path style="fill:#8ac054;" d="M300.125 211.728c-4.154-4.17-10.918-4.17-15.074 0L3.122 493.635c-4.163 4.186-4.163 10.934 0 15.09 4.163 4.154 10.911 4.154 15.081 0l281.922-281.923C304.295 222.631 304.295 215.883 300.125 211.728Z"/></g>
  </svg>
`

function createLeafElement(x, y, { size = 18 } = {}) {
  const el = document.createElement('div')
  el.className = 'leaf--body'
  el.innerHTML = LEAF_SVG
  const left = Math.round(x - size / 2)
  const top = Math.round(y - size / 2)

  Object.assign(el.style, {
    position: 'fixed',
    left: `${left}px`,
    top: `${top}px`,
    zIndex: '10000',
    width: `${size}px`,
    height: `${size}px`,
    transform: 'none',
    transformOrigin: 'center center',
    pointerEvents: 'none',
  })

  document.body.appendChild(el)
  return el
}

function animateAndRemove(leaf, { rotateTo, duration }) {
  const anim = animate(leaf, {
    rotate: { from: 0, to: `${rotateTo}deg` },
    scale: { from: rand(0.6, 0.95), to: rand(0.9, 1.3) },
    opacity: { from: 0.5, to: 0 },
    duration,
    easing: 'out(3)',
  })

  if (anim && anim.finished && typeof anim.finished.then === 'function') {
    anim.finished.then(() => leaf.remove()).catch(() => leaf.remove())
  } else {
    setTimeout(() => leaf.remove(), duration + 50)
  }
}

function spawnLeafAtBody(clientX, clientY, opts = {}) {
  const leaf = createLeafElement(clientX, clientY, opts)
  const rotateTo = rand(-90, 90)
  const duration = Math.round(rand(900, 2200))

  animateAndRemove(leaf, { rotateTo, duration })
}

function spawnLeavesAround(
  clientX,
  clientY,
  { count = 8, radiusRange = [8, 28], jitter = 8, staggerMs = 45, sizeRange = [10, 24] } = {},
) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2
    const radius = rand(radiusRange[0], radiusRange[1])
    const px = Math.round(clientX + Math.cos(angle) * radius + rand(-jitter, jitter))
    const py = Math.round(clientY + Math.sin(angle) * radius + rand(-jitter, jitter))
    const size = Math.round(rand(sizeRange[0], sizeRange[1]))
    setTimeout(() => spawnLeafAtBody(px, py, { size }), i * staggerMs)
  }
}

const onBodyClick = (e) => {
  spawnLeavesAround(e.clientX, e.clientY, { count: 6, radiusRange: [8, 28], staggerMs: 30 })
}

onMounted(() => document.body.addEventListener('click', onBodyClick))
onBeforeUnmount(() => document.body.removeEventListener('click', onBodyClick))
</script>

<template>
  <Header />
  <Cart v-if="isCartOpened" />
  <HeroSection />
  <TopSellingSection />
  <CustomerReviewSection />
  <BestO2Section />
  <Footer />
</template>
