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

export const cta = {
  primary: 'Start a project',
} as const

export const hero = {
  eyebrow: 'Software studio · Georgia',
  /* The headline is one sentence; `titleEnd` is rendered in a softer tone. */
  title: 'Web, AI and embedded engineering,',
  titleEnd: 'built with care.',
  lede:
    'Softspark is a software studio and tech hub in Georgia, the country. We design and build web apps, train and evaluate AI models, and write the software that runs on devices.',
  secondary: 'See Unira',
} as const

export interface Service {
  id: string
  index: string
  title: string
  summary: string
  points: string[]
}

export const servicesHead = {
  eyebrow: 'Services',
  title: 'Three disciplines under one roof.',
  lede:
    'Most products touch more than one layer. We staff the web, model and device work together so it is designed as one system.',
} as const

export const services: Service[] = [
  {
    id: 'web',
    index: '01',
    title: 'Websites & web apps',
    summary:
      'Marketing sites, dashboards and full product front-ends on modern frameworks, tuned for speed and long-term maintainability.',
    points: ['Vue, React and TypeScript', 'Design systems and accessibility', 'Performance, SEO and hosting'],
  },
  {
    id: 'ai',
    index: '02',
    title: 'AI model training & ML consulting',
    summary:
      'From dataset strategy to fine-tuning and evaluation, we help teams ship models that behave predictably in production.',
    points: ['Fine-tuning and evaluation pipelines', 'LLM agents, tooling and orchestration', 'MLOps and deployment guidance'],
  },
  {
    id: 'embedded',
    index: '03',
    title: 'Embedded & firmware-adjacent',
    summary:
      'Device software, hardware bring-up support and the tooling that connects microcontrollers to the cloud.',
    points: ['MCU firmware and drivers', 'Flashing, telemetry and device tooling', 'Edge integration with web and AI stacks'],
  },
]

export interface Feature {
  title: string
  body: string
}

export type StageState = 'done' | 'active' | 'queued'

export interface Stage {
  name: string
  state: StageState
}

export const unira = {
  eyebrow: 'Product',
  title: 'Unira. AI coding teams you can see.',
  lede:
    'Unira is a desktop orchestrator for workflow-driven teams of AI coding CLIs. Define the stages, assign an agent to each, and watch every one work in its own visible session.',
  primary: 'Download from GitHub',
  secondary: 'Release notes',
  features: [
    {
      title: 'Visible by design',
      body: 'Every agent, prompt and session is on screen. Nothing happens behind a spinner.',
    },
    {
      title: 'Workflow-driven',
      body: 'Stages like plan, implement, review and test. Unira routes work through them in order.',
    },
    {
      title: 'Local and CLI-native',
      body: 'Runs on your machine next to your repositories and orchestrates the CLIs you already use.',
    },
  ] as Feature[],
  /* Illustrative workflow shown in the product frame. */
  frame: {
    title: 'Unira',
    workflow: 'release-pipeline',
    stages: [
      { name: 'Plan', state: 'done' },
      { name: 'Implement', state: 'active' },
      { name: 'Review', state: 'queued' },
      { name: 'Test', state: 'queued' },
    ] as Stage[],
  },
} as const

export const about = {
  eyebrow: 'About',
  title: 'A small studio in Georgia, working across the whole stack.',
  lede:
    'Softspark is based in Georgia, between the Black Sea and the Caucasus. We work with founders, product teams and hardware makers who want thoughtful engineering rather than the fastest possible prototype.',
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
  eyebrow: 'Contact',
  title: 'Tell us what you are building.',
  lede: 'We reply with an honest read on scope, approach and where Softspark can help.',
  email: 'hello@softspark.ge',
} as const

export const footer = {
  blurb: 'Web, AI and embedded engineering from Georgia. Makers of Unira.',
} as const
