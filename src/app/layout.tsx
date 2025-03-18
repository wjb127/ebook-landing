import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: '전자책 제목 - 당신의 삶을 변화시킬 지식',
  description: '이 전자책은 당신의 삶에 긍정적인 변화를 가져다 줄 것입니다. 지금 바로 구매하세요!',
  keywords: '전자책, 자기계발, 지식, 교육',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={inter.variable}>
      <body className="bg-white text-dark">
        <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="font-bold text-xl text-primary">책제목</div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#preview" className="hover:text-primary transition-colors">미리보기</a></li>
                <li><a href="#author" className="hover:text-primary transition-colors">저자</a></li>
                <li><a href="#reviews" className="hover:text-primary transition-colors">후기</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">구매</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-dark text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">책제목</h3>
                <p className="text-gray-300">당신의 삶을 변화시킬 지식의 보고</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">링크</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">홈</a></li>
                  <li><a href="#preview" className="text-gray-300 hover:text-white">미리보기</a></li>
                  <li><a href="#author" className="text-gray-300 hover:text-white">저자</a></li>
                  <li><a href="#faq" className="text-gray-300 hover:text-white">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">연락처</h3>
                <p className="text-gray-300">문의사항이 있으시면 아래 이메일로 연락주세요.</p>
                <p className="text-gray-300 mt-2">contact@example.com</p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} 책제목. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
