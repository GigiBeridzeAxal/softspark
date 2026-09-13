<script setup lang="ts">
import { ref } from 'vue'
import { links, unira } from '@/data/site'
import { useReveal } from '@/composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(root)
</script>

<template>
  <!-- The one cinematic break in the scroll: our own product, full bleed. -->
  <section id="unira" ref="root" class="unira" aria-labelledby="unira-title">
    <div class="unira__plate" aria-hidden="true">
      <div class="unira__hatch"></div>
      <div class="unira__scrim"></div>
      <p class="unira__note slot-note">{{ unira.media }}</p>
    </div>

    <div class="shell unira__inner">
      <div class="unira__copy reveal">
        <p class="label">{{ unira.eyebrow }}</p>
        <h2 id="unira-title" class="unira__title">{{ unira.title }}</h2>
        <p class="body-muted unira__lede">{{ unira.lede }}</p>
        <div class="unira__actions">
          <a :href="links.uniraReleases" class="btn btn--outline" target="_blank" rel="noopener">
            {{ unira.primary }}
          </a>
          <a :href="links.uniraReleases" class="mono-link" target="_blank" rel="noopener">
            {{ unira.secondary }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.unira {
  position: relative;
  display: flex;
  align-items: center;
  min-height: clamp(24rem, 33vw, 26.25rem);
  overflow: hidden;
  border-top: 1px solid var(--line);
  padding-block: clamp(3rem, 6vw, 4rem);
}

.unira__plate {
  position: absolute;
  inset: 0;
}

.unira__hatch {
  position: absolute;
  inset: 0;
  background: var(--hatch);
}

/* Reads from the left so the copy stays on solid ink. */
.unira__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, var(--ink) 12%, rgb(var(--ink-rgb) / 0.2));
}

.unira__note {
  position: absolute;
  top: 50%;
  right: var(--gutter);
  transform: translateY(-50%);
}

.unira__inner {
  position: relative;
  width: 100%;
}

.unira__copy {
  max-width: 32.5rem;
}

.unira__title {
  margin-top: var(--space-4);
  font-size: var(--display-3);
  line-height: 1.08;
}

.unira__lede {
  margin-top: var(--space-4);
}

.unira__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3) var(--space-5);
  margin-top: var(--space-6);
}

@media (max-width: 63.99rem) {
  .unira__note {
    display: none;
  }
}
</style>
