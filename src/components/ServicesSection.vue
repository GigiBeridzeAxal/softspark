<script setup lang="ts">
import { ref } from 'vue'
import { services, servicesHead } from '@/data/site'
import { useReveal } from '@/composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(root)
</script>

<template>
  <section id="services" ref="root" class="services" aria-labelledby="services-title">
    <div class="shell statement services__head reveal">
      <p class="label">{{ servicesHead.eyebrow }}</p>
      <h2 id="services-title">{{ servicesHead.title }}</h2>
    </div>

    <ul class="grid-rule grid-rule--3 services__grid">
      <li
        v-for="(service, i) in services"
        :key="service.id"
        class="discipline reveal"
        :style="{ '--d': `${i * 90}ms` }"
      >
        <div class="slot" aria-hidden="true">{{ service.media }}</div>
        <h3>{{ service.title }}</h3>
        <p class="body-muted discipline__summary">{{ service.summary }}</p>
        <p class="label discipline__meta">{{ service.meta }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.services {
  padding-top: var(--section-y);
  border-top: 1px solid rgb(var(--paper-rgb) / 0.1);
}

.services__head h2 {
  max-width: 56rem;
}

.services__grid {
  margin-top: clamp(2.5rem, 5vw, 4rem);
}

.discipline {
  padding: clamp(1.5rem, 2.6vw, 2.125rem) clamp(1.25rem, 2.4vw, 1.875rem)
    clamp(1.75rem, 2.8vw, 2.25rem);
}

.discipline h3 {
  margin-top: var(--space-5);
}

.discipline__summary {
  margin-top: var(--space-2);
}

.discipline__meta {
  margin-top: var(--space-5);
  color: var(--text-faint);
}
</style>
