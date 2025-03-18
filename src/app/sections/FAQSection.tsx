'use client'

import AnimatedSection from '../components/AnimatedSection'
import FAQItem from '../components/FAQItem'

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="section-title">자주 묻는 질문</h2>
          <p className="section-subtitle">
            독자들이 가장 많이 궁금해하는 질문들에 대한 답변입니다.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto mt-12">
          {[
            {
              question: '이 책은 초보자도 이해할 수 있나요?',
              answer: '네, 이 책은 초보자부터 전문가까지 모두가 이해할 수 있도록 쉽고 명확하게 설명되어 있습니다. 기초부터 차근차근 설명하므로 사전 지식이 없어도 충분히 이해할 수 있습니다.'
            },
            {
              question: '책의 분량은 얼마나 되나요?',
              answer: '이 책은 총 300페이지로, 10개의 장으로 구성되어 있습니다. 각 장은 핵심 내용과 실습 과제, 요약으로 구성되어 있어 효율적으로 학습할 수 있습니다.'
            },
            {
              question: '전자책과 종이책의 차이점이 있나요?',
              answer: '내용은 동일하지만, 전자책에는 추가 디지털 자료와 링크가 포함되어 있습니다. 또한 전자책은 구매 즉시 읽을 수 있고, 휴대가 편리하다는 장점이 있습니다.'
            },
            {
              question: '환불 정책은 어떻게 되나요?',
              answer: '구매 후 14일 이내에 읽지 않은 상태라면 전액 환불이 가능합니다. 자세한 환불 정책은 구매 페이지에서 확인하실 수 있습니다.'
            },
            {
              question: '업데이트나 개정판이 나올 예정인가요?',
              answer: '네, 정기적으로 내용을 업데이트하고 있으며, 전자책 구매자는 무료로 업데이트된 내용을 받아보실 수 있습니다. 주요 개정판의 경우 할인된 가격으로 업그레이드하실 수 있습니다.'
            }
          ].map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
} 