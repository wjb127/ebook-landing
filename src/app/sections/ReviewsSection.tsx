'use client'

import AnimatedSection from '../components/AnimatedSection'
import TestimonialCard from '../components/TestimonialCard'

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="section-title">독자 후기</h2>
          <p className="section-subtitle">
            이 책을 읽은 독자들의 생생한 후기를 확인하세요.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              name: '김철수',
              role: '대학생',
              content: '이 책은 제 인생을 바꿔놓았습니다. 책에서 배운 내용을 실천하면서 많은 변화를 경험했고, 지금은 더 나은 삶을 살고 있습니다.',
              image: 'https://i.pravatar.cc/150?img=1'
            },
            {
              name: '이영희',
              role: '회사원',
              content: '처음에는 반신반의했지만, 책의 내용을 따라하다 보니 정말 효과가 있었습니다. 특히 세 번째 장의 내용은 실무에 바로 적용할 수 있어 좋았습니다.',
              image: 'https://i.pravatar.cc/150?img=5'
            },
            {
              name: '박지민',
              role: '프리랜서',
              content: '쉽고 명확한 설명으로 복잡한 개념도 이해하기 쉬웠습니다. 저자의 풍부한 경험이 책 전체에 녹아있어 신뢰할 수 있었습니다.',
              image: 'https://i.pravatar.cc/150?img=8'
            }
          ].map((review, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <TestimonialCard {...review} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
} 