'use client'

import { useState } from 'react'
// import { supabase } from '../../lib/supabase' - 주석 처리

export default function EmailForm() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      // Supabase 연결 대신 타이머로 대체
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // 성공 처리
      setIsSubmitted(true)
      console.log('이메일 제출 성공:', email)
    } catch (err) {
      console.error('이메일 제출 오류:', err)
      setError('이메일 제출 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsLoading(false)
    }
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
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`btn-primary whitespace-nowrap ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? '처리 중...' : '샘플 받기'}
          </button>
        </form>
      ) : (
        <div className="bg-green-100 text-green-700 p-4 rounded-lg">
          <p>감사합니다! 이메일로 샘플 챕터를 보내드렸습니다.</p>
        </div>
      )}
      
      {error && (
        <div className="mt-2 text-red-500 text-sm">
          {error}
        </div>
      )}
    </div>
  )
} 