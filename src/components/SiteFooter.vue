<script setup lang="ts">
import SparkMark from './SparkMark.vue'
import { footer, links, navLinks } from '@/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <a href="#top" class="footer__logo" aria-label="Back to top">
          <SparkMark :size="24" />
          <span>Softspark</span>
        </a>
        <p>{{ footer.blurb }}</p>
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
          <li><a :href="links.uniraReleases" target="_blank" rel="noopener">Unira releases</a></li>
          <li><a :href="links.github" target="_blank" rel="noopener">GitHub</a></li>
        </ul>
      </nav>
    </div>

    <div class="container footer__bottom">
      <p>© {{ year }} Softspark. All rights reserved.</p>
      <p>Georgia</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding-block: var(--space-10) var(--space-6);
  font-size: var(--text-sm);
  color: var(--text-muted);
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
  font-weight: 600;
  letter-spacing: -0.02em;
}

.footer__brand p {
  margin-top: var(--space-4);
  max-width: 22rem;
}

.footer__col h3 {
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: var(--space-4);
}

.footer__col ul {
  display: grid;
  gap: var(--space-1);
}

.footer__col a {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  color: var(--text);
  transition: color var(--dur) var(--ease);
}

.footer__col a:hover {
  color: var(--accent);
}

.footer__bottom {
  margin-top: var(--space-10);
  padding-top: var(--space-5);
  border-top: 1px solid var(--line);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-3);
  color: var(--text-faint);
}
</style>
