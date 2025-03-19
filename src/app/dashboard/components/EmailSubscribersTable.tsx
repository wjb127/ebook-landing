'use client'

import { useState, useEffect } from 'react'

export default function EmailSubscribersTable() {
  const [isLoading, setIsLoading] = useState(true)
  const [subscribers, setSubscribers] = useState<any[]>([])

  useEffect(() => {
    // 실제 구현에서는 API에서 데이터를 가져옴
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500)) // 로딩 시뮬레이션
      
      // 샘플 데이터
      setSubscribers([
        { id: 1, email: 'user1***@gmail.com', source: 'sample_chapter', subscribed_at: '2023-05-15T09:23:45' },
        { id: 2, email: 'john.d***@example.com', source: 'sample_chapter', subscribed_at: '2023-05-14T14:12:33' },
        { id: 3, email: 'alice***@yahoo.com', source: 'sample_chapter', subscribed_at: '2023-05-14T08:45:21' },
        { id: 4, email: 'robert***@gmail.com', source: 'sample_chapter', subscribed_at: '2023-05-13T19:34:12' },
        { id: 5, email: 'emma.s***@outlook.com', source: 'sample_chapter', subscribed_at: '2023-05-13T11:22:09' }
      ])
      
      setIsLoading(false)
    }
    
    loadData()
  }, [])

  // 이메일 마스킹 함수
  const maskEmail = (email: string) => {
    const [username, domain] = email.split('@')
    if (username.length <= 3) return email
    return `${username.substring(0, 3)}***@${domain}`
  }

  // 날짜 포맷팅 함수
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">최근 이메일 구독자</h2>
        <button className="text-sm text-primary hover:underline">모두 보기</button>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이메일</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">출처</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">구독 일시</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {subscribers.map((subscriber) => (
                <tr key={subscriber.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{maskEmail(subscriber.email)}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {subscriber.source === 'sample_chapter' ? '샘플 챕터' : subscriber.source}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{formatDate(subscriber.subscribed_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
} 