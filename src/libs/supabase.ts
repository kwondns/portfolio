import { createClient } from '@supabase/supabase-js';

import { SupabaseType } from '@/types';

const supabase = createClient<SupabaseType.Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY,
);

export default supabase;
