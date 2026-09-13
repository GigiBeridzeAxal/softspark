<script setup lang="ts">
import { ref } from 'vue'
import { about } from '@/data/site'
import { useReveal } from '@/composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(root)
</script>

<template>
  <section id="about" ref="root" class="section" aria-labelledby="about-title">
    <div class="container about">
      <header class="section-head about__head reveal">
        <p class="eyebrow">{{ about.eyebrow }}</p>
        <h2 id="about-title">{{ about.title }}</h2>
        <p class="lede">{{ about.lede }}</p>
      </header>

      <ul class="about__principles">
        <li
          v-for="(p, i) in about.principles"
          :key="p.title"
          class="principle reveal"
          :style="{ '--d': `${i * 70}ms` }"
        >
          <span class="principle__num">{{ String(i + 1).padStart(2, '0') }}</span>
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
  display: grid;
  gap: clamp(2.5rem, 5vw, 5rem);
}

@media (min-width: 64rem) {
  .about {
    grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
    align-items: start;
  }
  .about__head {
    position: sticky;
    top: calc(var(--nav-h) + 3rem);
    margin-bottom: 0;
  }
}

.principle {
  display: grid;
  grid-template-columns: 3rem minmax(0, 1fr);
  gap: var(--space-4);
  padding-block: var(--space-6);
  border-top: 1px solid var(--line);
}

.principle:last-child {
  border-bottom: 1px solid var(--line);
}

.principle__num {
  font-size: var(--text-sm);
  font-weight: 500;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
  color: var(--text-faint);
  padding-top: 0.125rem;
}

.principle p {
  margin-top: var(--space-2);
  color: var(--text-muted);
  max-width: 32rem;
}
</style>
