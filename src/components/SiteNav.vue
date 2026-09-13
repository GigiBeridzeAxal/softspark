<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import SparkMark from './SparkMark.vue'
import { cta, links, navLinks } from '@/data/site'

const scrolled = ref(false)
const open = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 8
}

function close() {
  open.value = false
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled || open }">
    <div class="container nav__inner">
      <a href="#top" class="nav__brand" aria-label="Softspark home" @click="close">
        <SparkMark :size="26" />
        <span class="nav__wordmark">Softspark</span>
      </a>

      <nav class="nav__links" aria-label="Primary">
        <ul>
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </nav>

      <div class="nav__actions">
        <a :href="links.contact" class="btn btn-primary nav__cta">{{ cta.primary }}</a>
        <button
          class="nav__toggle"
          type="button"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          @click="open = !open"
        >
          <span class="visually-hidden">{{ open ? 'Close menu' : 'Open menu' }}</span>
          <span class="nav__burger" :class="{ 'is-open': open }" aria-hidden="true"><i /><i /></span>
        </button>
      </div>
    </div>

    <Transition name="menu">
      <div v-if="open" id="mobile-menu" class="nav__mobile">
        <nav class="container" aria-label="Mobile primary">
          <ul>
            <li v-for="link in navLinks" :key="link.href">
              <a :href="link.href" @click="close">{{ link.label }}</a>
            </li>
          </ul>
          <a :href="links.contact" class="btn btn-primary" @click="close">{{ cta.primary }}</a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--bg);
  border-bottom: 1px solid transparent;
  transition: border-color var(--dur) var(--ease);
}

.nav--scrolled {
  border-bottom-color: var(--line);
}

.nav__inner {
  height: var(--nav-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
}

.nav__brand {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  min-height: 3rem;
}

.nav__wordmark {
  font-size: 1.0625rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.nav__links ul {
  display: flex;
  gap: var(--space-1);
}

.nav__links a {
  display: inline-flex;
  align-items: center;
  min-height: 3rem;
  padding: 0 0.875rem;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-muted);
  transition: color var(--dur) var(--ease);
}

.nav__links a:hover {
  color: var(--text);
}

.nav__actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.nav__cta {
  min-height: 2.5rem;
  padding-inline: 1rem;
  font-size: var(--text-sm);
}

.nav__toggle {
  display: none;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius);
}

.nav__burger {
  position: relative;
  width: 18px;
  height: 10px;
  display: block;
}

.nav__burger i {
  position: absolute;
  left: 0;
  width: 100%;
  height: 1.5px;
  background: var(--text);
  transition: transform var(--dur) var(--ease);
}

.nav__burger i:nth-child(1) {
  top: 0;
}
.nav__burger i:nth-child(2) {
  top: 8px;
}

.nav__burger.is-open i:nth-child(1) {
  transform: translateY(4px) rotate(45deg);
}
.nav__burger.is-open i:nth-child(2) {
  transform: translateY(-4px) rotate(-45deg);
}

.nav__mobile {
  position: absolute;
  inset: 100% 0 auto 0;
  background: var(--bg);
  border-bottom: 1px solid var(--line);
  padding-block: var(--space-4) var(--space-6);
}

.nav__mobile ul {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-5);
}

.nav__mobile ul a {
  display: flex;
  align-items: center;
  min-height: 3rem;
  font-size: var(--text-lg);
  font-weight: 500;
  border-bottom: 1px solid var(--line);
}

.nav__mobile .btn {
  width: 100%;
}

.menu-enter-active,
.menu-leave-active {
  transition:
    opacity var(--dur) var(--ease),
    transform var(--dur) var(--ease);
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 47.99rem) {
  .nav__links,
  .nav__cta {
    display: none;
  }
  .nav__toggle {
    display: inline-flex;
  }
}
</style>
