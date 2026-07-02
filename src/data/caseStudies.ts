// Case-study metadata (title / number / eyebrow / accent / hero mockup).
//
// The body of each write-up is structured content (real text + full-width
// per-breakpoint images) defined in src/data/caseStudyContent.ts and rendered by
// src/components/casestudy/CaseStudyBody.tsx. The page title / number / eyebrow
// render as native text above the body; on tablet/mobile a hero device mockup is
// shown between the title and the body (on desktop the mockup sits beside the
// overview, inside the body).

export interface CaseStudy {
  slug: string
  number: string
  title: string
  /** eyebrow label above the title */
  category: string
  /** brand accent used on the number + heading accent words */
  accent: string
  /** hero device mockup shown between the title and the body — tablet/mobile only */
  hero: {
    tablet: string
    mobile: string
  }
}

const hero = (slug: string) => ({
  tablet: `/assets/casestudy/${slug}/hero-tablet.png`,
  mobile: `/assets/casestudy/${slug}/hero-mobile.png`,
})

export const caseStudies: Record<string, CaseStudy> = {
  kfc: {
    slug: 'kfc',
    number: '01',
    title: 'KFC Mobile App Redesign',
    category: 'CONSUMER APP REDESIGN',
    accent: '#c41230',
    hero: hero('kfc'),
  },
  'student-attendance': {
    slug: 'student-attendance',
    number: '02',
    title: 'Student Activity Attendance',
    category: 'FEATURE DESIGN',
    accent: '#2f5597',
    hero: hero('student-attendance'),
  },
  'rubber-dryer': {
    slug: 'rubber-dryer',
    number: '03',
    title: 'Rubber Dryer System',
    category: 'INDUSTRIAL LOT',
    accent: '#2c2c2c',
    hero: hero('rubber-dryer'),
  },
  borot: {
    slug: 'borot',
    number: '04',
    title: 'BOROT (In process)',
    category: 'E-LEARNING PLATFORM',
    accent: '#e5690d',
    hero: hero('borot'),
  },
  gophin: {
    slug: 'gophin',
    number: '05',
    title: 'GOPHIN AI (In process)',
    category: 'AI PLATFORM',
    accent: '#30bfff',
    hero: hero('gophin'),
  },
}

export const getCaseStudy = (slug: string): CaseStudy | undefined => caseStudies[slug]
