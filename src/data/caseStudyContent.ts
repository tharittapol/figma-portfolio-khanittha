// Structured case-study bodies — single source of truth for the text + image
// layout of every project's write-up. Rendered by
// src/components/casestudy/CaseStudyBody.tsx. Real text stays text; each diagram /
// mockup / screen gallery is a full-width per-breakpoint image (<name>-{desktop,
// tablet,mobile}.png in public/assets/casestudy/<slug>/). The desktop overview
// device mockup is <mockup>-desktop.png; tablet/mobile show the hero mockup above.

import type { CaseBlock } from '../components/casestudy/CaseStudyBody'

const KFC_PROTOTYPE =
  'https://www.figma.com/proto/KR2WawddGC64I4EAeItNN4/KFC-Redesign?page-id=346%3A6218&node-id=459-5975&viewport=956%2C482%2C0.16&t=FQKUS5tYhDnQICTm-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=459%3A5969'

export const caseStudyContent: Record<string, CaseBlock[]> = {
  kfc: [
    {
      kind: 'mockupGroup',
      mockup: 'mockup',
      items: [
        {
          heading: { pre: 'Project', accent: 'Overview' },
          body: 'KFC is a globally renowned fast-food brand known for its secret fried chicken recipe. It offers various menu items like burgers, rice dishes, snacks, and drinks, and has expanded worldwide while continually improving its menu and services to meet customer needs.',
        },
        {
          heading: { pre: 'Problems' },
          bullets: [
            'Complicated navigation',
            'Complex ordering',
            'Inconsistent design such as style, color, size, and button placement',
            'Small order status',
            'No Drive-Thru, Pick Up Store, Pick Up Car, Take Away features',
            'Payment channels have too many steps',
          ],
        },
        {
          heading: { pre: 'Goals' },
          bullets: [
            'Improved navigation bar experience',
            'Improved ordering process',
            'Improved display and design',
            'Improved order tracking',
            'Added Drive Thru, Pick Up Store, Pick Up Car, Take Away',
            'Improved the convenience of payment channels',
          ],
        },
      ],
    },
    { kind: 'image', heading: { pre: 'Design Process' }, names: ['process'] },
    {
      kind: 'image',
      heading: { pre: 'Customer feedback', accent: 'analysis' },
      names: ['feedback'],
    },
    {
      kind: 'image',
      heading: { pre: 'Information Architecture', accent: '(IA)' },
      names: ['ia'],
    },
    { kind: 'image', heading: { pre: 'User Flow' }, names: ['userflow'] },
    { kind: 'image', heading: { pre: 'Wireframe' }, names: ['wireframe'] },
    {
      kind: 'designSystem',
      heading: { pre: 'Design system &', accent: 'component' },
      fontName: 'Inter',
      colors: [{ hex: '#c41230' }, { hex: '#000000' }, { hex: '#ffffff', bordered: true }, { hex: '#a5a5a5' }],
      component: ['component'],
    },
    { kind: 'image', heading: { pre: 'Other screens' }, names: ['screens'] },
    { kind: 'prototype', href: KFC_PROTOTYPE },
  ],

  'student-attendance': [
    {
      kind: 'mockupGroup',
      mockup: 'mockup',
      items: [
        {
          heading: { pre: 'Project', accent: 'Overview' },
          body: 'A student activity attendance tracking system is an application that allows teachers to record and monitor which students participate in which activities, how often, and when. It helps keep accurate records and makes looking up past attendance easier.',
        },
      ],
    },
    {
      kind: 'designSystem',
      heading: { pre: 'Design system &', accent: 'component' },
      fontName: 'IBM Plex Sans Thai',
      colors: [{ hex: '#2f5597' }, { hex: '#ffc107' }, { hex: '#4b5563' }, { hex: '#dedede', bordered: true }],
      component: ['buttons', 'component'],
    },
    { kind: 'image', heading: { pre: 'Other screens' }, names: ['screens'] },
  ],

  'rubber-dryer': [
    {
      kind: 'mockupGroup',
      mockup: 'mockup',
      items: [
        {
          heading: { pre: 'Project', accent: 'Overview' },
          body: 'Rubber Dryer System is an Industrial IoT platform for controlling and monitoring rubber drying rooms across multiple factories and multiple rooms. The web application provides real-time visibility through a dashboard and room detail pages, allowing users to start and stop drying jobs based on schedules and predefined profiles, while administrators can manage users, factories, rooms, and drying profiles.',
        },
      ],
    },
    {
      kind: 'designSystem',
      heading: { pre: 'Design system &', accent: 'component' },
      description:
        'We use a simple design system theme because it’s easy and fast to implement for developers, and it prevents us from spending extra time building a full design system from scratch, so we can deliver the product sooner.',
      fontName: 'Inter',
      colors: [{ hex: '#1e1e1e' }, { hex: '#757575' }, { hex: '#b3b3b3' }],
      component: ['component'],
    },
    { kind: 'image', heading: { pre: 'Other screens' }, names: ['screens', 'screens2'] },
  ],

  borot: [
    {
      kind: 'mockupGroup',
      mockup: 'mockup',
      items: [
        {
          heading: { pre: 'Project', accent: 'Overview' },
          body: 'This project is a web platform for learning robotics and engineering under the BOROT brand, designed for middle and high school students. The website supports both online learning (videos, exercises, progress tracking) and onsite learning (camps and workshops at universities or learning centers) within the same course. Students can create an account, browse and purchase courses, see which courses they’re enrolled in and how far they’ve progressed, view schedules for onsite camps, and download their certificates — all within a single integrated system.',
        },
      ],
    },
    {
      kind: 'designSystem',
      heading: { pre: 'Design system &', accent: 'component' },
      fontName: 'IBM Plex Sans Thai',
      colors: [{ hex: '#e5690d' }, { hex: '#666666' }, { hex: '#989898' }],
      component: ['component'],
    },
    { kind: 'image', heading: { pre: 'Other screens (mockups)' }, names: ['screens'] },
  ],

  gophin: [
    {
      kind: 'mockupGroup',
      mockup: 'mockup',
      items: [
        {
          heading: { pre: 'Project', accent: 'Overview' },
          body: 'Design the GophinAI website, a platform that explains, sells, and guides users on how to use an AI chatbot service, with a modern, cutting-edge tech-focused visual style.',
        },
      ],
    },
    {
      kind: 'designSystem',
      heading: { pre: 'Design system &', accent: 'component' },
      fontName: 'IBM Plex Sans Thai',
      colors: [{ hex: '#30bfff' }, { hex: '#3a404f' }, { hex: '#091023' }],
    },
    { kind: 'image', heading: { pre: 'Other screens (Mockups)' }, names: ['screens'] },
  ],
}
