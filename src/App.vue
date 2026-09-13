<script setup lang="ts">
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import UniraSection from './components/UniraSection.vue'
import AboutSection from './components/AboutSection.vue'
import CtaBand from './components/CtaBand.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <a href="#main" class="skip-link">Skip to content</a>
  <SiteNav />
  <main id="main">
    <HeroSection />
    <ServicesSection />
    <UniraSection />
    <AboutSection />
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
  border-radius: var(--radius);
  background: var(--ink);
  color: var(--paper);
  font-weight: 500;
}

.skip-link:focus {
  top: 1rem;
}
</style>
