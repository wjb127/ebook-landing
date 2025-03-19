'use client'

import { useState, useEffect } from 'react'

export default function PurchaseClicksTable() {
  const [isLoading, setIsLoading] = useState(true)
  const [purchases, setPurchases] = useState<any[]>([])

  useEffect(() => {
    // 실제 구현에서는 API에서 데이터를 가져옴
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1800)) // 로딩 시뮬레이션
      
      // 샘플 데이터
      setPurchases([
        { id: 1, product_type: '전자책', price: 19900, timestamp: '2023-05-15T10:23:45' },
        { id: 2, product_type: '종이책+전자책', price: 29900, timestamp: '2023-05-15T09:12:33' },
        { id: 3, product_type: '전자책', price: 19900, timestamp: '2023-05-14T16:45:21' },
        { id: 4, product_type: '종이책+전자책', price: 29900, timestamp: '2023-05-14T14:34:12' },
        { id: 5, product_type: '전자책', price: 19900, timestamp: '2023-05-13T11:22:09' }
      ])
      
      setIsLoading(false)
    }
    
    loadData()
  }, [])

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

  // 가격 포맷팅 함수
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW'
    }).format(price)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">최근 구매 클릭</h2>
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
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제품</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">가격</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">클릭 일시</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {purchases.map((purchase) => (
                <tr key={purchase.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      purchase.product_type === '전자책' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {purchase.product_type}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{formatPrice(purchase.price)}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{formatDate(purchase.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
} 