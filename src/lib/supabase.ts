// import { createClient } from "@supabase/supabase-js";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// export const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
// );
export const supabase = createClientComponentClient();
