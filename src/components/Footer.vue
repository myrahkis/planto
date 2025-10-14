<script setup></script>

<template>
  <footer class="footer-grid">
    <div class="cell1">
      <div class="logoname">
        <img src="/icons/planto-logo.svg" alt="" />
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

@media (min-width: 1600px) {
  .footer-grid {
    margin-top: var(--vert-section-padding);
    padding: 12rem var(--horiz-section-padding);
  }
}
@media (min-width: 4000px) {
  .footer-heading {
    font-size: clamp(3rem, 2vw, 4.7rem);
  }

  .subscribe-wrapper {
    display: inline-flex;
    padding: 0;
    border: 3px solid var(--white-color);
    border-radius: 2rem;
  }
  .subscribe-wrapper:has(.email-input:focus) {
    outline: 4px solid #9ec84b;
  }
  .email-input {
    font-size: clamp(2rem, 2vw, 3.6rem);
  }
  .subscribe-btn {
    font-size: clamp(2rem, 2vw, 3.6rem);
    border-radius: 1.3rem;
    padding: 1.9rem 2rem;
    height: 100%;
    margin: 0;
    margin-right: -2px;
    margin-bottom: -1px;
  }

  .logoname {
    img {
      width: clamp(6rem, 2vw + 2rem, 10rem);
    }
    p {
      font-size: clamp(3rem, 1vw + 2rem, 5rem);
    }
  }

  .socials {
    gap: clamp(3rem, 1vw + 1rem, 5rem);

    li {
      font-size: clamp(3rem, 1vw, 4rem);
    }
  }
}

@media (max-width: 1100px) {
  .footer-grid {
    grid-template-columns: 1fr auto 1fr;
    gap: clamp(2rem, 3vw + 1.5rem, 5rem);
  }
  .logoname {
    img {
      width: clamp(3rem, 4vw + 1rem, 6rem);
    }
    p {
      font-size: clamp(1.6rem, 2vw + 1rem, 3rem);
    }
  }
  .socials {
    /* gap: 3rem; */
    li {
      font-size: clamp(1rem, 1vw + 0.8rem, 1.8rem);
    }
  }
  .footer-heading {
    font-size: clamp(1.2rem, 1vw + 1rem, 2rem);
    margin-bottom: clamp(1rem, 2vw + 0.5rem, 2.5rem);
  }
  .nav-links {
    gap: clamp(0.8rem, 1vw + 0.4rem, 1.5rem);
  }
}
@media (max-width: 920px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr auto;
  }
  .cell1 {
    grid-column: 1 / 2;
    grid-row: 1;
  }
  .cell2 {
    grid-column: 1 / 2;
    grid-row: 3;
  }
  .cell3 {
    grid-column: 2 / -1;
    grid-row: 1 / 3;
  }
  .cell4 {
    grid-column: 1 / 2;
    grid-row: 2 / 2;
    margin-right: auto;
  }
  .email-input {
    font-size: clamp(1rem, 0.8vw + 0.8rem, 1.5rem);
    padding: clamp(0.6rem, 1vw + 0.4rem, 1rem) clamp(1rem, 2vw + 0.8rem, 1.5rem);
  }
  .subscribe-btn {
    padding: clamp(0.6rem, 1vw + 0.4rem, 1rem);
  }
  .cell5 {
    grid-column: 2 / -1;
    grid-row: 3;
  }
}
@media (max-width: 656px) {
  .footer-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.6fr 1fr 0.6fr auto;
    justify-items: start;
  }
  .cell1,
  .cell3,
  .cell4 {
    grid-column: 1 / -1;
  }
  .cell1 {
    grid-row: 1;
    width: 70%;
  }
  .cell3 {
    grid-row: 2;
  }
  .cell4 {
    grid-row: 3;
  }
  .cell2 {
    grid-column: 1 / 2;
    grid-row: 4;
  }
  .cell5 {
    grid-column: 2 / -1;
    grid-row: 4;
  }
}
@media (max-width: 375px) {
  .cell1 {
    width: 100%;
  }
}
</style>
