<script setup lang="ts">
import { ref } from 'vue'
import { services, servicesHead } from '@/data/site'
import { useReveal } from '@/composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(root)
</script>

<template>
  <section id="services" ref="root" class="section" aria-labelledby="services-title">
    <div class="container">
      <header class="section-head reveal">
        <p class="eyebrow">{{ servicesHead.eyebrow }}</p>
        <h2 id="services-title">{{ servicesHead.title }}</h2>
        <p class="lede">{{ servicesHead.lede }}</p>
      </header>

      <ul class="services">
        <li
          v-for="(service, i) in services"
          :key="service.id"
          class="service reveal"
          :style="{ '--d': `${i * 70}ms` }"
        >
          <span class="service__index">{{ service.index }}</span>
          <h3>{{ service.title }}</h3>
          <p class="service__summary">{{ service.summary }}</p>
          <ul class="service__points">
            <li v-for="point in service.points" :key="point">{{ point }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.services {
  display: grid;
}

.service {
  padding-block: var(--space-6);
  border-top: 1px solid var(--line);
}

@media (min-width: 56rem) {
  .services {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-6);
  }
  .service {
    padding: var(--space-2) 0 0;
    border-top: 0;
  }
  .service + .service {
    padding-left: var(--space-5);
    border-left: 1px solid var(--line);
  }
}

.service__index {
  display: block;
  font-size: var(--text-sm);
  font-weight: 500;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
  color: var(--text-faint);
  margin-bottom: var(--space-6);
}

.service__summary {
  margin-top: var(--space-3);
  max-width: var(--prose);
  color: var(--text-muted);
}

.service__points {
  margin-top: var(--space-5);
  display: grid;
  gap: var(--space-2);
  font-size: var(--text-sm);
  font-weight: 500;
}

.service__points li {
  display: flex;
  gap: var(--space-3);
  align-items: baseline;
}

.service__points li::before {
  content: '';
  flex: none;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent);
  transform: translateY(-2px);
}
</style>
