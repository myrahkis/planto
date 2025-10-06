<script setup></script>

<template>
  <header
    class="u-card-border-gradient"
    style="--u-card-border-radius: 1.3rem; --u-card-transparent-percent: 45%"
  >
    <div class="logo">
      <img src="/src/assets/icons/planto-logo.svg" class="logo-icon" alt="" />
      <p style="font-weight: 900">Planto.</p>
    </div>
    <ul class="nav-list">
      <li>Home</li>
      <li>Plant types</li>
      <li>More</li>
      <li>Contact</li>
    </ul>
    <div class="nav-tools">
      <button><img class="tool-icon" src="/src/assets/icons/search-icon.svg" alt="" /></button>
      <button><img class="tool-icon" src="/src/assets/icons/cart-icon.svg" alt="" /></button>
      <button><img class="tool-icon" src="/src/assets/icons/menu-icon.svg" alt="" /></button>
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
  gap: 2.5rem;
}
.tool-icon {
  width: 1.8rem;
}
</style>
