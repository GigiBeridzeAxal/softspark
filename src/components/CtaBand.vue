<script setup lang="ts">
import { ref } from 'vue'
import { contact, cta, links } from '@/data/site'
import { useReveal } from '@/composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(() => root.value)
</script>

<template>
  <section ref="root" class="section cta" aria-labelledby="cta-title">
    <div class="container">
      <div class="cta__band reveal">
        <div class="cta__copy">
          <p class="eyebrow">{{ contact.eyebrow }}</p>
          <h2 id="cta-title">{{ contact.title }}</h2>
          <p class="lede">{{ contact.lede }}</p>
        </div>
        <div class="cta__actions">
          <a :href="links.contact" class="btn btn-primary">{{ cta.primary }}</a>
          <a :href="links.contact" class="text-link">{{ contact.email }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta__band {
  display: grid;
  gap: var(--space-6);
  padding: clamp(2rem, 5vw, 3.5rem);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--surface);
}

@media (min-width: 56rem) {
  .cta__band {
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: var(--space-10);
  }
}

.cta__copy {
  max-width: var(--prose);
}

.cta__copy .lede {
  margin-top: var(--space-4);
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3) var(--space-6);
}
</style>
