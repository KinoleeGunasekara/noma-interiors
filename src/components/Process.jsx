import { useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understanding your needs, lifestyle, space and vision.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Developing concepts, layouts, materials and visual direction.',
  },
  {
    number: '03',
    title: 'Refine',
    description: 'Working together to perfect every important detail.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'Managing the process and bringing the final design to life.',
  },
]

export default function Process() {
  const headRef = useRef(null)
  const stepsRef = useRef([])

  useEffect(() => {
    const elements = [headRef.current, ...stepsRef.current].filter(Boolean)
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
    <section className="process">
      <div className="section-wrap">
        <div className="section-header reveal" ref={headRef}>
          <div>
            <span className="eyebrow">PROCESS</span>
            <h2 className="section-heading">From Idea to Space.</h2>
          </div>
        </div>

        <div className="process__grid">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="process-step reveal"
              ref={(el) => (stepsRef.current[i] = el)}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="process-step__num">{step.number}</span>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
