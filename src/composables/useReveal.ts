import { onBeforeUnmount, onMounted, type Ref } from 'vue'

/**
 * Adds `.is-visible` to every `.reveal` element inside `root` as it scrolls
 * into view. Elements already scrolled past (e.g. after a reload further down
 * the page) are shown immediately. Falls back to showing everything if
 * IntersectionObserver is unavailable.
 */
export function useReveal(root: Ref<HTMLElement | null>) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const el = root.value
    if (!el) return
    const targets = el.querySelectorAll<HTMLElement>('.reveal')

    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((t) => t.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
    )

    targets.forEach((t) => observer?.observe(t))
  })

  onBeforeUnmount(() => observer?.disconnect())
}
