import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const handleNavClick = (e, target) => {
    e.preventDefault()
    closeMenu()
    setTimeout(() => {
      const el = document.querySelector(target)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 60)
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a
          href="#"
          className="navbar__logo"
          onClick={(e) => {
            e.preventDefault()
            closeMenu()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          NOMA
        </a>

        <div className="navbar__right">
          <nav className="navbar__nav" aria-label="Main navigation">
            <a href="#work" onClick={(e) => handleNavClick(e, '#work')} className="navbar__link">Work</a>
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="navbar__link">Services</a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="navbar__link">About</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="navbar__link">Contact</a>
          </nav>

          <a href="#contact" className="navbar__cta" onClick={(e) => handleNavClick(e, '#contact')}>
            Start a Project
          </a>
        </div>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className={`navbar__mobile-menu${menuOpen ? ' navbar__mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#work" className="mobile-link" onClick={(e) => handleNavClick(e, '#work')}>Work</a>
          <a href="#services" className="mobile-link" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
          <a href="#about" className="mobile-link" onClick={(e) => handleNavClick(e, '#about')}>About</a>
          <a href="#contact" className="mobile-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
          <a href="#contact" className="mobile-link mobile-link--cta" onClick={(e) => handleNavClick(e, '#contact')}>
            Start a Project →
          </a>
        </nav>
      </div>
    </header>
  )
}
