import { NextResponse } from 'next/server';

// 가상 데이터를 반환하는 API로 변경
export async function GET(request: Request) {
  // 인증 확인 (간단한 API 키 체크)
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.ADMIN_API_KEY || 'demo-api-key'}`) {
    return NextResponse.json({ error: '인증 실패' }, { status: 401 });
  }

  // 가상 데이터 생성
  const mockData = generateMockData();

  return NextResponse.json({ data: mockData });
}

// 가상 데이터 생성 함수
function generateMockData() {
  const now = new Date();
  const data = [];
  
  // 최근 30일 동안의 가상 방문 데이터 생성
  for (let i = 0; i < 30; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    data.push({
      id: i + 1,
      session_id: `session-${i}`,
      page: 'landing',
      referrer: Math.random() > 0.7 ? 'google.com' : Math.random() > 0.5 ? 'facebook.com' : 'direct',
      user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      created_at: date.toISOString(),
      country: ['한국', '미국', '일본', '중국', '영국'][Math.floor(Math.random() * 5)]
    });
  }
  
  return data;
} 