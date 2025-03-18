'use client'

import Book3D from '../components/Book3D'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-accent to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-on-scroll">
              당신의 삶을 변화시킬<br />
              <span className="text-primary">특별한 지식</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-on-scroll">
              이 책은 당신의 삶에 긍정적인 변화를 가져다 줄 것입니다. 지금 바로 시작하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
              <a href="#pricing" className="btn-primary text-center">
                지금 구매하기
              </a>
              <a href="#preview" className="btn-secondary text-center">
                미리보기
              </a>
            </div>
            <div className="mt-8 flex items-center animate-on-scroll">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i+10}`} 
                      alt="User" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">500+ 독자들의 선택</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <Book3D />
          </div>
        </div>
      </div>
    </section>
  )
} 