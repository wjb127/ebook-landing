'use client'

import { useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0 
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView && sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          delay, 
          ease: 'power3.out' 
        }
      )
    }
  }, [inView, delay])

  return (
    <div ref={sectionRef} className={className}>
      <div ref={ref}>{children}</div>
    </div>
  )
} 