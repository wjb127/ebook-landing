'use client'

import Image from 'next/image'

export default function Book3D() {
  return (
    <div className="book-3d w-64 h-80 relative">
      <div className="book-spine"></div>
      <div className="book-pages"></div>
      <div className="book-cover">
        <Image
          src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=500&auto=format&fit=crop"
          alt="책 표지"
          width={256}
          height={320}
          className="rounded-md shadow-lg"
        />
      </div>
    </div>
  )
} 