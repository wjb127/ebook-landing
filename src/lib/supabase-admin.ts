// 실제 Supabase 연결 대신 가짜 관리자 클라이언트 제공
export const supabaseAdmin = {
  from: (table: string) => ({
    select: () => {
      // 가상 데이터 생성
      const mockData = [];
      for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        
        mockData.push({
          id: i + 1,
          session_id: `session-${i}`,
          page: 'landing',
          referrer: Math.random() > 0.7 ? 'google.com' : Math.random() > 0.5 ? 'facebook.com' : 'direct',
          user_agent: 'Mozilla/5.0',
          created_at: date.toISOString(),
          country: ['한국', '미국', '일본', '중국', '영국'][Math.floor(Math.random() * 5)]
        });
      }
      
      return Promise.resolve({ data: mockData, error: null });
    },
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => Promise.resolve({ data: null, error: null }),
    delete: () => Promise.resolve({ data: null, error: null }),
    order: () => ({ limit: () => Promise.resolve({ data: [], error: null }) })
  }),
  auth: {
    signIn: () => Promise.resolve({ user: null, session: null, error: null }),
    signOut: () => Promise.resolve({ error: null }),
  },
  storage: {
    from: (bucket: string) => ({
      upload: () => Promise.resolve({ data: null, error: null }),
      getPublicUrl: () => ({ publicURL: '' }),
    }),
  },
}; 