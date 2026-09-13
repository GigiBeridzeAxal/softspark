<script setup lang="ts">
import { ref } from 'vue'
import { about } from '@/data/site'
import { useReveal } from '@/composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(root)
</script>

<template>
  <section id="studio" ref="root" class="studio" aria-labelledby="studio-title">
    <div class="shell statement studio__head reveal">
      <p class="label">{{ about.eyebrow }}</p>
      <h2 id="studio-title">{{ about.title }}</h2>
    </div>

    <ul class="grid-rule grid-rule--3 studio__grid">
      <li
        v-for="(principle, i) in about.principles"
        :key="principle.title"
        class="principle reveal"
        :style="{ '--d': `${i * 90}ms` }"
      >
        <span class="label principle__num">{{ String(i + 1).padStart(2, '0') }}</span>
        <h3>{{ principle.title }}</h3>
        <p class="body-muted principle__body">{{ principle.body }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.studio {
  padding-top: var(--section-y);
  border-top: 1px solid var(--line);
}

.studio__head h2 {
  max-width: 44rem;
}

.studio__grid {
  margin-top: clamp(2.5rem, 5vw, 4rem);
}

.principle {
  padding: clamp(1.5rem, 2.6vw, 2.125rem) clamp(1.25rem, 2.4vw, 1.875rem)
    clamp(1.75rem, 2.8vw, 2.25rem);
}

.principle__num {
  display: block;
  color: var(--text-faint);
  font-variant-numeric: tabular-nums;
}

.principle h3 {
  margin-top: clamp(1.75rem, 3vw, 2.5rem);
}

.principle__body {
  margin-top: var(--space-2);
}
</style>
