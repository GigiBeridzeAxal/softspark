<script setup lang="ts">
import { ref } from 'vue'
import { links } from '@/data/site'
import { useReveal } from '@/composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(() => root.value)
</script>

<template>
  <section ref="root" class="cta" aria-labelledby="cta-title">
    <div class="container">
      <div class="cta__band reveal">
        <div class="cta__glow" aria-hidden="true" />
        <div class="cta__copy">
          <p class="eyebrow">Let's build</p>
          <h2 id="cta-title" class="cta__title">
            Have a product, a model, or a device that needs <em>finishing</em>?
          </h2>
          <p class="cta__lede">
            Tell us what you're building. We'll reply with an honest read on scope, approach and
            where Softspark can help.
          </p>
        </div>
        <div class="cta__actions">
          <a :href="links.contact" class="btn btn-primary">Contact Softspark</a>
          <a :href="links.uniraReleases" class="btn btn-ghost" target="_blank" rel="noopener">
            Get Unira
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  padding-block: 0 var(--section-y);
  background: var(--ink-950);
}

.cta__band {
  position: relative;
  overflow: hidden;
  display: grid;
  gap: var(--space-8);
  padding: clamp(2rem, 5vw, 4rem);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--ink-800), var(--ink-900) 60%);
  border: 1px solid var(--border-strong);
  box-shadow: var(--shadow-glow);
}

@media (min-width: 56rem) {
  .cta__band {
    grid-template-columns: 1fr auto;
    align-items: center;
  }
}

.cta__glow {
  position: absolute;
  inset: auto -20% -60% auto;
  width: 60%;
  aspect-ratio: 1;
  background: radial-gradient(circle, rgba(240, 138, 60, 0.35), transparent 65%);
  filter: blur(30px);
  pointer-events: none;
}

.cta__copy {
  position: relative;
  max-width: 36rem;
}

.cta__title {
  font-size: var(--text-2xl);
}

.cta__title em {
  font-style: italic;
  color: var(--ember-400);
}

.cta__lede {
  margin-top: var(--space-4);
  color: var(--text-muted);
}

.cta__actions {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}
</style>
