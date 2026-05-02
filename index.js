import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wmldypredmbdpcrokdau.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtbGR5cHJlZG1iZHBjcm9rZGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc1MDY2NjgsImV4cCI6MjA5MzA4MjY2OH0.hGsybjBSEBQ_l63L8fMjzpvAe6OJL3fnUE42ifkHbIs'

const supabase = createClient(supabaseUrl, supabaseKey)

async function obtenerEstudiantes() {
  const { data, error } = await supabase
    .from('estudiantes')
    .select('*')

  if (error) {
    console.log('Error:', error)
  } else {
    console.log('Datos:', data)
  }
}

obtenerEstudiantes()