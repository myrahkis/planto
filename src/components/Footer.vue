<script setup></script>

<template>
  <footer class="footer-grid">
    <div class="cell1">
      <div class="logoname">
        <img src="/src/assets/icons/planto-logo.svg" alt="" />
        <p>Planto.</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
    </div>
    <div class="cell2">
      <ul class="socials">
        <li>FB</li>
        <li>TW</li>
        <li>LI</li>
      </ul>
    </div>
    <div class="cell3">
      <p class="footer-heading">Quick Link's</p>
      <ul class="nav-links">
        <li class="u-underline">Home</li>
        <li class="u-underline">Type's Of Plants</li>
        <li class="u-underline">Contacts</li>
        <li class="u-underline">Privacy</li>
      </ul>
    </div>
    <div class="cell4">
      <p class="footer-heading">For every update</p>
      <div class="subscribe-wrapper">
        <input class="email-input" type="email" placeholder="Enter Email" />
        <button class="subscribe-btn">Subscribe</button>
      </div>
    </div>
    <div class="cell5">
      <p class="credits">planto © all right reserve</p>
    </div>
  </footer>
</template>

<style scoped>
.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr auto;
  justify-items: center;
  gap: 5rem;
  margin-top: var(--vert-section-padding);
  padding: var(--horiz-section-padding);
  background-color: #222c1d;
}

.cell1 {
  grid-column: 1 / 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.logoname {
  display: flex;
  align-items: center;
  gap: 0.8rem;

  img {
    width: 6rem;
  }
  p {
    font-size: 3rem;
    font-weight: 900;
  }
}

.cell2 {
  grid-column: 1 / 1;
  grid-row: 2;
  display: flex;
  width: 100%;
  justify-content: start;
}
.socials {
  display: flex;
  gap: 3rem;
  list-style: none;

  li {
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: 800;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1) rotate(-5deg);
    }
  }
}

.cell3 {
  grid-column: 2 / 2;
  grid-row: 1;
}
.nav-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cell4 {
  grid-column: 3 / 3;
  grid-row: 1;
}
.subscribe-wrapper {
  border: 2px solid var(--white-color);
  border-radius: 0.5rem;
}
.subscribe-wrapper:has(.email-input:focus) {
  outline: 2px solid #9ec84b;
  outline-offset: 3px;
}
.email-input {
  background-color: transparent;
  color: var(--white-color);
  border: none;
  outline: none;
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
}
.subscribe-btn {
  background-color: var(--white-color);
  color: var(--bg-color);
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 0.2rem;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background-color: #9ec84b;
    color: var(--bg-color);
  }
}

.cell5 {
  grid-column: 3 / 3;
  grid-row: 2;
}

.footer-heading {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
}
</style>
