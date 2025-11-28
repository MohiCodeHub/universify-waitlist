import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://gpltwyvuzorhkoygbcbt.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwbHR3eXZ1em9yaGtveWdiY2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyMDIwNjcsImV4cCI6MjA3OTc3ODA2N30.B9i1BPSe570Lx969ELEcp6GxLCprQD4S1ufOqM0blCY"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

