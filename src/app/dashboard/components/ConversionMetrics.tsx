'use client'

export default function ConversionMetrics() {
  // 실제 구현에서는 API에서 데이터를 가져옴
  const metrics = [
    { name: '방문자 → 이메일 구독', rate: 20.5, color: 'bg-blue-500' },
    { name: '이메일 구독 → 구매 클릭', rate: 31.2, color: 'bg-green-500' },
    { name: '방문자 → 구매 클릭', rate: 6.3, color: 'bg-purple-500' }
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">전환율</h2>
      
      <div className="space-y-6">
        {metrics.map((metric) => (
          <div key={metric.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{metric.name}</span>
              <span className="text-sm font-medium text-gray-700">{metric.rate}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className={`h-2.5 rounded-full ${metric.color}`} 
                style={{ width: `${metric.rate}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="text-sm font-medium text-gray-700 mb-3">전환 단계별 이탈률</h3>
        <div className="flex items-center space-x-1">
          <div className="h-10 bg-blue-500 rounded-l-md flex-grow flex items-center justify-center text-white text-xs">
            100%
          </div>
          <div className="h-10 bg-blue-400 flex-grow flex items-center justify-center text-white text-xs">
            79.5%
          </div>
          <div className="h-10 bg-blue-300 flex-grow flex items-center justify-center text-white text-xs">
            54.7%
          </div>
          <div className="h-10 bg-blue-200 rounded-r-md flex-grow flex items-center justify-center text-white text-xs">
            6.3%
          </div>
        </div>
        <div className="flex text-xs text-gray-500 mt-1 justify-between">
          <span>방문</span>
          <span>스크롤</span>
          <span>이메일</span>
          <span>구매</span>
        </div>
      </div>
    </div>
  )
} 