<script setup lang="ts">
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import StatsBand from './components/StatsBand.vue'
import AboutSection from './components/AboutSection.vue'
import UniraSection from './components/UniraSection.vue'
import CtaBand from './components/CtaBand.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <a href="#main" class="skip-link">Skip to content</a>
  <SiteNav />
  <main id="main">
    <HeroSection />
    <ServicesSection />
    <StatsBand />
    <AboutSection />
    <UniraSection />
    <CtaBand />
  </main>
  <SiteFooter />
</template>

<style>
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  z-index: 100;
  padding: 0.75rem 1rem;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.skip-link:focus {
  top: 1rem;
}
</style>
