<script setup lang="ts">
import { ref } from 'vue'
import { stats } from '@/data/site'
import { useReveal } from '@/composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(root)
</script>

<template>
  <section ref="root" class="stats" aria-label="Softspark in numbers">
    <ul class="shell stats__inner">
      <li v-for="(stat, i) in stats" :key="stat.caption" class="stat reveal" :style="{ '--d': `${i * 90}ms` }">
        <span class="stat__value">{{ stat.value }}</span>
        <span class="label stat__caption">{{ stat.caption }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.stats {
  padding-block: clamp(3.5rem, 6.6vw, 5.25rem);
}

.stats__inner {
  display: grid;
  gap: clamp(2.5rem, 4vw, 2.5rem);
  text-align: center;
}

@media (min-width: 48rem) {
  .stats__inner {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* Scale is the whole argument here: Archivo at 600, tight. */
.stat__value {
  display: block;
  font-size: var(--stat);
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.045em;
  font-variant-numeric: tabular-nums;
}

.stat__caption {
  display: block;
  margin: var(--space-3) auto 0;
  max-width: 18ch;
  line-height: 1.5;
  letter-spacing: 0.12em;
  text-wrap: balance;
}
</style>
