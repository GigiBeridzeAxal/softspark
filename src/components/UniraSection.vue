<script setup lang="ts">
import { ref } from 'vue'
import IconArrow from './IconArrow.vue'
import { links, unira, type StageState } from '@/data/site'
import { useReveal } from '@/composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(root)

const stateLabel: Record<StageState, string> = {
  done: 'Done',
  active: 'Running',
  queued: 'Queued',
}
</script>

<template>
  <section id="unira" ref="root" class="section section--band" aria-labelledby="unira-title">
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
            :style="{ '--d': `${i * 70}ms` }"
          >
            <h3>{{ f.title }}</h3>
            <p>{{ f.body }}</p>
          </li>
        </ul>

        <div class="unira__actions reveal" style="--d: 140ms">
          <a :href="links.uniraReleases" class="btn btn-primary" target="_blank" rel="noopener">
            {{ unira.primary }}
          </a>
          <a :href="links.uniraReleases" class="text-link" target="_blank" rel="noopener">
            {{ unira.secondary }}
            <IconArrow />
          </a>
        </div>
      </div>

      <!-- One quiet product frame. Illustrative; hidden from assistive tech. -->
      <figure class="unira__frame reveal" style="--d: 120ms" aria-hidden="true">
        <div class="frame__bar">
          <span class="frame__title">{{ unira.frame.title }}</span>
          <span class="frame__meta">{{ unira.frame.workflow }}</span>
        </div>
        <ol class="frame__stages">
          <li v-for="s in unira.frame.stages" :key="s.name" :class="`is-${s.state}`">
            <span class="frame__dot">
              <svg v-if="s.state === 'done'" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75">
                <path d="M4.5 8.5l2.25 2.25L11.5 5.75" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span class="frame__name">{{ s.name }}</span>
            <span class="frame__state">{{ stateLabel[s.state] }}</span>
            <span v-if="s.state === 'active'" class="frame__progress"><i /></span>
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

/* ---------- Product frame ---------- */
.unira__frame {
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--surface-raised);
  box-shadow: var(--shadow-1);
  overflow: hidden;
}

.frame__bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3rem;
  padding: 0 var(--space-5);
  border-bottom: 1px solid var(--line);
  font-size: var(--text-sm);
}

.frame__title {
  font-weight: 600;
  letter-spacing: -0.01em;
}

.frame__meta {
  color: var(--text-faint);
}

.frame__stages {
  padding: var(--space-2) var(--space-5) var(--space-3);
}

.frame__stages li {
  display: grid;
  grid-template-columns: 1rem minmax(0, 1fr) auto;
  column-gap: var(--space-3);
  row-gap: var(--space-3);
  align-items: center;
  padding-block: var(--space-4);
  font-size: var(--text-sm);
  color: var(--text-faint);
  border-bottom: 1px solid var(--line);
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

.is-active .frame__state {
  color: var(--accent);
}

.frame__dot {
  position: relative;
  display: grid;
  place-items: center;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid var(--line-strong);
}

.frame__dot svg {
  width: 100%;
  height: 100%;
  color: var(--paper);
}

.is-done .frame__dot {
  background: var(--ink);
  border-color: var(--ink);
}

.is-active .frame__dot {
  background: var(--accent);
  border-color: var(--accent);
}

/* Progress under the running stage: fills once when the frame is revealed. */
.frame__progress {
  grid-column: 2 / -1;
  position: relative;
  height: 2px;
  border-radius: 1px;
  background: var(--line);
  overflow: hidden;
}

.frame__progress i {
  position: absolute;
  inset: 0;
  width: 62%;
  border-radius: inherit;
  background: var(--accent);
  transform-origin: left;
}

.unira__frame.is-visible .frame__progress i {
  animation: fill 1400ms var(--ease-out) 600ms both;
}

@keyframes fill {
  from {
    transform: scaleX(0);
  }
}

/* Live indicator on the running stage: a soft ring, only if motion is welcome. */
@media (prefers-reduced-motion: no-preference) {
  .unira__frame.is-visible .is-active .frame__dot {
    animation: ring 2.4s var(--ease-std) 1.2s infinite;
  }
}

@keyframes ring {
  0% {
    box-shadow: 0 0 0 0 rgb(var(--ember-rgb) / 0.35);
  }
  70%,
  100% {
    box-shadow: 0 0 0 7px rgb(var(--ember-rgb) / 0);
  }
}
</style>
