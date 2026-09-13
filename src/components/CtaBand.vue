<script setup lang="ts">
import { ref } from 'vue'
import { contact, cta, links } from '@/data/site'
import { useReveal } from '@/composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(root)
</script>

<template>
  <section ref="root" class="section cta" aria-labelledby="cta-title">
    <div class="container cta__inner">
      <div class="cta__copy reveal">
        <p class="eyebrow">{{ contact.eyebrow }}</p>
        <h2 id="cta-title">{{ contact.title }}</h2>
        <p class="lede">{{ contact.lede }}</p>
      </div>
      <div class="cta__actions reveal" style="--d: 100ms">
        <a :href="links.contact" class="btn btn-primary">{{ cta.primary }}</a>
        <a :href="links.contact" class="text-link">{{ contact.email }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta__inner {
  display: grid;
  gap: var(--space-6);
}

@media (min-width: 56rem) {
  .cta__inner {
    grid-template-columns: minmax(0, 1fr) auto;
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
