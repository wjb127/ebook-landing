// 실제 Supabase 연결 대신 가짜 클라이언트 제공
export const supabase = {
  from: (table: string) => ({
    select: () => Promise.resolve({ data: [], error: null }),
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => Promise.resolve({ data: null, error: null }),
    delete: () => Promise.resolve({ data: null, error: null }),
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