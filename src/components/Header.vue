<script setup>
import { useStore } from 'vuex'

const store = useStore()
const openCart = () => {
  store.commit('cartStore/openCart')
}
</script>

<template>
  <header
    class="u-card-border-gradient"
    style="--u-card-border-radius: 1.3rem; --u-card-transparent-percent: 45%"
  >
    <div class="logo">
      <img src="/icons/planto-logo.svg" class="logo-icon" alt="" />
      <p style="font-weight: 900">Planto.</p>
    </div>
    <ul class="nav-list">
      <li class="u-underline">Home</li>
      <li class="u-underline">Plant types</li>
      <li class="u-underline">More</li>
      <li class="u-underline">Contact</li>
    </ul>
    <div class="nav-tools">
      <button class="tool-btn">
        <img class="tool-icon" src="/icons/search-icon.svg" alt="" />
      </button>
      <button class="tool-btn" @click="openCart">
        <img class="tool-icon" src="/icons/cart-icon.svg" alt="" />
      </button>
      <button class="tool-btn">
        <img class="tool-icon" src="/icons/menu-icon.svg" alt="" />
      </button>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: var(--horiz-section-padding);
  left: var(--horiz-section-padding);
  right: var(--horiz-section-padding);
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  padding: 0.8rem 1rem;
  color: var(--text-color);
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.25);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.logo-icon {
  width: 3rem;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 4rem;
}

.nav-tools {
  display: flex;
  gap: 0.5rem;
}
.tool-btn {
  border-radius: 1rem;
  padding: 0.4rem 0.6rem;
  border: 1px solid transparent;
  transition: all 0.2s;

  &:hover {
    border: 1px solid #9ec84b;
    background-color: var(--bg-color);
  }
}
.tool-icon {
  width: 1.8rem;
}

@media (min-width: 1600px) {
  header {
    top: 3rem;
  }
}
@media (min-width: 1920px) {
  header {
    padding: 1rem 1.5rem;
  }
  .tool-icon {
    width: 2.3rem;
  }
}
@media (min-width: 2560px) {
  .tool-icon {
    width: 3.3rem;
  }
}
@media (min-width: 4000px) {
  header {
    padding: 2rem 2.5rem;
  }
  header.u-card-border-gradient {
    --u-card-border-radius: 4rem !important;
  }
  .tool-icon {
    width: 5rem;
  }
  .logo-icon {
    width: 7rem;
  }
}

@media (max-width: 762px) {
  .nav-list {
    display: none;
  }
}
</style>
