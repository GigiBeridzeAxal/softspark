<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { contact, links, navLinks } from '@/data/site'

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
  desktop = window.matchMedia('(min-width: 56rem)')
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
    <div class="shell nav__inner">
      <a href="#top" class="nav__brand" aria-label="Softspark home" @click="close">Softspark</a>

      <nav class="nav__links" aria-label="Primary">
        <ul>
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href">{{ link.label }}</a>
          </li>
          <li>
            <a :href="links.contact" class="nav__contact">Contact</a>
          </li>
        </ul>
      </nav>

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

    <Transition name="menu">
      <div v-if="open" id="mobile-menu" class="nav__mobile">
        <nav class="shell nav__mobile-inner" aria-label="Mobile primary">
          <ul>
            <li
              v-for="(link, i) in navLinks"
              :key="link.href"
              class="nav__mobile-item"
              :style="{ '--i': i }"
            >
              <a :href="link.href" @click="close">{{ link.label }}</a>
            </li>
          </ul>
          <div class="nav__mobile-foot nav__mobile-item" :style="{ '--i': navLinks.length }">
            <a :href="links.contact" class="btn btn--solid" @click="close">Contact</a>
            <a :href="links.contact" class="nav__mobile-email" @click="close">
              {{ contact.email }}
            </a>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Sits over the hero film, unlit, until the page moves. */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  border-bottom: 1px solid transparent;
  transition:
    background-color var(--dur) var(--ease-std),
    border-color var(--dur) var(--ease-std);
  animation: fade-in var(--dur-enter) var(--ease-out) both;
}

.nav--scrolled {
  background: rgb(var(--ink-rgb) / 0.82);
  border-bottom-color: var(--line);
  -webkit-backdrop-filter: blur(14px) saturate(1.2);
  backdrop-filter: blur(14px) saturate(1.2);
}

.nav--open {
  background: var(--bg);
  border-bottom-color: var(--line);
}

.nav__inner {
  max-width: var(--shell);
  margin-inline: auto;
  height: var(--nav-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
}

.nav__brand {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.nav__links ul {
  display: flex;
  align-items: center;
  gap: var(--space-5);
}

.nav__links a {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  font-family: var(--font-mono);
  font-size: 0.71875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgb(var(--paper-rgb) / 0.8);
  transition: color var(--dur) var(--ease-std);
}

/* One boxed item closes the row. */
.nav__links .nav__contact {
  min-height: 2.25rem;
  padding: 0 var(--space-4);
  border: 1px solid var(--line-strong);
  color: var(--text);
  transition:
    border-color var(--dur) var(--ease-std),
    background-color var(--dur) var(--ease-std);
}

@media (hover: hover) {
  .nav__links a:hover {
    color: var(--text);
  }
  .nav__links .nav__contact:hover {
    border-color: var(--paper);
    background: var(--wash);
  }
}

.nav__toggle {
  display: none;
  width: 2.75rem;
  height: 2.75rem;
  margin-right: calc(-1 * var(--space-2));
  align-items: center;
  justify-content: center;
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
  height: 1px;
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
  max-width: var(--shell);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding-block: var(--space-2) var(--space-6);
}

.nav__mobile-item {
  animation: rise-sm var(--dur-reveal) var(--ease-out) both;
  animation-delay: calc(40ms + var(--i, 0) * 40ms);
}

.nav__mobile ul a {
  display: flex;
  align-items: center;
  min-height: 3.75rem;
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 300;
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
  font-family: var(--font-mono);
  font-size: var(--text-sm);
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

@media (max-width: 55.99rem) {
  .nav__links {
    display: none;
  }
  .nav__toggle {
    display: inline-flex;
  }
}

@media (min-width: 56rem) {
  .nav__mobile {
    display: none;
  }
}
</style>
