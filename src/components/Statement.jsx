import { useEffect, useRef } from 'react'

export default function Statement() {
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
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="statement">
      <div className="statement__inner reveal" ref={ref}>
        <blockquote className="statement__quote">
          Good design doesn't ask for <em>attention</em>. It earns it.
        </blockquote>
      </div>
    </section>
  )
}
