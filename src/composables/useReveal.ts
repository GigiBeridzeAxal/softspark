import { onBeforeUnmount, onMounted } from 'vue'

/**
 * Adds `.is-visible` to every `.reveal` element as it scrolls into view.
 * Falls back to showing everything if IntersectionObserver is unavailable.
 */
export function useReveal(root: () => HTMLElement | null) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const el = root()
    if (!el) return
    const targets = Array.from(el.querySelectorAll<HTMLElement>('.reveal'))

    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((t) => t.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    )

    targets.forEach((t) => observer?.observe(t))
  })

  onBeforeUnmount(() => observer?.disconnect())
}
