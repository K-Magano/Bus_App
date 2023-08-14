import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rvkebmxmadjzjpthghvq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2a2VibXhtYWRqempwdGhnaHZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5OTE1NDIsImV4cCI6MjAwNjU2NzU0Mn0.qMloyDpMbFZ8jEUU1ux3La-YVh6lf3S24ld9_Rpjmaw'


const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase



