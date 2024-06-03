import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tqtznuzbydyymqiedxir.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxdHpudXpieWR5eW1xaWVkeGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzNzgxNzksImV4cCI6MjAzMDk1NDE3OX0.-D98iHMwBdARZ6DH9KzKTtmrflPOoD28b4AwPF6gnTs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
