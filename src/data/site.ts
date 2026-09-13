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
  { label: 'About', href: '#about' },
]

export interface Service {
  id: string
  index: string
  title: string
  summary: string
  points: string[]
  icon: 'web' | 'ai' | 'embedded'
}

export const services: Service[] = [
  {
    id: 'web',
    index: '01',
    title: 'Custom websites & web apps',
    summary:
      'Marketing sites, dashboards and full product front-ends built on modern frameworks, tuned for speed and maintainability.',
    points: ['Vue, React & TypeScript', 'Design systems & accessibility', 'Performance, SEO & hosting setup'],
    icon: 'web',
  },
  {
    id: 'ai',
    index: '02',
    title: 'AI model training & ML consulting',
    summary:
      'From dataset strategy to fine-tuning and evaluation, we help teams ship models that behave predictably in production.',
    points: ['Fine-tuning & evaluation pipelines', 'LLM agents, tooling & orchestration', 'MLOps and deployment guidance'],
    icon: 'ai',
  },
  {
    id: 'embedded',
    index: '03',
    title: 'Embedded systems & firmware-adjacent work',
    summary:
      'Device software, hardware bring-up support and the tooling that connects microcontrollers to the cloud.',
    points: ['MCU firmware & drivers', 'Device tooling, flashing & telemetry', 'Edge integration with web & AI stacks'],
    icon: 'embedded',
  },
]

export interface UniraFeature {
  title: string
  body: string
}

export const uniraFeatures: UniraFeature[] = [
  {
    title: 'Visible by design',
    body: 'Every agent, prompt and terminal session is on screen. Nothing happens behind a spinner.',
  },
  {
    title: 'Workflow-driven',
    body: 'Define stages such as plan, implement, review and test. Unira routes the work through them in order.',
  },
  {
    title: 'CLI-native teams',
    body: 'Orchestrates the AI coding CLIs you already use, side by side, instead of replacing them.',
  },
  {
    title: 'Desktop, local-first',
    body: 'Runs on your machine next to your repositories. Your code stays where it lives.',
  },
]

export interface Principle {
  title: string
  body: string
}

export const principles: Principle[] = [
  {
    title: 'Craft over churn',
    body: 'We would rather ship one well-built system than three fragile ones. Code is read far more than it is written.',
  },
  {
    title: 'Engineering across the stack',
    body: 'Web, machine learning and embedded rarely live in one shop. Here they share a hallway, and problems get solved end to end.',
  },
  {
    title: 'Rooted in Georgia',
    body: 'A tech hub for engineers in Georgia who want to build ambitious products locally and work with teams around the world.',
  },
  {
    title: 'Tools we use ourselves',
    body: 'Unira exists because we wanted it for our own work. Everything we release has to earn its place in our daily workflow first.',
  },
]
