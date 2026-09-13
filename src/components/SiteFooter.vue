<script setup lang="ts">
import SparkMark from './SparkMark.vue'
import { contact, footer, links, navLinks } from '@/data/site'

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
        <a :href="links.contact" class="footer__email">{{ contact.email }}</a>
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
    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr);
  }
}

.footer__logo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  min-height: 2.5rem;
  color: var(--text);
  font-weight: 600;
  letter-spacing: -0.02em;
  border-radius: var(--radius-sm);
}

.footer__brand p {
  margin-top: var(--space-3);
  max-width: 22rem;
}

.footer__email {
  display: inline-flex;
  align-items: center;
  min-height: 2.5rem;
  margin-top: var(--space-2);
  font-weight: 500;
  color: var(--text);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-decoration-color: var(--line-strong);
  text-underline-offset: 0.3em;
  transition: text-decoration-color var(--dur) var(--ease-std);
}

.footer__col h3 {
  font-size: var(--text-xs);
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: var(--space-3);
}

.footer__col ul {
  display: grid;
}

.footer__col a {
  display: inline-flex;
  align-items: center;
  min-height: 2.5rem;
  color: var(--text);
  transition: color var(--dur) var(--ease-std);
}

@media (pointer: coarse) {
  .footer__col a,
  .footer__email {
    min-height: 2.75rem;
  }
}

@media (hover: hover) {
  .footer__col a:hover {
    color: var(--accent);
  }
  .footer__email:hover {
    text-decoration-color: var(--accent);
  }
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
