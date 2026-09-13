<script setup lang="ts">
import { ref } from 'vue'
import { services } from '@/data/site'
import { useReveal } from '@/composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(() => root.value)
</script>

<template>
  <section id="services" ref="root" class="section services" aria-labelledby="services-title">
    <div class="container">
      <header class="section-head reveal">
        <p class="eyebrow">Services</p>
        <h2 id="services-title" class="section-title">
          Three disciplines, <em>one</em> engineering culture.
        </h2>
        <p class="section-lede">
          Most projects touch more than one layer. We staff them so the web, model and device
          work is designed together rather than stitched together at the end.
        </p>
      </header>

      <ul class="services__grid">
        <li
          v-for="(service, i) in services"
          :key="service.id"
          class="card service reveal"
          :style="{ transitionDelay: `${i * 90}ms` }"
        >
          <div class="service__top">
            <span class="service__icon" aria-hidden="true">
              <svg
                v-if="service.icon === 'web'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="4" width="18" height="16" rx="2.5" />
                <path d="M3 9h18M8 6.5h.01M11 6.5h.01" />
                <path d="M9 17l2-4 2 2 2-3" />
              </svg>
              <svg
                v-else-if="service.icon === 'ai'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="2.5" />
                <circle cx="5" cy="6" r="1.5" />
                <circle cx="19" cy="6" r="1.5" />
                <circle cx="5" cy="18" r="1.5" />
                <circle cx="19" cy="18" r="1.5" />
                <path d="M6.3 7l3.8 3.3M17.7 7l-3.8 3.3M6.3 17l3.8-3.3M17.7 17l-3.8-3.3" />
              </svg>
              <svg
                v-else
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="7" y="7" width="10" height="10" rx="2" />
                <path d="M10 10h4v4h-4z" />
                <path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" />
              </svg>
            </span>
            <span class="service__index">{{ service.index }}</span>
          </div>

          <h3 class="service__title">{{ service.title }}</h3>
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
  border-top: 1px solid var(--border);
}

.services__grid {
  display: grid;
  gap: var(--space-4);
}

@media (min-width: 48rem) {
  .services__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.service {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.service::before {
  content: '';
  position: absolute;
  inset: 0 auto auto 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--ember-500), transparent 80%);
  opacity: 0;
  transform: translateX(-30%);
  transition:
    opacity 0.4s var(--ease-out),
    transform 0.4s var(--ease-out);
}

.service:hover::before {
  opacity: 1;
  transform: none;
}

.service__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-6);
}

.service__icon {
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  border-radius: var(--radius-md);
  background: linear-gradient(160deg, rgba(240, 138, 60, 0.22), rgba(240, 138, 60, 0.05));
  border: 1px solid rgba(240, 138, 60, 0.3);
  color: var(--ember-400);
}

.service__icon svg {
  width: 1.5rem;
  height: 1.5rem;
}

.service__index {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--text-faint);
  letter-spacing: 0.1em;
}

.service__title {
  font-size: var(--text-xl);
  line-height: 1.2;
}

.service__summary {
  margin-top: var(--space-3);
  color: var(--text-muted);
  font-size: var(--text-sm);
  flex: 1;
}

.service__points {
  margin-top: var(--space-6);
  padding-top: var(--space-4);
  border-top: 1px solid var(--border);
  display: grid;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--paper-200);
}

.service__points li {
  display: flex;
  gap: var(--space-3);
  align-items: baseline;
}

.service__points li::before {
  content: '';
  flex: none;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--ember-500);
  transform: translateY(-1px);
}
</style>
