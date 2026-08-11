import { useEffect, useRef } from 'react'

const testimonials = [
  {
    quote: '“NOMA completely changed the way we experienced our home. Everything feels intentional, but still feels like us.”',
    name: 'Amaya Fernando',
    role: 'Residential Client',
  },
  {
    quote: '“They understood our vision from the first meeting and turned a completely empty space into something we are proud of.”',
    name: 'Daniel Perera',
    role: 'Commercial Client',
  },
]

export default function Testimonials() {
  const refs = useRef([])
  const headRef = useRef(null)

  useEffect(() => {
    const elements = [headRef.current, ...refs.current].filter(Boolean)
    elements.forEach((el) => {
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
    })
  }, [])

  return (
    <section className="testimonials">
      <div className="section-wrap">
        <div className="section-header reveal" ref={headRef}>
          <div>
            <span className="eyebrow">TESTIMONIALS</span>
            <h2 className="section-heading">What Our Clients Say</h2>
          </div>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="testimonial reveal"
              ref={(el) => (refs.current[i] = el)}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <blockquote className="testimonial__quote">{t.quote}</blockquote>
              <div className="testimonial__meta">
                <p className="testimonial__name">{t.name}</p>
                <p className="testimonial__role">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
