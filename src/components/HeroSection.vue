<script setup lang="ts">
import IconArrow from './IconArrow.vue'
import { cta, hero, links, services } from '@/data/site'
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-title">
    <div class="container">
      <p class="eyebrow hero__in" style="--i: 0">{{ hero.eyebrow }}</p>
      <h1 id="hero-title" class="hero__title hero__in" style="--i: 1">
        {{ hero.title }} <span class="hero__title-soft">{{ hero.titleEnd }}</span>
      </h1>

      <div class="hero__grid">
        <div class="hero__intro">
          <p class="lede hero__lede hero__in" style="--i: 2">{{ hero.lede }}</p>
          <div class="hero__actions hero__in" style="--i: 3">
            <a :href="links.contact" class="btn btn-primary">{{ cta.primary }}</a>
            <a href="#unira" class="text-link">
              {{ hero.secondary }}
              <IconArrow />
            </a>
          </div>
        </div>

        <ul class="hero__index" aria-label="Practice areas">
          <li v-for="(s, i) in services" :key="s.id" class="hero__in" :style="{ '--i': 4 + i }">
            <a href="#services">
              <span class="hero__index-num">{{ s.index }}</span>
              <span class="hero__index-label">{{ s.title }}</span>
              <IconArrow />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-block: clamp(4rem, 9vw, 8rem) clamp(4rem, 8vw, 7rem);
}

.hero__title {
  max-width: 22ch;
}

.hero__title-soft {
  color: var(--text-faint);
}

.hero__grid {
  display: grid;
  gap: clamp(2.5rem, 6vw, 4rem);
  align-items: start;
  margin-top: clamp(2.5rem, 5vw, 3.5rem);
}

@media (min-width: 64rem) {
  .hero__grid {
    grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
    gap: var(--space-10);
  }
}

.hero__lede {
  margin-top: 0;
  font-size: var(--text-lede);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3) var(--space-6);
  margin-top: var(--space-6);
}

/* Practice index: a numbered list with a rule that draws in. */
.hero__index {
  position: relative;
  display: grid;
}

.hero__index::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 1px;
  background: var(--line);
  transform-origin: left;
  animation: rule-in var(--dur-enter) var(--ease-out) both;
  animation-delay: calc(var(--enter-base) + 4 * var(--enter-step));
}

.hero__index a {
  display: grid;
  grid-template-columns: 2.25rem minmax(0, 1fr) auto;
  align-items: center;
  min-height: 3.5rem;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-muted);
  border-bottom: 1px solid var(--line);
  transition: color var(--dur) var(--ease-std);
}

.hero__index-num {
  font-variant-numeric: tabular-nums;
  color: var(--text-faint);
}

.hero__index svg {
  width: 1rem;
  height: 1rem;
  color: var(--text-faint);
  transition:
    transform var(--dur) var(--ease-out),
    color var(--dur) var(--ease-std);
}

@media (hover: hover) {
  .hero__index a:hover {
    color: var(--text);
  }
  .hero__index a:hover svg {
    color: var(--text);
    transform: translateX(2px);
  }
}

/* Entrance: one sequence shared with the nav, stepped by --i. */
.hero__in {
  animation: hero-in var(--dur-enter) var(--ease-out) both;
  animation-delay: calc(var(--enter-base) + var(--i, 0) * var(--enter-step));
}

@keyframes hero-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
}

@keyframes rule-in {
  from {
    transform: scaleX(0);
  }
}
</style>
