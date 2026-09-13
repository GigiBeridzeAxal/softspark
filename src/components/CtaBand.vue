<script setup lang="ts">
import { ref } from 'vue'
import { contact, links } from '@/data/site'
import { useReveal } from '@/composables/useReveal'

const root = ref<HTMLElement | null>(null)
useReveal(root)
</script>

<template>
  <section ref="root" class="cta" aria-labelledby="cta-title">
    <div class="shell cta__inner reveal">
      <h2 id="cta-title" class="cta__title">{{ contact.title }}</h2>
      <p class="lede cta__lede">{{ contact.lede }}</p>
      <a :href="links.contact" class="btn btn--solid btn--lower cta__email">{{ contact.email }}</a>
    </div>
  </section>
</template>

<style scoped>
.cta {
  padding-top: clamp(4rem, 7.2vw, 5.625rem);
  border-top: 1px solid var(--line);
}

.cta__inner {
  text-align: center;
}

.cta__title {
  font-size: var(--display-4);
  line-height: 1.05;
  letter-spacing: -0.03em;
  max-width: 30ch;
  margin-inline: auto;
}

.cta__lede {
  margin: var(--space-5) auto 0;
  max-width: 32rem;
}

.cta__email {
  margin-top: clamp(1.5rem, 2.6vw, 2rem);
  padding-inline: 1.875rem;
}
</style>
