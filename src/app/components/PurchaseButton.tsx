'use client'

import { useState } from 'react'
// import { supabase } from '../../lib/supabase' - 주석 처리

interface PurchaseButtonProps {
  productType?: string;
  price?: number;
}

export default function PurchaseButton({ productType = '전자책', price = 19900 }: PurchaseButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handlePurchaseClick = async () => {
    setIsLoading(true)
    
    try {
      // Supabase 연결 대신 타이머로 대체
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // 구매 클릭 이벤트 로깅 (콘솔에만 출력)
      console.log('구매 클릭:', {
        product_type: productType,
        price: price,
        timestamp: new Date().toISOString()
      })
      
      // 실제 구매 페이지로 이동하는 로직
      alert(`${productType} 구매 페이지로 이동합니다. (가격: ${price.toLocaleString()}원)`)
      
    } catch (err) {
      console.error('구매 클릭 추적 오류:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button 
      className={`btn-primary w-full ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
      onClick={handlePurchaseClick}
      disabled={isLoading}
    >
      {isLoading ? '처리 중...' : '지금 구매하기'}
    </button>
  )
} 