<script setup lang="ts">
import { links } from '@/data/site'

const disciplines = ['Web', 'AI / ML', 'Embedded']
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-title">
    <div class="hero__glow" aria-hidden="true" />
    <div class="hero__grid" aria-hidden="true" />

    <div class="container hero__inner">
      <div class="hero__copy">
        <p class="hero__kicker">
          <span class="hero__dot" aria-hidden="true" />
          Georgia · Software &amp; hardware studio
        </p>

        <h1 id="hero-title" class="hero__title">
          Georgia's tech hub for <em>web</em>, <em>AI</em> and <em>embedded</em> engineering.
        </h1>

        <p class="hero__lede">
          Softspark designs and builds software end to end: custom web apps, trained and evaluated
          AI models, and the firmware-adjacent systems that connect devices to everything else.
          We also make Unira, a desktop orchestrator for visible AI coding teams.
        </p>

        <div class="hero__actions">
          <a :href="links.contact" class="btn btn-primary">
            Start a project
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          <a href="#unira" class="btn btn-ghost">Explore Unira</a>
        </div>

        <ul class="hero__disciplines" aria-label="Disciplines">
          <li v-for="d in disciplines" :key="d">{{ d }}</li>
        </ul>
      </div>

      <div class="hero__visual" aria-hidden="true">
        <div class="hero__panel glass">
          <div class="hero__panel-bar">
            <i /><i /><i />
            <span>softspark · workflow</span>
          </div>
          <ol class="hero__steps">
            <li class="is-done">
              <span class="hero__step-tag">plan</span>
              <span class="hero__step-text">Scope product &amp; architecture</span>
              <span class="hero__step-state">done</span>
            </li>
            <li class="is-done">
              <span class="hero__step-tag">web</span>
              <span class="hero__step-text">Ship the front-end &amp; design system</span>
              <span class="hero__step-state">done</span>
            </li>
            <li class="is-active">
              <span class="hero__step-tag">ai</span>
              <span class="hero__step-text">Fine-tune &amp; evaluate the model</span>
              <span class="hero__step-state">running</span>
            </li>
            <li>
              <span class="hero__step-tag">embedded</span>
              <span class="hero__step-text">Flash firmware, wire telemetry</span>
              <span class="hero__step-state">queued</span>
            </li>
          </ol>
          <pre class="hero__log"><code><span class="c-muted">$</span> unira run release-pipeline
<span class="c-ok">✓</span> plan        agent-1   1m 42s
<span class="c-ok">✓</span> web         agent-2   6m 03s
<span class="c-ember">●</span> ai          agent-3   evaluating…
<span class="c-muted">○</span> embedded    agent-4   waiting</code></pre>
        </div>
        <div class="hero__orbit hero__orbit--a" />
        <div class="hero__orbit hero__orbit--b" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding-block: clamp(3.5rem, 8vw, 7rem) clamp(4rem, 8vw, 7rem);
  overflow: hidden;
  isolation: isolate;
}

.hero__glow {
  position: absolute;
  inset: -20% -10% auto -10%;
  height: 80%;
  background:
    radial-gradient(60% 55% at 70% 30%, rgba(240, 138, 60, 0.28), transparent 70%),
    radial-gradient(40% 40% at 20% 20%, rgba(249, 181, 107, 0.12), transparent 70%);
  filter: blur(40px);
  z-index: -2;
  pointer-events: none;
}

.hero__grid {
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image:
    linear-gradient(to right, rgba(247, 242, 234, 0.045) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(247, 242, 234, 0.045) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%);
  pointer-events: none;
}

.hero__inner {
  display: grid;
  gap: clamp(2.5rem, 5vw, 4rem);
  align-items: center;
}

@media (min-width: 64rem) {
  .hero__inner {
    grid-template-columns: 1.15fr 1fr;
  }
}

.hero__kicker {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: var(--space-5);
  animation: rise 0.8s var(--ease-out) both;
}

.hero__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--ember-500);
  box-shadow: 0 0 0 4px var(--accent-glow);
}

.hero__title {
  font-size: var(--text-hero);
  line-height: 0.98;
  animation: rise 0.9s var(--ease-out) 0.05s both;
}

.hero__title em {
  font-style: italic;
  font-weight: 300;
  color: var(--ember-400);
}

.hero__lede {
  margin-top: var(--space-6);
  font-size: var(--text-lg);
  color: var(--text-muted);
  max-width: 34rem;
  animation: rise 0.9s var(--ease-out) 0.12s both;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-8);
  animation: rise 0.9s var(--ease-out) 0.2s both;
}

.hero__disciplines {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  margin-top: var(--space-8);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-faint);
  animation: rise 0.9s var(--ease-out) 0.28s both;
}

.hero__disciplines li::before {
  content: '/ ';
  color: var(--ember-600);
}

/* Visual */
.hero__visual {
  position: relative;
  animation: rise 1s var(--ease-out) 0.25s both;
}

.hero__panel {
  position: relative;
  z-index: 1;
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  box-shadow: var(--shadow-glow);
}

.hero__panel-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 var(--space-2) var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--text-faint);
}

.hero__panel-bar i {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--ink-600);
}

.hero__panel-bar span {
  margin-left: auto;
}

.hero__steps {
  display: grid;
  gap: var(--space-2);
  margin: 0;
  padding: 0;
  list-style: none;
}

.hero__steps li {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--space-3);
  padding: 0.7rem 0.875rem;
  border-radius: var(--radius-md);
  background: rgba(12, 11, 10, 0.5);
  border: 1px solid var(--border);
  font-size: var(--text-sm);
  color: var(--text-muted);
}

.hero__steps li.is-active {
  border-color: rgba(240, 138, 60, 0.5);
  color: var(--text);
  box-shadow: inset 0 0 0 1px rgba(240, 138, 60, 0.15);
}

.hero__steps li.is-done {
  color: var(--text);
}

.hero__step-tag {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  padding: 2px 8px;
  border-radius: var(--radius-pill);
  background: var(--ink-700);
  color: var(--paper-200);
}

.is-active .hero__step-tag {
  background: var(--ember-500);
  color: var(--on-accent);
}

.hero__step-state {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--text-faint);
}

.is-active .hero__step-state {
  color: var(--ember-400);
}

.is-active .hero__step-state::after {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-left: 6px;
  border-radius: 50%;
  background: var(--ember-400);
  animation: pulse 1.4s ease-in-out infinite;
  vertical-align: middle;
}

.hero__log {
  margin: var(--space-4) 0 0;
  padding: var(--space-4);
  border-radius: var(--radius-md);
  background: var(--ink-950);
  border: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  line-height: 1.7;
  color: var(--paper-200);
  overflow-x: auto;
}

.c-muted {
  color: var(--text-faint);
}
.c-ok {
  color: #8fd19e;
}
.c-ember {
  color: var(--ember-400);
}

.hero__orbit {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(240, 138, 60, 0.18);
  pointer-events: none;
}

.hero__orbit--a {
  inset: -12% -8% auto auto;
  width: 46%;
  aspect-ratio: 1;
  animation: spin 40s linear infinite;
  border-style: dashed;
}

.hero__orbit--b {
  inset: auto auto -14% -10%;
  width: 34%;
  aspect-ratio: 1;
  background: radial-gradient(circle, rgba(240, 138, 60, 0.18), transparent 70%);
  border: 0;
  filter: blur(6px);
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.35;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
