import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal--visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about">
      <div className="about__inner reveal" ref={ref}>
        <div className="about__image-wrap">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=85&auto=format&fit=crop"
            alt="Architectural and interior detail of material samples and design plans in NOMA studio"
            className="about__image"
            loading="lazy"
          />
        </div>

        <div className="about__content">
          <span className="eyebrow">OUR APPROACH</span>
          <h2 className="about__heading">Less, But Better.</h2>
          <div className="about__body">
            <p>
              We believe good interiors don’t need to compete for attention.
            </p>
            <p>
              NOMA creates considered spaces where materials, proportions, light, and functionality work together naturally.
            </p>
            <p>
              From the first sketch to the final detail, we work closely with our clients to create spaces that feel personal, practical, and timeless.
            </p>
          </div>
          <a href="#" className="btn-text">
            More About NOMA <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
