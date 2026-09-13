<script setup lang="ts">
import { ref } from 'vue'
import { links, unira } from '@/data/site'
import { useReveal } from '@/composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(() => root.value)
</script>

<template>
  <section id="unira" ref="root" class="section" aria-labelledby="unira-title">
    <div class="container unira">
      <div class="unira__copy">
        <header class="section-head reveal">
          <p class="eyebrow">{{ unira.eyebrow }}</p>
          <h2 id="unira-title">{{ unira.title }}</h2>
          <p class="lede">{{ unira.lede }}</p>
        </header>

        <ul class="unira__features">
          <li
            v-for="(f, i) in unira.features"
            :key="f.title"
            class="reveal"
            :style="{ transitionDelay: `${i * 60}ms` }"
          >
            <h3>{{ f.title }}</h3>
            <p>{{ f.body }}</p>
          </li>
        </ul>

        <div class="unira__actions reveal">
          <a :href="links.uniraReleases" class="btn btn-primary" target="_blank" rel="noopener">
            {{ unira.primary }}
          </a>
          <a :href="links.uniraReleases" class="text-link" target="_blank" rel="noopener">
            {{ unira.secondary }}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <figure class="unira__frame reveal" aria-hidden="true">
        <div class="frame__bar">
          <span class="frame__title">Unira</span>
          <span class="frame__meta">release-pipeline</span>
        </div>
        <ol class="frame__stages">
          <li v-for="s in unira.stages" :key="s.name" :class="`is-${s.state}`">
            <span class="frame__dot" />
            <span class="frame__name">{{ s.name }}</span>
            <span class="frame__state">{{ s.state }}</span>
          </li>
        </ol>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.unira {
  display: grid;
  gap: clamp(3rem, 6vw, 5rem);
  align-items: start;
}

@media (min-width: 64rem) {
  .unira {
    grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
  }
  .unira__frame {
    position: sticky;
    top: calc(var(--nav-h) + 3rem);
  }
}

.unira__features {
  display: grid;
  gap: var(--space-5);
  max-width: var(--prose);
}

.unira__features li {
  padding-top: var(--space-5);
  border-top: 1px solid var(--line);
}

.unira__features h3 {
  font-size: var(--text-base);
}

.unira__features p {
  margin-top: var(--space-2);
  color: var(--text-muted);
}

.unira__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3) var(--space-6);
  margin-top: var(--space-8);
}

/* One quiet product frame */
.unira__frame {
  margin: 0;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--surface);
  overflow: hidden;
}

.frame__bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-4) var(--space-5);
  border-bottom: 1px solid var(--line);
  font-size: var(--text-sm);
}

.frame__title {
  font-weight: 600;
}

.frame__meta {
  color: var(--text-faint);
}

.frame__stages {
  margin: 0;
  padding: var(--space-3) var(--space-5);
  list-style: none;
}

.frame__stages li {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--space-3);
  min-height: 3.25rem;
  font-size: var(--text-sm);
  border-bottom: 1px solid var(--line);
  color: var(--text-faint);
}

.frame__stages li:last-child {
  border-bottom: 0;
}

.frame__stages li.is-done,
.frame__stages li.is-active {
  color: var(--text);
}

.frame__name {
  font-weight: 500;
}

.frame__state {
  color: var(--text-faint);
}

.frame__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1.5px solid var(--line-strong);
}

.is-done .frame__dot {
  background: var(--ink);
  border-color: var(--ink);
}

.is-active .frame__dot {
  background: var(--accent);
  border-color: var(--accent);
}

.is-active .frame__state {
  color: var(--accent);
}
</style>
