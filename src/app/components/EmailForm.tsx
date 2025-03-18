'use client'

import { useState } from 'react'

export default function EmailForm() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 여기에 이메일 제출 로직 추가
    setIsSubmitted(true)
  }

  return (
    <div>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일 주소를 입력하세요"
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary flex-grow"
          />
          <button
            type="submit"
            className="btn-primary whitespace-nowrap"
          >
            샘플 받기
          </button>
        </form>
      ) : (
        <div className="bg-green-100 text-green-700 p-4 rounded-lg">
          <p>감사합니다! 이메일로 샘플 챕터를 보내드렸습니다.</p>
        </div>
      )}
    </div>
  )
} 