'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { v4 as uuidv4 } from 'uuid'
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
    
    // 페이지 방문 추적
    const trackPageVisit = () => {
      // 세션 ID 생성 또는 가져오기
      let sessionId = localStorage.getItem('session_id')
      if (!sessionId) {
        sessionId = uuidv4()
        localStorage.setItem('session_id', sessionId)
      }
      
      // 여기서 방문 정보를 다른 방식으로 처리하거나 콘솔에 기록할 수 있습니다
      console.log('페이지 방문:', {
        session_id: sessionId,
        page: 'landing',
        referrer: document.referrer || 'direct',
        user_agent: navigator.userAgent
      })
    }
    
    trackPageVisit()
    
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
