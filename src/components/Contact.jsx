import { useEffect, useRef } from 'react'

export default function Contact() {
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
    <section id="contact" className="contact">
      <div className="contact__bg">
        <img
          src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1600&q=85&auto=format&fit=crop"
          alt="High-end minimal sunlit tropical modern interior"
          className="contact__bg-img"
          loading="lazy"
        />
      </div>

      <div className="contact__content reveal" ref={ref}>
        <span className="contact__eyebrow">START A CONVERSATION</span>
        <h2 className="contact__heading">Have a Space in Mind?</h2>
        <p className="contact__body">
          Tell us what you're planning. We'll help you turn the idea into a space worth experiencing.
        </p>
        <a href="#" className="contact__cta">
          Start a Project <span className="arrow">→</span>
        </a>
      </div>
    </section>
  )
}
