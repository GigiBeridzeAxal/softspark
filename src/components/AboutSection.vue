<script setup lang="ts">
import { ref } from 'vue'
import { principles } from '@/data/site'
import { useReveal } from '@/composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(() => root.value)
</script>

<template>
  <section id="about" ref="root" class="section about" aria-labelledby="about-title">
    <div class="container about__inner">
      <header class="section-head about__head reveal">
        <p class="eyebrow">About Softspark</p>
        <h2 id="about-title" class="section-title">
          A studio in Georgia where <em>craft</em> and engineering share a desk.
        </h2>
        <p class="section-lede">
          Softspark is a software company and tech hub based in Georgia, the country between the
          Black Sea and the Caucasus. We work with founders, product teams and hardware makers who
          want thoughtful engineering rather than the fastest possible prototype.
        </p>
        <p class="about__location">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M8 14s4.5-4 4.5-7.5A4.5 4.5 0 0 0 3.5 6.5C3.5 10 8 14 8 14Z" stroke-linejoin="round" />
            <circle cx="8" cy="6.5" r="1.5" />
          </svg>
          Georgia · working with teams worldwide
        </p>
      </header>

      <ul class="about__principles">
        <li
          v-for="(p, i) in principles"
          :key="p.title"
          class="about__principle reveal"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <span class="about__num">{{ String(i + 1).padStart(2, '0') }}</span>
          <div>
            <h3>{{ p.title }}</h3>
            <p>{{ p.body }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.about {
  border-top: 1px solid var(--border);
  background: linear-gradient(180deg, var(--ink-900), var(--ink-950));
}

.about__inner {
  display: grid;
  gap: clamp(2.5rem, 5vw, 5rem);
}

@media (min-width: 64rem) {
  .about__inner {
    grid-template-columns: 5fr 6fr;
    align-items: start;
  }
  .about__head {
    position: sticky;
    top: calc(var(--nav-h) + 2rem);
    margin-bottom: 0;
  }
}

.about__location {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-6);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-faint);
}

.about__location svg {
  width: 1rem;
  height: 1rem;
  color: var(--ember-500);
}

.about__principles {
  display: grid;
}

.about__principle {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-5);
  padding-block: var(--space-6);
  border-top: 1px solid var(--border);
}

.about__principle:last-child {
  border-bottom: 1px solid var(--border);
}

.about__num {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-style: italic;
  color: var(--ember-500);
  line-height: 1;
  min-width: 2.5ch;
}

.about__principle h3 {
  font-size: var(--text-xl);
  line-height: 1.2;
}

.about__principle p {
  margin-top: var(--space-3);
  color: var(--text-muted);
  max-width: 34rem;
}
</style>
