import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'The Kandy Residence',
    category: 'Residential · Kandy',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85&auto=format&fit=crop',
    alt: 'Contemporary residential interior with natural materials and open plan living space in Kandy',
    reversed: false,
  },
  {
    number: '02',
    title: 'The Olive House',
    category: 'Residential · Colombo',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&q=85&auto=format&fit=crop',
    alt: 'Elegant Colombo residence with muted tones, warm lighting and bespoke joinery details',
    reversed: true,
  },
  {
    number: '03',
    title: 'Atelier Café',
    category: 'Commercial · Colombo',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1100&q=85&auto=format&fit=crop',
    alt: 'Refined café interior with exposed concrete, tropical planting and considered material palette',
    reversed: false,
  },
]

function ProjectRow({ project, index, onMouseEnter, onMouseLeave, onMouseMove }) {
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
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={rowRef}
      className={`project-row reveal${project.reversed ? ' project-row--reversed' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      <div className="project-row__image-wrap project-row__image">
        <img
          src={project.image}
          alt={project.alt}
          className="project-row__img"
          loading="lazy"
        />
      </div>

      <div className="project-row__info">
        <span className="project-row__number">{project.number}</span>
        <h3 className="project-row__title">{project.title}</h3>
        <p className="project-row__meta">{project.category}</p>
      </div>
    </article>
  )
}

export default function Projects() {
  const headRef = useRef(null)

  // Cursor state
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [cursorVisible, setCursorVisible] = useState(false)

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

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseEnter = () => {
    setCursorVisible(true)
  }

  const handleMouseLeave = () => {
    setCursorVisible(false)
  }

  return (
    <section id="work" className="projects">
      {/* Desktop custom cursor */}
      <div
        className={`project-cursor${cursorVisible ? ' project-cursor--visible' : ''}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      >
        View Project
      </div>

      <div className="section-wrap">
        <div className="section-header reveal" ref={headRef}>
          <div>
            <span className="eyebrow">SELECTED WORK</span>
            <h2 className="section-heading">Selected Projects</h2>
          </div>
          <p className="section-desc">
            A collection of residential and commercial spaces designed by NOMA.
          </p>
        </div>

        <div className="projects__list">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.number}
              project={project}
              index={i}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            />
          ))}
        </div>

        <div className="projects__footer">
          <a href="#" className="btn-text">
            View All Projects <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
