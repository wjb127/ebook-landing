'use client'

import AnimatedSection from '../components/AnimatedSection'

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            이 책은 당신의 삶을 변화시킬 수 있는 지식과 통찰력을 제공합니다. 
            지금 바로 구매하고 새로운 여정을 시작하세요.
          </p>
          <a href="#pricing" className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
            지금 구매하기
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
} 