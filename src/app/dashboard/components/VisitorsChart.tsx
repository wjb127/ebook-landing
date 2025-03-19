'use client'

import { useEffect, useState } from 'react'

export default function VisitorsChart() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true)
        // 실제 구현에서는 API에서 데이터를 가져옴
        await new Promise(resolve => setTimeout(resolve, 1000)) // 로딩 시뮬레이션
        setIsLoading(false)
      } catch (err) {
        setError('데이터를 불러오는 중 오류가 발생했습니다.')
        setIsLoading(false)
      }
    }
    
    loadData()
  }, [])

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 h-80 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 h-80 flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  // 차트 데이터 (실제 구현에서는 API에서 가져온 데이터 사용)
  const days = ['월', '화', '수', '목', '금', '토', '일']
  const visitors = [120, 150, 180, 220, 250, 190, 210]
  const maxVisitors = Math.max(...visitors)

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">일별 방문자 수</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-primary text-white rounded-md">주간</button>
          <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-md">월간</button>
          <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-md">연간</button>
        </div>
      </div>
      
      <div className="h-64 flex items-end space-x-2">
        {days.map((day, index) => (
          <div key={day} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-blue-100 rounded-t-md relative group"
              style={{ 
                height: `${(visitors[index] / maxVisitors) * 100}%`,
                minHeight: '20px'
              }}
            >
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {visitors[index]}명
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-500">{day}</div>
          </div>
        ))}
      </div>
    </div>
  )
} 