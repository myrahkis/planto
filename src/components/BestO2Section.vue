<script setup>
import { computed, nextTick, ref } from 'vue'
import { animate } from 'animejs'
import CarouselCard from './CarouselCard.vue'
import HeadingCorners from './HeadingCorners.vue'

const bestO2Plants = [
  {
    imgPath: '/src/assets/images/big-plants/l-plant-1.png',
    heading: 'We Have Small And Best O2 Plants Collection’s',
    p1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quia tempora veniam expedita sunt inventore, corrupti voluptates beatae aliquid voluptas architecto numquam necessitatibus quasi? Similique laborum necessitatibus amet repellat saepe.',
    p2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quia tempora veniam expedita sunt inventore, corrupti voluptates beatae aliquid voluptas architecto numquam necessitatibus quasi? Similique laborum necessitatibus amet repellat saepe.',
  },
  {
    imgPath: '/src/assets/images/big-plants/l-plant-2.png',
    heading: 'Lorem ipsum dolor sit amet, adipisicing elit',
    p1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quia tempora veniam expedita sunt inventore, corrupti voluptates beatae aliquid voluptas architecto numquam necessitatibus quasi? Similique laborum necessitatibus amet repellat saepe.',
    p2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quia tempora veniam expedita sunt inventore, corrupti voluptates beatae aliquid voluptas architecto numquam necessitatibus quasi? Similique laborum necessitatibus amet repellat saepe.',
  },
  {
    imgPath: '/src/assets/images/big-plants/l-plant-1.png',
    heading: 'Maxime aspernatur debitis dolore incidunt!',
    p1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quia tempora veniam expedita sunt inventore, corrupti voluptates beatae aliquid voluptas architecto numquam necessitatibus quasi? Similique laborum necessitatibus amet repellat saepe.',
    p2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quia tempora veniam expedita sunt inventore, corrupti voluptates beatae aliquid voluptas architecto numquam necessitatibus quasi? Similique laborum necessitatibus amet repellat saepe.',
  },
]

const curIdx = ref(0)

const direction = ref('next')
const isAnimating = ref(false)

const visibleCard = computed(() => bestO2Plants[curIdx.value])

function safeAnimate(el, props) {
  if (!el || !el.isConnected) return Promise.resolve()
  const anim = animate(el, { ...props, autoplay: true })
  return anim?.finished ?? Promise.resolve()
}

async function enter(el, done) {
  await nextTick()
  const fromX = direction.value === 'next' ? '15rem' : '-15rem'
  const fromY = direction.value === 'next' ? '2rem' : '2rem'
  try {
    await safeAnimate(el, {
      translateX: [fromX, '0rem'],
      translateY: [fromY, '0rem'],
      opacity: [0.3, 1],
      easing: 'easeOutCubic',
      duration: 600,
    })
  } catch (err) {
    console.err(err)
  }
  isAnimating.value = false
  done()
}

async function leave(el, done) {
  await nextTick()
  isAnimating.value = true
  const toX = direction.value === 'next' ? '-15rem' : '15rem'
  const toY = direction.value === 'next' ? '-2rem' : '-2rem'
  try {
    await safeAnimate(el, {
      translateX: ['0rem', toX],
      translateY: ['0rem', toY],
      opacity: [1, 0.3],
      easing: 'easeInCubic',
      duration: 600,
    })
  } catch (err) {
    console.err(err)
  }
  done()
}

function nextCardHandle() {
  if (isAnimating.value) return
  direction.value = 'next'
  curIdx.value = (curIdx.value + 1) % bestO2Plants.length
}

function prevCardHandle() {
  if (isAnimating.value) return
  direction.value = 'prev'
  curIdx.value = (curIdx.value - 1 + bestO2Plants.length) % bestO2Plants.length
}
</script>

