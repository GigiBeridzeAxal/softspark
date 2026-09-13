export const links = {
  uniraReleases: 'https://github.com/GigiBeridzeAxal/unira-releases',
  github: 'https://github.com/GigiBeridzeAxal',
  contact: 'mailto:hello@softspark.ge',
} as const

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Unira', href: '#unira' },
  { label: 'Studio', href: '#studio' },
]

export const cta = {
  primary: 'Start a project',
  secondary: 'What we do',
} as const

export const hero = {
  eyebrow: 'A software studio in Georgia',
  /* Two lines; `titleEnd` is set in italic and a softer tone. */
  title: 'Hard problems,',
  titleEnd: 'handled end to end.',
  lede:
    'Web, machine learning and embedded engineering under one roof — so the seams between them stop being your problem.',
  /* Placeholder for the footage that will sit behind the hero. */
  media: 'hero film — studio floor, loop, muted',
} as const

export interface Service {
  id: string
  title: string
  summary: string
  /* Mono line under the card; drawn from what we actually work in. */
  meta: string
  media: string
}

export const servicesHead = {
  eyebrow: 'Three disciplines, one team',
  title:
    'Most studios hand you a frontend and a phone number. We take the product from the silicon up.',
} as const

export const services: Service[] = [
  {
    id: 'web',
    title: 'Web & product',
    summary:
      'Full product teams — architecture, interface, infrastructure, and the on-call rotation behind it.',
    meta: 'Vue · React · TypeScript',
    media: 'image — 16:9',
  },
  {
    id: 'ai',
    title: 'Applied ML',
    summary:
      'Training, evaluation and serving — with the benchmark harness you keep after we leave.',
    meta: 'Fine-tuning · evals · MLOps',
    media: 'image — 16:9',
  },
  {
    id: 'embedded',
    title: 'Embedded',
    summary:
      'Firmware, drivers and OTA for devices that have to work in places you cannot reach.',
    meta: 'MCU firmware · drivers · edge',
    media: 'image — 16:9',
  },
]

export interface Stat {
  value: string
  caption: string
}

/* The comp carries its argument in three large numbers. These are the
   studio's own shape rather than performance figures — replace them here
   if real, verifiable numbers become available. */
export const stats: Stat[] = [
  { value: '3', caption: 'disciplines under one roof' },
  { value: '1', caption: 'team, one office in Georgia' },
  { value: '0', caption: 'handoffs between web, model and device' },
]

export interface Feature {
  title: string
  body: string
}

export const unira = {
  eyebrow: 'Our own product — Unira',
  title: 'Run a team of AI coding agents where you can actually see them.',
  lede:
    'A desktop orchestrator for workflow-driven teams of AI coding CLIs. Define the stages, assign an agent to each, and watch every one work in its own visible session.',
  primary: 'Download Unira',
  secondary: 'Release notes',
  media: 'unira app capture',
} as const

export const about = {
  eyebrow: 'The studio',
  title: 'A small team in Georgia, working across the whole stack.',
  principles: [
    {
      title: 'Craft over churn',
      body: 'We would rather ship one well-built system than three fragile ones. Code is read far more than it is written.',
    },
    {
      title: 'One team across layers',
      body: 'Web, machine learning and embedded rarely live in one shop. Here they share a hallway, so problems get solved end to end.',
    },
    {
      title: 'Tools we use ourselves',
      body: 'Unira exists because we wanted it for our own work. Everything we release has to earn its place in our daily workflow first.',
    },
  ] as Feature[],
} as const

export const contact = {
  title: "Tell us what you're building.",
  lede: 'We reply with an honest read on scope, approach and where Softspark can help.',
  email: 'hello@softspark.ge',
} as const

export const footer = {
  place: 'Softspark · Georgia',
} as const
