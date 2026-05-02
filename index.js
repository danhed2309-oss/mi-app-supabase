import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://wmldypredmbdpcrokdau.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtbGR5cHJlZG1iZHBjcm9rZGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc1MDY2NjgsImV4cCI6MjA5MzA4MjY2OH0.hGsybjBSEBQ_l63L8fMjzpvAe6OJL3fnUE42ifkHbIs'
const supabase = createClient(supabaseUrl, supabaseKey)
async function gestionarEstudiantes() {
  console.log('--- Iniciando aplicación ---')
  // 1. 
  const { error: insertError } = await supabase
    .from('estudiantes')
    .insert([
      { id: 1234567, nombre: 'Nuevo Estudiante', carrera: 'Nueva Carrera' }
    ])

  if (insertError) {
    console.log('Aviso inserción:', insertError.message)
  } else {
    console.log('¡Estudiante agregado con éxito desde el código!')
  }
  // 2.  
  const { data, error: selectError } = await supabase
    .from('estudiantes')
    .select('*')

  if (selectError) {
    console.log('Error al consultar:', selectError.message)
  } else {
    console.log('--- Lista de Estudiantes en Supabase ---')
    console.table(data) 
  }
}

gestionarEstudiantes()
