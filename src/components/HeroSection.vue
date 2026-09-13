<script setup lang="ts">
import { cta, hero, links, services } from '@/data/site'
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-title">
    <div class="container">
      <p class="eyebrow hero__in">{{ hero.eyebrow }}</p>
      <h1 id="hero-title" class="hero__title hero__in">{{ hero.title }}</h1>
      <p class="lede hero__in">{{ hero.lede }}</p>

      <div class="hero__actions hero__in">
        <a :href="links.contact" class="btn btn-primary">{{ cta.primary }}</a>
        <a href="#unira" class="text-link">
          {{ hero.secondary }}
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>

      <ul class="hero__index hero__in" aria-label="Practice areas">
        <li v-for="s in services" :key="s.id">
          <a href="#services">
            <span class="hero__index-num">{{ s.index }}</span>
            <span>{{ s.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-block: clamp(4rem, 10vw, 8.5rem) clamp(4rem, 8vw, 6.5rem);
}

.hero__title {
  max-width: 18ch;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3) var(--space-6);
  margin-top: var(--space-8);
}

.hero__index {
  display: grid;
  gap: 0;
  margin-top: clamp(3.5rem, 8vw, 6rem);
  border-top: 1px solid var(--line);
}

@media (min-width: 48rem) {
  .hero__index {
    grid-template-columns: repeat(3, 1fr);
  }
}

.hero__index a {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  min-height: 3rem;
  padding-block: var(--space-4);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-muted);
  border-bottom: 1px solid var(--line);
  transition: color var(--dur) var(--ease);
}

@media (min-width: 48rem) {
  .hero__index a {
    border-bottom: 0;
    padding-right: var(--space-5);
  }
}

.hero__index a:hover {
  color: var(--text);
}

.hero__index-num {
  font-variant-numeric: tabular-nums;
  color: var(--text-faint);
}

.hero__in {
  animation: hero-in var(--dur) var(--ease) both;
}

.hero__in:nth-child(2) {
  animation-delay: 40ms;
}
.hero__in:nth-child(3) {
  animation-delay: 80ms;
}
.hero__in:nth-child(4) {
  animation-delay: 120ms;
}
.hero__in:nth-child(5) {
  animation-delay: 160ms;
}

@keyframes hero-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
