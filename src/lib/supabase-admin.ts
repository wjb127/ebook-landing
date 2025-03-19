import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// 이 클라이언트는 서버 사이드에서만 사용해야 함
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey); 