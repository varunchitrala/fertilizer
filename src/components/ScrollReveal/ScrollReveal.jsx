import { useEffect, useRef, useState } from 'react'
import './ScrollReveal.css'

function ScrollReveal({ children, className = '', delay = 0, distance = 'up', once = true }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(element)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal-${distance} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
