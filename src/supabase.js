import { createClient } from '@supabase/supabase-js'

const supabaseOptions = {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
};

const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_SUPABASE_PUBLIC_KEY,
    supabaseOptions
)

export { supabase }