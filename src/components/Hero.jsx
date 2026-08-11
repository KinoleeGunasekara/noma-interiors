import { useEffect, useState } from 'react'

export default function Hero() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleCtaClick = (e) => {
    e.preventDefault()
    const el = document.querySelector('#work')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={`hero${animated ? ' hero--animated' : ''}`}>
      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">INTERIOR DESIGN STUDIO · COLOMBO</span>
          <h1 className="hero__heading">
            <span className="line">
              <span className="line-inner">Spaces Designed</span>
            </span>
            <span className="line">
              <span className="line-inner">to Feel Like</span>
            </span>
            <span className="line">
              <span className="line-inner">Home.</span>
            </span>
          </h1>
          <p className="hero__body">
            Thoughtful interiors designed around the way you live, work, and experience your space.
          </p>
          <div className="hero__cta">
            <a href="#work" className="btn-text" onClick={handleCtaClick}>
              View Our Work <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="hero__image-wrap">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=85&auto=format&fit=crop"
            alt="Minimal modern living room interior with natural light and warm wood tones"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  )
}
