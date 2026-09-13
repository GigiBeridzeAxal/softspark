<script setup lang="ts">
import SparkMark from './SparkMark.vue'
import { links, navLinks } from '@/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <a href="#top" class="footer__logo" aria-label="Back to top">
          <SparkMark :size="26" />
          <span>Softspark</span>
        </a>
        <p>Web, AI and embedded engineering from Georgia. Makers of Unira.</p>
      </div>

      <nav class="footer__col" aria-label="Site">
        <h3>Site</h3>
        <ul>
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href">{{ link.label }}</a>
          </li>
          <li><a :href="links.contact">Contact</a></li>
        </ul>
      </nav>

      <nav class="footer__col" aria-label="Elsewhere">
        <h3>Elsewhere</h3>
        <ul>
          <li>
            <a :href="links.uniraReleases" target="_blank" rel="noopener">Unira releases</a>
          </li>
          <li>
            <a :href="links.github" target="_blank" rel="noopener">GitHub</a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="container footer__bottom">
      <p>© {{ year }} Softspark. All rights reserved.</p>
      <p class="footer__made">Built in Georgia 🇬🇪</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--ink-950);
  border-top: 1px solid var(--border);
  padding-block: var(--space-10) var(--space-6);
  color: var(--text-muted);
  font-size: var(--text-sm);
}

.footer__inner {
  display: grid;
  gap: var(--space-8);
}

@media (min-width: 48rem) {
  .footer__inner {
    grid-template-columns: 2fr 1fr 1fr;
  }
}

.footer__logo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--text);
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.footer__brand p {
  margin-top: var(--space-4);
  max-width: 24rem;
}

.footer__col h3 {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-faint);
  font-weight: 500;
  margin-bottom: var(--space-4);
}

.footer__col ul {
  display: grid;
  gap: var(--space-2);
}

.footer__col a {
  color: var(--paper-200);
  transition: color 0.2s var(--ease-out);
}

.footer__col a:hover {
  color: var(--ember-400);
}

.footer__bottom {
  margin-top: var(--space-10);
  padding-top: var(--space-5);
  border-top: 1px solid var(--border);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-3);
  font-size: var(--text-xs);
  color: var(--text-faint);
}
</style>
