import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Process from '../components/sections/Process'
import ContactCTA from '../components/sections/ContactCTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Process />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
