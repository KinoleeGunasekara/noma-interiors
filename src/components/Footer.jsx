export default function Footer() {
  const handleNavClick = (e, target) => {
    e.preventDefault()
    const el = document.querySelector(target)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">NOMA INTERIORS</span>
            <p className="footer__tagline">Interior Design · Architecture · Colombo</p>
          </div>

          <div className="footer__col">
            <span className="footer__col-label">STUDIO</span>
            <ul className="footer__nav-list">
              <li><a href="#work" onClick={(e) => handleNavClick(e, '#work')}>Work</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <span className="footer__col-label">CONTACT</span>
            <ul className="footer__contact-list">
              <li><a href="mailto:hello@nomainteriors.lk">hello@nomainteriors.lk</a></li>
              <li><a href="tel:+94774567890">+94 77 456 7890</a></li>
              <li>Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© 2026 NOMA Interiors. All rights reserved.</p>
          <div className="footer__social">
            <a href="#" aria-label="NOMA Interiors on Instagram">Instagram</a>
            <a href="#" aria-label="NOMA Interiors on Facebook">Facebook</a>
            <a href="#" aria-label="NOMA Interiors on Pinterest">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