<template>
  <section class="best-o2-section">
    <div class="heading-corners">
      <HeadingCorners headingText="Our Best o2" />
    </div>
    <div class="carousel">
      <transition @enter="enter" @leave="leave" :css="false" mode="out-in">
        <CarouselCard v-if="visibleCard" :card="visibleCard" :key="curIdx" />
      </transition>
      <div class="carousel-nav">
        <button @click="prevCardHandle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path
              fill="url(#a)"
              fill-opacity="0.75"
              transform="rotate(-180 24 24)"
              d="M 24 24 h 24 v 24 H 24 Z"
            />
            <defs>
              <pattern id="a" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use
                  transform="scale(0.00195)"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#b"
                />
              </pattern>
              <image
                id="b"
                preserveAspectRatio="none meet"
                width="512"
                height="512"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAEAQAAAAO4cAyAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cKEhIQLv6Dbq8AABmQSURBVHja7d1byOVV/cfx9Xt0ZnRm1KY00SwzcUoQM0tNIjXzL6USaInpRXQTeRMkCUF0MKGjGUHdGCIZiFE0hmmUQ6lIYBmiIp5GIzPUQTyUM5WOs9f/YlLn8Bz23s/ee/3Wd71e0P13Hi8+71l7P1OXYEx58OY3p3TKKal773tTXr8+dUcdldKBB6a0enVKBxyQ0pYtKW3dmtJzz6X06KMpP/JISvfem9Jtt3VzTzxR+n4AYEg5H3FEHnz5yznfd1/Og0Ee1+Cxx/Lgu9/Ng2OPLf1nAgAWkPOHP5wHGzcua/QX9Je/5MH55+c8N1f6zwkApJTy4KST8uDOOyc/+vN56KE8OOec0n9mAGhWzm94Q85XX53z9u2zGf+d3XhjHrz1raV/BgDQlDx43/vy4NFHZz/8O3vhhTz4xCdK/ywAoAl58JnP5Pzyy2XH/1WDQc7f+EbOXVf65wIAYeX8xS9O50t+y3XttXmwYkXpnw8AhJMHV1xReuYXt2GDCACACcqDb36z9LwP56ab8mDVqtI/LwCoXj3jLwIAYCLqG38RAADLUu/4iwAAGEv94y8CAGAkccZfBADAUOKNvwgAgEXFHX8RAADzij/+IgAAdtHO+IsAAEgptTj+IgCAxrU7/iIAgEbl/K1vlZ7ffhABADTC+O9OBAAQnPFfiAgAIKg8uPLK0jPbbxs25MGKFaX/OwHAxOR8+eWl57UOXgIACCLniy8uPat1EQEAVC7n00/Pefv20pNaHx8HAHSlD2A8eXDQQam7556UDj209C11uvnmlD/+8W7upZdKXwJQwlzpAxhTd9VVxn85zj47dddf7yUAaJUXgArlwf/9X+puuaX0HTF4CQDaJAAqkwcrVqTu/vtTWr++9C1x3HBDyhdc0M1t21b6EoBZ8RFAdS680PhP2rnnpu6GG/x2ANASLwAVybnrUr777tQdd1zpW2LycQDQDi8AVTntNOM/Tb4YCLRDANQkX3RR6RPi83EA0AYfAVQiD1auTN3TT6e0bl3pW9rgi4FAbF4AqnHiicZ/lrwEALEJgFp0H/xg6RPac/bZqfvlL0UAEJEAqMbJJ5e+oE2+GAjEJACq8a53lb6gXT4OAOLxJcAK5MHee6du69aUVq4sfUvb/DsBQBxeAGrQHXSQ8e8DHwcAcQiAGuS1a0ufwKt8HADEIACqsHp16QvYmZcAoH4CoAbdK6+UPoHdeQkA6iYAapC3bCl9AvPx7wQA9RIAVXjhhdIXsBAfBwB18muAlcj52WdTeuMbS9/BQvyKIFAXLwC1yJs2lT6Bxfg4AKiLAKhFd++9pU9gKT4OAOohAGqR77ij9AkMw28HAHUQANW4/fbSFzAsLwFA/wmASnRzTzyR0l13lb6DYXkJAPpNAFTl+utLX8AofDEQ6C+/BliRPDj44NQ9/nhKBqUuN9yQ8gUXdHPbtpW+BOBVXgAq0s1t3pzyT39a+g5G5eMAoH+8AFQmD9avT90DD6S0116lb2FUXgKA/vACUJlu7pFHUvrxj0vfwTi8BAD94QWgQjmvW5fyI4+k7sADS9/COPyzwUB5XgAq1HXPP5+6z3++9B2My78TAJQnACrVddddl9JPflL6Dsbl4wCgLB8BVCznNWtS+uMfU3r3u0vfwrh8MRAoQwBULudDDtkRAUccUfoWxuU7AcDs+Qigcl331FMpf+QjKW3eXPoWxuU7AcDseQEIIud3vjOlW29N6ZBDSt/CuLwEALMjAAIRARGIAGA2BEAwIiACEQBMnwAISAREIAKA6RIAQYmACEQAMD0CIDAREIEIAKZDAAQnAiIQAcDkCYAGiIAIRAAwWQKgESIgAhEATI4AaIgIiEAEAJMhABojAiIQAcDyCYAGiYAIRACwPAKgUSIgAhEAjE8ANEwERCACgPEIgMaJgAhEADA6AYAICEEEAKMRAKSUREAMIgAYngDgNSIgAhEADEcAsAsREIEIAJYmANiDCIhABACLEwDMSwREIAKAhQkAFiQCIhABwPwEAIsSARGIAGBPAoAliYAIRACwKwHAUERABCIAeJ0AYGgiIAIRAOwgABiJCIhABAACgDGIgAhEALROADAWERCBCICWCQDGJgIiEAHQKgHAsoiACEQAtEgAsGwiIAIRAK0RAEyECIhABEBLBAATIwIiEAHQCgHARImACEQAtEAAMHEiIAIRANEJAKZCBEQgAiAyAcDUiIAIRABEJQCYKhEQgQiAiAQAUycCIhABEI0AYCZEQAQiACIRAMyMCIhABEAUAoCZEgERiACIQAAwcyIgAhEAtRMAFCECIhABUDMBQDEiIAIRALUSABQlAiIQAVAjAUBxIiACEQC1EQD0ggiIQARATQQAvSECIhABUAsBQK+IgAhEANRAANA7IiACEQB9JwDoJREQgQiAPhMA9JYIiEAEQF8JAHpNBEQgAqCPBAC9JwIiEAHQNwKAKoiACEQA9IkAoBoiIAIRAH0hAKiKCIjgN79J+bzzRACUJQCojgiIQARAaQKAKomACEQAlCQAqJYIiEAEQCkCgKqJgAhEAJQgAKieCIhABMCsCQBCEAERiACYJQFAGCIgAhEAsyIACEUERCACYBYEAOGIgAhEAEybACAkERCBCIBpEgCEJQIiEAEwLQKA0ERABCIApkEAEJ4IiEAEwKQJAJogAiIQATBJAoBmiIAIRABMigCgKSIgAhEAkyAAaI4IiEAEwHIJAJokAiIQAbAcAoBmiYAIRACMSwDQNBEQgQiAcQgAmicCIhABMCoBAEkExCACYBQCAP5HBEQgAmBYAgB2IgIiEAEwDAEAuxEBEYgAWIoAgHmIgAhEACxGAMACREAEIgAWIgBgESIgAhEA8xEAsAQREIEIgN0JABiCCIhABMDOBAAMSQREIALgVQIARiACIhABkJIAgJGJgAhEAAgAGIMIiEAE0DYBAGMSARGIANolAGAZREAEIoA2zZU+AGrWdQ8/nNKHPpTSk0+WvoVxnXVW6jZsyINVq0pfArPkBQAmYMdLwB/+kNKhh5a+hXF5CaAtAgAmRAREIAJohwCACRIBEYgA2iAAYMJEQAQigPgEAEyBCIhABBCbAIApEQERiADiEgAwRSIgAhFATAIApkwERCACiEcAwAyIgAhEALEIAJgRERCBCCAOAQAzJAIiEAHEIABgxkRABCKA+gkAKEAERCACqJsAgEJEQAQigHoJAChIBEQgAqiTAIDCREAEIoD6CADoAREQgQigLgIAekIERCACqIcAgB4RARGIAOogAKBnREAEIoD+EwDQQyIgAhFAvwkA6CkREIEIoL8EAPSYCIhABNBPAgB6TgREIALoHwEAFRABEYgA+kUAQCVEQAQigP4QAFARERCBCKAfBABURgREIAIoTwBAhURABCKAsgQAVEoERCACKEcAQMVEQAQigDIEAFROBEQgApg9AQABiIAIRACzJQAgCBEQgQhgdgQABCICIhABzIYAgGBEQAQigOkTABCQCIhABDBdAgCCEgERiACmRwBAYCIgAhHAdAgACE4ERCACmDwBAA0QARGIACZLAEAjREAEIoDJEQDQEBEQgQhgMgQANEYERCACWD4BAA0SARGIAJZHAECjREAEIoDxCQBomAiIQAQwHgEAjRMBEYgARicAABEQgghgNAIASCmJgBhEAMMTAMBrREAEIoDhCABgFyIgAhHA0gQAsAcREIEIYHECAJiXCIhABLAwAQAsSAREIAKYnwAAFiUCIhAB7EkAAEsSARGIAHYlAIChiIAIRACvEwDA0ERABCKAHQQAMBIREIEIQAAAYxABEYiA1gkAYCwiIAIR0DIBAIxNBEQgAlolAIBlEQERiIAWCQBg2URABCKgNQIAmAgREIEIaIkAACZGBEQgAlohAICJEgERiIAWCABg4kRABCIgOgEATIUIiEAERCYAgKkRARGIgKgEADBVIiACERCRAACmTgREIAKiEQDATIiACERAJAIAmBkREIEIiGKu9AFAO7ru4YdTOv30lJ58svQtjOuss1J37bU5z9mPyvkPCMyUCIjgggtS+uEPS1/B8vgIACgi56OPTunWW1M6+ODStzCmfPHF3dxVV5U+g/EIAKAY3wmo3X//m/L739/N3Xtv6UsYnQAAivISULv770/5+OO7uW3bSl/CaHwHACiq6x58MKVTT/WdgFodc0zqPve50lcwOi8AQC94CajZiy+mfNRR3dzmzaUvYXheAIBe8BJQs/32S90ll5S+gtF4AQB6xRcDa/Wvf6V0+OFd98ILpS9hOF4AgF7Z8e8EnHFGSp6T67L//il/6lOlr2B4AgDoHR8H1Oqii0pfwPB8BAD0li8G1ibnlI46qusee6z0JSzNCwDQW14CatN1KZ9xRukrGI4AAHrN/3dAZbpTTy19AsMRAEDv+WJgTT7wgdIXMBzfAQCq4VcEa5BzSmvXdt2//136EhbnBQCoho8DatB1KR95ZOkrWJoAAKri44AKdIcdVvoEliYAgOr47YCey2vWlD6BpQkAoEqvvwQ880zpW9hNt99+pU9gaQIAqNjb357S/vuXvoLd5O3bS5/A0gQAUKWcP/rRlG64IaVVq0rfwm66LVtKn8DSBABQnZw/9rGU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"
              />
            </defs>
          </svg>
        </button>
        <p>
          {{ curIdx + 1 }} / <small>{{ bestO2Plants.length }}</small>
        </p>
        <button @click="nextCardHandle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path fill="url(#a)" fill-opacity="0.75" d="M 0 0 h 24 v 24 H 0 Z" />
            <defs>
              <pattern id="a" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use
                  transform="scale(0.00195)"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#b"
                />
              </pattern>
              <image
                id="b"
                preserveAspectRatio="none meet"
                width="512"
                height="512"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="data:image/png;base64,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QAQigDIEAFROBEQgApg9AQABiIAIRACzJQAgCBEQgQhgdgQABCICIhABzIYAgGBEQAQigOkTABCQCIhABDBdAgCCEgERiACmRwBAYCIgAhHAdAgACE4ERCACmDwBAA0QARGIACZLAEAjREAEIoDJEQDQEBEQgQhgMgQANEYERCACWD4BAA0SARGIAJZHAECjREAEIoDxCQBomAiIQAQwHgEAjRMBEYgARicAABEQgghgNAIASCmJgBhEAMMTAMBrREAEIoDhCABgFyIgAhHA0gQAsAcREIEIYHECAJiXCIhABLAwAQAsSAREIAKYnwAAFiUCIhAB7EkAAEsSARGIAHYlAIChiIAIRACvEwDA0ERABCKAHQQAMBIREIEIQAAAYxABEYiA1gkAYCwiIAIR0DIBAIxNBEQgAlolAIBlEQERiIAWCQBg2URABCKgNQIAmAgREIEIaIkAACZGBEQgAlohAICJEgERiIAWCABg4kRABCIgOgEATIUIiEAERCYAgKkRARGIgKgEADBVIiACERCRAACmTgREIAKiEQDATIiACERAJAIAmBkREIEIiGKu9AFAO7ru4YdTOv30lJ58svQtjOuss1J37bU5z9mPyvkPCMyUCIjgggtS+uEPS1/B8vgIACgi56OPTunWW1M6+ODStzCmfPHF3dxVV5U+g/EIAKAY3wmo3X//m/L739/N3Xtv6UsYnQAAivISULv770/5+OO7uW3bSl/CaHwHACiq6x58MKVTT/WdgFodc0zqPve50lcwOi8AQC94CajZiy+mfNRR3dzmzaUvYXheAIBe8BJQs/32S90ll5S+gtF4AQB6xRcDa/Wvf6V0+OFd98ILpS9hOF4AgF7Z8e8EnHFGSp6T67L//il/6lOlr2B4AgDoHR8H1Oqii0pfwPB8BAD0li8G1ibnlI46qusee6z0JSzNCwDQW14CatN1KZ9xRukrGI4AAHrN/3dAZbpTTy19AsMRAEDv+WJgTT7wgdIXMBzfAQCq4VcEa5BzSmvXdt2//136EhbnBQCoho8DatB1KR95ZOkrWJoAAKri44AKdIcdVvoEliYAgOr47YCey2vWlD6BpQkAoEqvvwQ880zpW9hNt99+pU9gaQIAqNjb357S/vuXvoLd5O3bS5/A0gQAUKWcP/rRlG64IaVVq0rfwm66LVtKn8DSBABQnZw/9rGU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"
              />
            </defs>
          </svg>
        </button>
      </div>
      <div class="dots" aria-hidden="false">
        <span
          v-for="n in bestO2Plants.length"
          :key="n"
          :class="['dot', { active: n - 1 === curIdx }]"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.best-o2-section {
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: var(--vert-section-padding);
}

.carousel-nav {
  display: flex;
  align-items: center;
  gap: 2rem;

  p {
    font-size: 1.8rem;
  }

  button svg {
    width: 1.8rem;
  }
}

.dots {
  display: flex;
  gap: 0.5rem;
  width: fit-content;
}
.dot {
  display: inline-block;
  width: 7px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  transition: all 220ms ease;
  transform-origin: center;
  opacity: 0.8;
}
.dot.active {
  width: 18px;
  height: 6px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.95);
  opacity: 1;
}

@media (max-width: 762px) {
  .dot {
    width: 5px;
    height: 4px;
  }
  .dot.active {
    width: 16px;
    height: 4px;
  }
  .carousel-nav {
    p {
      font-size: clamp(1rem, 1vw + 0.8rem, 1.8rem);
    }
    button svg {
      width: clamp(1rem, 1vw + 0.8rem, 1.8rem);
    }
  }
}
</style>
