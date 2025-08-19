import { createClient } from '@supabase/supabase-js';

const supabaseClient = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_ADMIN_KEY as string
);

export default supabaseClient;
