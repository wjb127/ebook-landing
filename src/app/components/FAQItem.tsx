'use client'

import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <svg 
          className={`h-5 w-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="pb-4">{answer}</p>
      </div>
    </div>
  )
} 