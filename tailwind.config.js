/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // 3-tier, mobile-first breakpoint system matching the Figma frames:
    //   base  → Mobile  (390 design)
    //   tablet→ iPad    (834 design)   ≥ 768px
    //   desktop→Desktop (1440 design)  ≥ 1280px
    screens: {
      tablet: '768px',
      desktop: '1280px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Simple Design System (sds) tokens
        bg: '#f8f8f6',                 // page background
        dark: '#2c2c2c',               // brand / dark surface
        white: '#ffffff',
        surface: '#f5f5f5',            // background-default-secondary
        'neutral-tertiary': '#e3e3e3', // background-neutral-tertiary
        'text-primary': '#1e1e1e',
        'text-secondary': '#757575',
        'text-tertiary': '#b3b3b3',
        'text-on-brand': '#f5f5f5',
        border: '#d9d9d9',             // border-default-default
        'border-neutral': '#767676',   // border-neutral-secondary
        'border-dark': '#383838',      // border-default-tertiary (on dark)
        positive: '#009951',
      },
      fontSize: {
        // semantic type scale (sds typography)
        'hero': ['72px', { lineHeight: '1.2', letterSpacing: '-3px' }],
        // fluid: ~32px mobile → ~40px tablet → 48px desktop (matches the 3 Figma frames)
        'title-page': ['clamp(2rem, 5vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'heading': ['24px', { lineHeight: '1.2', letterSpacing: '-2px' }],
        'subheading': ['20px', { lineHeight: '1.2' }],
        'body': ['16px', { lineHeight: '1.4' }],
        'body-sm': ['14px', { lineHeight: '1.4' }],
      },
      letterSpacing: {
        'tighter-2': '-0.02em',
        'tighter-3': '-0.03em',
        'tighter-6': '-0.06em',
      },
      borderRadius: {
        'sds': '8px',
        'sds-lg': '16px',
      },
      boxShadow: {
        // Drop Shadow/400
        card: '0px 4px 4px -4px rgba(12,12,13,0.05), 0px 16px 32px -4px rgba(12,12,13,0.10)',
      },
      maxWidth: {
        content: '1120px', // desktop content width (1440 - 2*160)
      },
    },
  },
  plugins: [],
}
