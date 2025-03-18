'use client'

import Image from 'next/image'
import AnimatedSection from '../components/AnimatedSection'
import EmailForm from '../components/EmailForm'

export default function PreviewSection() {
  return (
    <section id="preview" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="section-title">책 내용 미리보기</h2>
          <p className="section-subtitle">
            이 책에서 다루는 주요 내용을 살펴보세요.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: '첫 번째 장',
              description: '기초부터 시작하는 방법을 배우고 성공적인 첫 걸음을 내딛습니다.',
              icon: (
                <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              )
            },
            {
              title: '두 번째 장',
              description: '실전 기술과 전략을 배우고 실제 상황에 적용하는 방법을 익힙니다.',
              icon: (
                <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )
            },
            {
              title: '세 번째 장',
              description: '고급 개념과 심화 학습을 통해 전문가 수준의 지식을 습득합니다.',
              icon: (
                <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              )
            }
          ].map((chapter, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="card h-full flex flex-col items-center text-center">
                <div className="mb-6">{chapter.icon}</div>
                <h3 className="text-xl font-bold mb-3">{chapter.title}</h3>
                <p className="text-gray-600">{chapter.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-24 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">무료 샘플 챕터 받기</h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            책의 첫 번째 장을 무료로 읽어보세요. 이메일 주소를 입력하시면 PDF 파일을 보내드립니다.
          </p>
          
          <div className="mb-12">
            <EmailForm />
          </div>
          
          <div className="mt-12">
            <Image
              src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop"
              alt="책 미리보기"
              width={500}
              height={300}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
} 