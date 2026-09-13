<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import SparkMark from './SparkMark.vue'
import { links, navLinks } from '@/data/site'

const scrolled = ref(false)
const open = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 12
}

function close() {
  open.value = false
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}

watch(open, (v) => {
  document.body.style.overflow = v ? 'hidden' : ''
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled, 'nav--open': open }">
    <div class="container nav__inner">
      <a href="#top" class="nav__brand" aria-label="Softspark home" @click="close">
        <SparkMark :size="30" />
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
        <a :href="links.contact" class="btn btn-primary nav__cta">Start a project</a>
        <button
          class="nav__toggle"
          type="button"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          @click="open = !open"
        >
          <span class="visually-hidden">{{ open ? 'Close menu' : 'Open menu' }}</span>
          <span class="nav__burger" aria-hidden="true"><i /><i /><i /></span>
        </button>
      </div>
    </div>

    <Transition name="menu">
      <div v-if="open" id="mobile-menu" class="nav__mobile">
        <nav aria-label="Mobile primary">
          <ul>
            <li v-for="link in navLinks" :key="link.href">
              <a :href="link.href" @click="close">{{ link.label }}</a>
            </li>
            <li>
              <a :href="links.uniraReleases" target="_blank" rel="noopener" @click="close">
                Unira releases
              </a>
            </li>
          </ul>
        </nav>
        <a :href="links.contact" class="btn btn-primary" @click="close">Start a project</a>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  height: var(--nav-h);
  transition:
    background-color 0.3s var(--ease-out),
    border-color 0.3s var(--ease-out),
    backdrop-filter 0.3s var(--ease-out);
  border-bottom: 1px solid transparent;
}

.nav--scrolled,
.nav--open {
  background: rgba(18, 17, 16, 0.78);
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border-bottom-color: var(--border);
}

.nav__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
}

.nav__brand {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
}

.nav__wordmark {
  font-family: var(--font-display);
  font-size: 1.375rem;
  letter-spacing: -0.02em;
  font-weight: 500;
}

.nav__links ul {
  display: flex;
  gap: var(--space-1);
}

.nav__links a {
  display: inline-block;
  padding: 0.5rem 0.875rem;
  border-radius: var(--radius-pill);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-muted);
  transition:
    color 0.2s var(--ease-out),
    background-color 0.2s var(--ease-out);
}

.nav__links a:hover {
  color: var(--text);
  background: var(--surface-strong);
}

.nav__actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.nav__toggle {
  display: none;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-strong);
  background: var(--surface);
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
  height: 2px;
  border-radius: 2px;
  background: var(--text);
  transition:
    transform 0.3s var(--ease-out),
    opacity 0.2s var(--ease-out);
}

.nav__burger i:nth-child(1) {
  top: 0;
}
.nav__burger i:nth-child(2) {
  top: 5px;
}
.nav__burger i:nth-child(3) {
  top: 10px;
}

.nav--open .nav__burger i:nth-child(1) {
  transform: translateY(5px) rotate(45deg);
}
.nav--open .nav__burger i:nth-child(2) {
  opacity: 0;
}
.nav--open .nav__burger i:nth-child(3) {
  transform: translateY(-5px) rotate(-45deg);
}

.nav__mobile {
  position: fixed;
  inset: var(--nav-h) 0 0 0;
  background: rgba(18, 17, 16, 0.96);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  padding: var(--space-6) var(--gutter) var(--space-10);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-8);
}

.nav__mobile ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.nav__mobile a:not(.btn) {
  display: block;
  padding: var(--space-3) 0;
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  border-bottom: 1px solid var(--border);
}

.nav__mobile .btn {
  align-self: stretch;
}

.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.3s var(--ease-out),
    transform 0.3s var(--ease-out);
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
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
