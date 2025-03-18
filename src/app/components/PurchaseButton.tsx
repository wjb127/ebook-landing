'use client'

export default function PurchaseButton() {
  return (
    <button 
      className="btn-primary w-full"
      onClick={() => {
        // 여기에 구매 로직 추가
        alert('구매 페이지로 이동합니다.')
      }}
    >
      지금 구매하기
    </button>
  )
} 