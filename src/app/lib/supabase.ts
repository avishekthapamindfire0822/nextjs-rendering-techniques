import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://qtdgjgceedafuikdvtqe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0ZGdqZ2NlZWRhZnVpa2R2dHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2MDgwMTksImV4cCI6MjAxMzE4NDAxOX0.Mp-l8FmljipwnWvZHO0jT7Emyfy6jbwY_NcOzrQlMhs"
);

export default supabase;
