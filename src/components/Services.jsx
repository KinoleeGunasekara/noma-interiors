import { useEffect, useRef } from 'react'

const services = [
  {
    number: '01',
    title: 'Interior Design',
    description: 'Complete interior design solutions for residential and commercial spaces.',
  },
  {
    number: '02',
    title: 'Architecture',
    description: 'Thoughtful architectural concepts developed around your lifestyle and requirements.',
  },
  {
    number: '03',
    title: 'Space Planning',
    description: 'Functional layouts that make better use of every square metre.',
  },
  {
    number: '04',
    title: 'Project Management',
    description: 'From concept to completion, we coordinate the details that bring the design together.',
  },
]

function ServiceRow({ service, index }) {
  const rowRef = useRef(null)

  useEffect(() => {
    const el = rowRef.current
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
    <div
      ref={rowRef}
      className="service-row reveal"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="service-row__number">{service.number}</span>
      <h3 className="service-row__title">{service.title}</h3>
      <p className="service-row__desc">{service.description}</p>
    </div>
  )
}

export default function Services() {
  const headRef = useRef(null)

  useEffect(() => {
    const el = headRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal--visible')
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="services">
      <div className="section-wrap">
        <div className="section-header reveal" ref={headRef}>
          <div>
            <span className="eyebrow">SERVICES</span>
            <h2 className="section-heading">What We Do</h2>
          </div>
        </div>

        <div className="services__list">
          {services.map((service, i) => (
            <ServiceRow key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
