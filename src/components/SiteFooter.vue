<script setup lang="ts">
import { footer, links } from '@/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="shell footer__inner">
      <p class="label footer__place">© {{ year }} {{ footer.place }}</p>

      <nav class="footer__links" aria-label="Elsewhere">
        <a class="label" :href="links.uniraReleases" target="_blank" rel="noopener">
          Unira releases
        </a>
        <a class="label" :href="links.github" target="_blank" rel="noopener">GitHub</a>
        <a class="label" href="#top">Back to top</a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
/* Sits in the same block as the closing line — no rule between them. */
.footer {
  padding-block: clamp(2.5rem, 4.4vw, 3.5rem) clamp(3rem, 7vw, 5.5rem);
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3) var(--space-6);
}

.footer__place {
  letter-spacing: 0.1em;
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2) var(--space-5);
}

.footer__links a {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  letter-spacing: 0.1em;
  transition: color var(--dur) var(--ease-std);
}

@media (hover: hover) {
  .footer__links a:hover {
    color: var(--text);
  }
}
</style>
