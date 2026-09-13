<script setup lang="ts">
import { cta, hero, links } from '@/data/site'
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-title">
    <!-- Stand-in for the hero film: a panning hatch under a scrim. -->
    <div class="hero__film" aria-hidden="true">
      <div class="hero__hatch"></div>
      <div class="hero__scrim"></div>
      <p class="hero__film-note slot-note">{{ hero.media }}</p>
    </div>

    <div class="shell hero__inner">
      <p class="label hero__eyebrow">{{ hero.eyebrow }}</p>

      <h1 id="hero-title" class="hero__title">
        <span>{{ hero.title }}</span>
        <em>{{ hero.titleEnd }}</em>
      </h1>

      <div class="hero__rule" aria-hidden="true"></div>

      <div class="hero__foot">
        <p class="lede hero__lede">{{ hero.lede }}</p>
        <div class="hero__actions">
          <a :href="links.contact" class="btn btn--solid">{{ cta.primary }}</a>
          <a href="#services" class="btn btn--outline">{{ cta.secondary }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: clamp(32rem, 54vw, 41.25rem);
  overflow: hidden;
  padding-block: calc(var(--nav-h) + var(--space-8)) clamp(2.5rem, 4vw, 3rem);
}

.hero__film {
  position: absolute;
  inset: 0;
}

.hero__hatch {
  position: absolute;
  inset: 0;
  background: var(--hatch-band);
  animation: pan 24s ease-in-out infinite alternate;
}

/* Lifts the type off the film and lands the section in solid ink. */
.hero__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    var(--ink) 4%,
    rgb(var(--ink-rgb) / 0.35) 55%,
    rgb(var(--ink-rgb) / 0.7)
  );
}

.hero__film-note {
  position: absolute;
  top: calc(var(--nav-h) + var(--space-5));
  right: var(--gutter);
  max-width: 22rem;
  text-align: right;
}

.hero__inner {
  position: relative;
}

.hero__title {
  margin-top: var(--space-5);
  max-width: 22ch;
  animation: rise var(--dur-enter) var(--ease-out) both;
}

.hero__title span,
.hero__title em {
  display: block;
}

.hero__title em {
  font-style: italic;
  color: var(--text-muted);
}

/* The rule draws itself in under the headline. */
.hero__rule {
  height: 1px;
  margin-block: clamp(1.25rem, 2.6vw, 2.125rem) clamp(1rem, 1.7vw, 1.375rem);
  background: rgb(var(--paper-rgb) / 0.3);
  transform-origin: left;
  animation: draw-line 1200ms 300ms var(--ease-out) both;
}

.hero__foot {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.hero__lede {
  max-width: 35rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

/* Everything but the headline arrives on one stepped sequence. */
.hero__eyebrow,
.hero__lede,
.hero__actions {
  animation: rise-sm var(--dur-enter) var(--ease-out) both;
}

.hero__eyebrow {
  animation-delay: var(--enter-base);
}
.hero__lede {
  animation-delay: calc(var(--enter-base) + 4 * var(--enter-step));
}
.hero__actions {
  animation-delay: calc(var(--enter-base) + 5 * var(--enter-step));
}

@media (min-width: 56rem) {
  .hero__foot {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--space-10);
  }
  .hero__actions {
    flex: none;
    padding-bottom: 0.25rem;
  }
}

@media (max-width: 47.99rem) {
  .hero__film-note {
    display: none;
  }
}
</style>
