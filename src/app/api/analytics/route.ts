import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabase-admin';

export async function GET(request: Request) {
  // 여기서 인증 확인 (예: API 키 또는 세션 확인)
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.ADMIN_API_KEY}`) {
    return NextResponse.json({ error: '인증 실패' }, { status: 401 });
  }

  // 관리자 권한으로 데이터 조회
  const { data, error } = await supabaseAdmin
    .from('page_visits')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
} 