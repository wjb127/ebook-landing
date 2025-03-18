'use client'

import AnimatedSection from '../components/AnimatedSection'
import PurchaseButton from '../components/PurchaseButton'

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="section-title">구매하기</h2>
          <p className="section-subtitle">
            지금 바로 책을 구매하고 새로운 지식을 얻어보세요.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection className="card border-2 border-gray-200">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">전자책</h3>
              <div className="text-4xl font-bold text-primary my-4">₩19,900</div>
              <p className="text-gray-600 mb-6">PDF, EPUB, MOBI 포맷 제공</p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  즉시 다운로드
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  모든 기기에서 읽기 가능
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  무료 업데이트
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  보너스 디지털 자료
                </li>
              </ul>
              <PurchaseButton />
            </div>
          </AnimatedSection>

          <AnimatedSection className="card border-2 border-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-bold">
              인기 상품
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">종이책 + 전자책</h3>
              <div className="text-4xl font-bold text-primary my-4">₩29,900</div>
              <p className="text-gray-600 mb-6">종이책 + 모든 전자책 포맷</p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  고품질 종이책 배송
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  전자책 즉시 다운로드
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  무료 업데이트
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  독점 보너스 콘텐츠
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  저자 사인본 (한정)
                </li>
              </ul>
              <PurchaseButton />
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            모든 구매에는 30일 환불 보증이 포함되어 있습니다.
          </p>
          <div className="flex justify-center space-x-4">
            <img src="/visa.svg" alt="Visa" className="h-8" />
            <img src="/mastercard.svg" alt="Mastercard" className="h-8" />
            <img src="/paypal.svg" alt="PayPal" className="h-8" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
} 