import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Statement from './components/Statement'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Process />
        <Statement />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App