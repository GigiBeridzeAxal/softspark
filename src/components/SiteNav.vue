<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import SparkMark from './SparkMark.vue'
import { contact, cta, links, navLinks } from '@/data/site'

const scrolled = ref(false)
const open = ref(false)
const toggle = ref<HTMLButtonElement | null>(null)

let desktop: MediaQueryList | null = null

function onScroll() {
  scrolled.value = window.scrollY > 4
}

function close() {
  open.value = false
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape' && open.value) {
    close()
    toggle.value?.focus()
  }
}

function onBreakpoint(e: MediaQueryListEvent) {
  if (e.matches) close()
}

/* The mobile sheet covers the viewport, so lock page scroll while it is open. */
watch(open, (isOpen) => {
  document.documentElement.classList.toggle('is-locked', isOpen)
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
  desktop = window.matchMedia('(min-width: 48rem)')
  desktop.addEventListener('change', onBreakpoint)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
  desktop?.removeEventListener('change', onBreakpoint)
  document.documentElement.classList.remove('is-locked')
})
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled, 'nav--open': open }">
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
          ref="toggle"
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
        <nav class="container nav__mobile-inner" aria-label="Mobile primary">
          <ul>
            <li v-for="(link, i) in navLinks" :key="link.href" class="nav__mobile-item" :style="{ '--i': i }">
              <a :href="link.href" @click="close">{{ link.label }}</a>
            </li>
          </ul>
          <div class="nav__mobile-foot nav__mobile-item" :style="{ '--i': navLinks.length }">
            <a :href="links.contact" class="btn btn-primary" @click="close">{{ cta.primary }}</a>
            <a :href="links.contact" class="nav__mobile-email" @click="close">{{ contact.email }}</a>
          </div>
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
  background: rgb(var(--paper-rgb) / 0);
  border-bottom: 1px solid transparent;
  transition:
    background-color var(--dur) var(--ease-std),
    border-color var(--dur) var(--ease-std);
  animation: nav-in var(--dur-enter) var(--ease-out) both;
}

.nav--scrolled {
  background: rgb(var(--paper-rgb) / 0.85);
  border-bottom-color: var(--line);
  -webkit-backdrop-filter: blur(12px) saturate(1.4);
  backdrop-filter: blur(12px) saturate(1.4);
}

.nav--open {
  background: var(--bg);
  border-bottom-color: var(--line);
}

@keyframes nav-in {
  from {
    opacity: 0;
  }
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
  border-radius: var(--radius-sm);
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
  min-height: 2.25rem;
  padding: 0 var(--space-3);
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-muted);
  transition:
    color var(--dur) var(--ease-std),
    background-color var(--dur) var(--ease-std);
}

@media (hover: hover) {
  .nav__links a:hover {
    color: var(--text);
    background: var(--wash);
  }
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
  margin-right: calc(-1 * var(--space-3));
  align-items: center;
  justify-content: center;
  border-radius: var(--radius);
}

.nav__burger {
  position: relative;
  width: 18px;
  height: 12px;
  display: block;
}

.nav__burger i {
  position: absolute;
  left: 0;
  width: 100%;
  height: 1.5px;
  border-radius: 1px;
  background: var(--text);
  transition: transform var(--dur) var(--ease-out);
}

.nav__burger i:nth-child(1) {
  top: 1px;
}
.nav__burger i:nth-child(2) {
  top: 9px;
}

.nav__burger.is-open i:nth-child(1) {
  transform: translateY(4px) rotate(45deg);
}
.nav__burger.is-open i:nth-child(2) {
  transform: translateY(-4px) rotate(-45deg);
}

/* Mobile sheet: fills the viewport below the bar, items stagger in. */
.nav__mobile {
  position: absolute;
  inset: 100% 0 auto 0;
  height: calc(100vh - var(--nav-h));
  height: calc(100dvh - var(--nav-h));
  overflow-y: auto;
  overscroll-behavior: contain;
  background: var(--bg);
}

.nav__mobile-inner {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding-block: var(--space-2) var(--space-6);
}

.nav__mobile-item {
  animation: item-in var(--dur-reveal) var(--ease-out) both;
  animation-delay: calc(40ms + var(--i, 0) * 40ms);
}

@keyframes item-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
}

.nav__mobile ul a {
  display: flex;
  align-items: center;
  min-height: 3.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  border-bottom: 1px solid var(--line);
}

.nav__mobile-foot {
  margin-top: auto;
  padding-top: var(--space-8);
  display: grid;
  gap: var(--space-2);
}

.nav__mobile-foot .btn {
  width: 100%;
}

.nav__mobile-email {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-muted);
}

.menu-enter-active {
  transition:
    opacity var(--dur) var(--ease-std),
    transform var(--dur-reveal) var(--ease-out);
}
.menu-leave-active {
  transition: opacity var(--dur-fast) var(--ease-std);
}
.menu-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}
.menu-leave-to {
  opacity: 0;
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

@media (min-width: 48rem) {
  .nav__mobile {
    display: none;
  }
}
</style>
