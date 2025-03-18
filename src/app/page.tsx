'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSection from './sections/HeroSection'
import PreviewSection from './sections/PreviewSection'
import AuthorSection from './sections/AuthorSection'
import ReviewsSection from './sections/ReviewsSection'
import FAQSection from './sections/FAQSection'
import PricingSection from './sections/PricingSection'
import CTASection from './sections/CTASection'

// GSAP 플러그인 등록
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  useEffect(() => {
    // 스크롤 애니메이션 설정
    const sections = document.querySelectorAll('section')
    
    sections.forEach((section) => {
      gsap.fromTo(
        section.querySelectorAll('.animate-on-scroll'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
    
    return () => {
      // 컴포넌트 언마운트 시 ScrollTrigger 정리
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
      <HeroSection />
      <PreviewSection />
      <AuthorSection />
      <ReviewsSection />
      <FAQSection />
      <PricingSection />
      <CTASection />
    </>
  )
}
