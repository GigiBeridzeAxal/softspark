<script setup lang="ts">
import { ref } from 'vue'
import { links, uniraFeatures } from '@/data/site'
import { useReveal } from '@/composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(() => root.value)

const agents = [
  { name: 'planner', stage: 'plan', state: 'done', pct: 100 },
  { name: 'builder', stage: 'implement', state: 'running', pct: 62 },
  { name: 'reviewer', stage: 'review', state: 'waiting', pct: 0 },
  { name: 'tester', stage: 'test', state: 'waiting', pct: 0 },
]
</script>

<template>
  <section id="unira" ref="root" class="section unira" aria-labelledby="unira-title">
    <div class="unira__bg" aria-hidden="true" />
    <div class="container unira__inner">
      <div class="unira__copy">
        <header class="section-head reveal">
          <p class="eyebrow">Product spotlight</p>
          <h2 id="unira-title" class="section-title">
            Unira. AI coding teams you can <em>actually see</em>.
          </h2>
          <p class="section-lede">
            Unira is a desktop orchestrator for workflow-driven teams of AI coding CLIs. Instead of
            one opaque assistant, you define a workflow, assign agents to its stages, and watch
            each one work in its own visible terminal.
          </p>
        </header>

        <ul class="unira__features">
          <li
            v-for="(f, i) in uniraFeatures"
            :key="f.title"
            class="reveal"
            :style="{ transitionDelay: `${i * 80}ms` }"
          >
            <h3>{{ f.title }}</h3>
            <p>{{ f.body }}</p>
          </li>
        </ul>

        <div class="unira__actions reveal">
          <a :href="links.uniraReleases" class="btn btn-primary" target="_blank" rel="noopener">
            Download from GitHub releases
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
              <path d="M8 2v8M4.5 6.5 8 10l3.5-3.5M3 13h10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          <a :href="links.uniraReleases" class="btn-link" target="_blank" rel="noopener">
            View release notes
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <div class="unira__visual reveal" aria-hidden="true">
        <div class="unira__window glass">
          <div class="unira__titlebar">
            <span class="unira__title-dot" />
            <span>Unira — release-pipeline</span>
            <span class="unira__badge">4 agents</span>
          </div>

          <div class="unira__flow">
            <template v-for="(a, i) in agents" :key="a.name">
              <span class="unira__stage" :class="`is-${a.state}`">{{ a.stage }}</span>
              <span v-if="i < agents.length - 1" class="unira__arrow">→</span>
            </template>
          </div>

          <ul class="unira__agents">
            <li v-for="a in agents" :key="a.name" :class="`is-${a.state}`">
              <div class="unira__agent-head">
                <span class="unira__agent-name">{{ a.name }}</span>
                <span class="unira__agent-state">{{ a.state }}</span>
              </div>
              <div class="unira__bar">
                <span :style="{ width: `${a.pct}%` }" />
              </div>
              <pre class="unira__term"><code v-if="a.state === 'done'">✓ wrote plan.md · 3 tasks
✓ handed off to builder</code><code v-else-if="a.state === 'running'">› editing src/api/client.ts
› running typecheck…</code><code v-else>○ waiting for {{ a.stage === 'review' ? 'implement' : 'review' }}</code></pre>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.unira {
  border-top: 1px solid var(--border);
  overflow: hidden;
}

.unira__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(50% 40% at 85% 20%, rgba(240, 138, 60, 0.14), transparent 70%),
    linear-gradient(180deg, transparent, rgba(12, 11, 10, 0.6));
}

.unira__inner {
  position: relative;
  display: grid;
  gap: clamp(2.5rem, 5vw, 5rem);
  align-items: start;
}

@media (min-width: 64rem) {
  .unira__inner {
    grid-template-columns: 1fr 1fr;
  }
  .unira__visual {
    position: sticky;
    top: calc(var(--nav-h) + 2rem);
  }
}

.unira__features {
  display: grid;
  gap: var(--space-5);
}

@media (min-width: 40rem) {
  .unira__features {
    grid-template-columns: 1fr 1fr;
  }
}

.unira__features li {
  padding-left: var(--space-4);
  border-left: 2px solid var(--ember-600);
}

.unira__features h3 {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-base);
  letter-spacing: 0;
}

.unira__features p {
  margin-top: var(--space-2);
  font-size: var(--text-sm);
  color: var(--text-muted);
}

.unira__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-5);
  margin-top: var(--space-8);
}

/* Visual */
.unira__window {
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  box-shadow: var(--shadow-glow);
}

.unira__titlebar {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: 0 var(--space-2) var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--text-muted);
}

.unira__title-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--ember-500);
}

.unira__badge {
  margin-left: auto;
  padding: 2px 8px;
  border-radius: var(--radius-pill);
  background: var(--ink-700);
  color: var(--paper-200);
}

.unira__flow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: var(--radius-md);
  background: rgba(12, 11, 10, 0.55);
  border: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}

.unira__stage {
  padding: 4px 10px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-strong);
  color: var(--text-muted);
}

.unira__stage.is-done {
  border-color: rgba(143, 209, 158, 0.5);
  color: #8fd19e;
}

.unira__stage.is-running {
  border-color: var(--ember-500);
  background: rgba(240, 138, 60, 0.15);
  color: var(--ember-300);
}

.unira__arrow {
  color: var(--text-faint);
}

.unira__agents {
  display: grid;
  gap: var(--space-3);
  margin-top: var(--space-3);
}

@media (min-width: 30rem) {
  .unira__agents {
    grid-template-columns: 1fr 1fr;
  }
}

.unira__agents li {
  padding: var(--space-3);
  border-radius: var(--radius-md);
  background: rgba(12, 11, 10, 0.55);
  border: 1px solid var(--border);
}

.unira__agents li.is-running {
  border-color: rgba(240, 138, 60, 0.5);
}

.unira__agent-head {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--paper-200);
}

.unira__agent-state {
  color: var(--text-faint);
}
.is-running .unira__agent-state {
  color: var(--ember-400);
}
.is-done .unira__agent-state {
  color: #8fd19e;
}

.unira__bar {
  height: 3px;
  margin-top: var(--space-3);
  border-radius: 2px;
  background: var(--ink-700);
  overflow: hidden;
}

.unira__bar span {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, var(--ember-600), var(--ember-400));
  transition: width 1.2s var(--ease-out);
}

.is-done .unira__bar span {
  background: #8fd19e;
}

.unira__term {
  margin: var(--space-3) 0 0;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  line-height: 1.6;
  color: var(--text-muted);
  white-space: pre-wrap;
}

.is-running .unira__term {
  color: var(--paper-200);
}
</style>
