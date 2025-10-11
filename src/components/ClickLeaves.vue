<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { animate } from 'animejs'

// утилита
const rand = (min, max) => Math.random() * (max - min) + min

// SVG как строка (оставил твой SVG, можно подправить fill/color внутри)
function leafSVG() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill="#000000" viewBox="0 0 511.845 511.845" width="64px" height="64px" xmlns:xml="http://www.w3.org/XML/1998/namespace" xml:space="preserve" version="1.1">
      <g id="SVGRepo_bgCarrier" stroke-width="0" />
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <path style="fill: #9ed36a;" d="M 503.141 8.696 c -0.016 0 -215.215 -56.483 -390.225 118.511 C -31.579 271.711 96.155 415.69 96.155 415.69 s 143.979 127.742 288.476 -16.775 C 559.64 223.928 503.156 8.728 503.141 8.696 Z" />
        <g style="opacity: 0.2;">
          <path style="fill: #ffffff;" d="M 503.141 8.696 l -21.337 -4.108 c 0.016 0.031 56.499 219.339 -118.495 394.326 c -48.172 48.203 -96.299 66.104 -139.052 68.572 c 47.705 2.75 104 -12.184 160.374 -68.572 C 559.64 223.928 503.156 8.728 503.141 8.696 Z" />
        </g>
        <path style="fill: #8ac054;" d="M 300.125 211.728 c -4.154 -4.17 -10.918 -4.17 -15.074 0 L 3.122 493.635 c -4.163 4.186 -4.163 10.934 0 15.09 c 4.163 4.154 10.911 4.154 15.081 0 l 281.922 -281.923 C 304.295 222.631 304.295 215.883 300.125 211.728 Z" />
      </g>
    </svg>
  `
}

// создаёт DOM-элемент листика и позиционирует его
function createLeafEl(clientX, clientY, size = 28, color = '#2aa64f') {
  const leaf = document.createElement('div')
  leaf.className = 'leaf--body'
  leaf.innerHTML = leafSVG()

  const left = Math.round(clientX - size / 2)
  const top = Math.round(clientY - size / 2)

  Object.assign(leaf.style, {
    position: 'fixed',
    left: `${left}px`,
    top: `${top}px`,
    transform: 'none', // anime будет управлять transform
    transformOrigin: 'center center',
    pointerEvents: 'none',
    width: `${size}px`,
    height: `${size}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color,
    zIndex: '9999',
    willChange: 'transform, opacity',
    userSelect: 'none',
  })

  document.body.appendChild(leaf)
  return leaf
}

/**
 * spawnLeavesAround — создаёт группу листьев и анимирует их через один timeline
 * options: { count, radiusRange, jitter, staggerMs, sizeRange }
 */
function spawnLeavesAround(clientX, clientY, options = {}) {
  const {
    count = 8,
    radiusRange = [8, 28],
    jitter = 8,
    staggerMs = 45,
    sizeRange = [10, 24],
  } = options

  const leaves = []

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2
    const radius = rand(radiusRange[0], radiusRange[1])
    const px = Math.round(clientX + Math.cos(angle) * radius + rand(-jitter, jitter))
    const py = Math.round(clientY + Math.sin(angle) * radius + rand(-jitter, jitter))
    const size = Math.round(rand(sizeRange[0], sizeRange[1]))

    const el = createLeafEl(px, py, size)

    const driftX = rand(-120, 120)
    const riseY = rand(-80, -360)
    const rotateTo = rand(-90, 90)
    const duration = Math.round(rand(900, 2200))
    const scaleFrom = rand(0.6, 0.95)
    const scaleTo = rand(0.9, 1.3)

    el.dataset.dx = driftX
    el.dataset.dy = riseY
    el.dataset.rotate = rotateTo
    el.dataset.duration = duration
    el.dataset.scaleFrom = scaleFrom
    el.dataset.scaleTo = scaleTo

    leaves.push(el)
  }

  // вычислим таймаут-резерв (макс длительность + максимальная задержка stagger)
  const maxDuration = Math.max(...leaves.map((l) => parseFloat(l.dataset.duration) || 0))
  const maxDelay = staggerMs * (leaves.length - 1)
  const fallbackDelay = Math.round(maxDuration + maxDelay + 150) // +150ms запас

  const tl = anime.timeline()

  tl.add({
    targets: leaves,
    translateX: (el) => parseFloat(el.dataset.dx),
    translateY: (el) => parseFloat(el.dataset.dy),
    rotate: (el) => `${parseFloat(el.dataset.rotate)}deg`,
    scale: (el) => [parseFloat(el.dataset.scaleFrom), parseFloat(el.dataset.scaleTo)],
    opacity: [1, 0],
    duration: (el) => parseFloat(el.dataset.duration),
    delay: anime.stagger(staggerMs),
    easing: 'out(3)',
  })

  // Надёжное удаление: через промис finished если есть, иначе через setTimeout
  if (tl.finished && typeof tl.finished.then === 'function') {
    tl.finished
      .then(() => {
        leaves.forEach((node) => node.parentNode && node.parentNode.removeChild(node))
      })
      .catch(() => {
        // в редком случае — всё равно удалим через таймаут
        setTimeout(
          () => leaves.forEach((n) => n.parentNode && n.parentNode.removeChild(n)),
          fallbackDelay,
        )
      })
  } else {
    // fallback для старых сборок anime.js
    setTimeout(
      () => leaves.forEach((n) => n.parentNode && n.parentNode.removeChild(n)),
      fallbackDelay,
    )
  }
}

// слушатель клика / тапа
function onPointerDown(e) {
  const clientX = e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0
  const clientY = e.clientY ?? (e.touches && e.touches[0].clientY) ?? 0

  // пример параметров — можно менять count / radius / stagger
  spawnLeavesAround(clientX, clientY, { count: 6, radiusRange: [8, 28], staggerMs: 30 })
}

onMounted(() => {
  window.addEventListener('pointerdown', onPointerDown, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('pointerdown', onPointerDown)
})
</script>

<template>
  <div class="leaf-bursts-root" aria-hidden="true"></div>
</template>

<style>
.leaf--body {
  pointer-events: none;
  user-select: none;
  /* небольшой тонкий переход, чтобы не было резкого ррр */
  transition: opacity 120ms linear;
}

/* svg внутри листа должен занимать весь контейнер */
.leaf--body svg {
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
