// Single source of truth for the 5 portfolio projects.
// Consumed by the project cards, the "Work" section, and the case-study routes.

export type ProjectStatus = 'done' | 'in-process'

export interface Project {
  slug: string
  /** order number shown on the card / case study (e.g. "01") */
  number: string
  title: string
  /** small category label above the title (e.g. "CONSUMER APP REDESIGN") */
  category: string
  description: string
  tags: string[]
  status: ProjectStatus
  /** primary card image (device mockup), filled in after asset export */
  cardImage: string
  /** layout used in the Selected Work grid */
  size: 'wide' | 'compact'
  route: string
}

export const projects: Project[] = [
  {
    slug: 'kfc',
    number: '01',
    title: 'KFC Mobile App Redesign',
    category: 'CONSUMER APP REDESIGN',
    description:
      'Reimagined the KFC Thailand mobile ordering experience — improving discoverability, visual hierarchy, and the checkout flow from menu to confirmation.',
    tags: ['Mobile App', 'Redesign', 'UX Audit'],
    status: 'done',
    cardImage: '/assets/projects/kfc-card.png',
    size: 'wide',
    route: '/work/kfc',
  },
  {
    slug: 'student-attendance',
    number: '02',
    title: 'Student Activity Attendance',
    category: 'FEATURE DESIGN',
    description:
      'Seamless attendance tracking feature for a student activity app — fast, clear, and frictionless for daily use.',
    tags: ['Mobile App', 'Feature Design', 'User Flow'],
    status: 'done',
    cardImage: '/assets/projects/student-card.png',
    size: 'wide',
    route: '/work/student-attendance',
  },
  {
    slug: 'rubber-dryer',
    number: '03',
    title: 'Rubber Dryer System',
    category: 'INDUSTRIAL LOT',
    description:
      'Real-time monitoring dashboard translating complex sensor data into a clear, actionable interface for industrial operators.',
    tags: ['Dashboard', 'Data Viz'],
    status: 'done',
    cardImage: '/assets/projects/rubber-card.png',
    size: 'compact',
    route: '/work/rubber-dryer',
  },
  {
    slug: 'borot',
    number: '04',
    title: 'BOROT',
    category: 'E-LEARNING PLATFORM',
    description:
      'An engaging digital learning experience with intuitive course navigation, progress tracking, and a consistent visual language across web and mobile.',
    tags: ['E-learning', 'UI Design'],
    status: 'in-process',
    cardImage: '/assets/projects/borot-card.png',
    size: 'compact',
    route: '/work/borot',
  },
  {
    slug: 'gophin',
    number: '05',
    title: 'GOPHIN AI',
    category: 'AI PLATFORM',
    description:
      'End-to-end UI for an AI-powered chatbot platform. Built a clean conversational interface alongside a comprehensive design system — balancing personality with precision.',
    tags: ['UI Design', 'Design System'],
    status: 'in-process',
    cardImage: '/assets/projects/gophin-card.png',
    size: 'compact',
    route: '/work/gophin',
  },
]

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug)
