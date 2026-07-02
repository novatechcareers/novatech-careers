import { createClient } 
from "@supabase/supabase-js";

export const supabase =
createClient(

"https://byfgfqcvsuvesvuqmfvp.supabase.co",

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5ZmdmcWN2c3V2ZXN2dXFtZnZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4NjAzNzksImV4cCI6MjA5ODQzNjM3OX0.0juTwdXln0fkUj-R6NXO8NGT4lOiBXfwbWx-me0BjUg"

);