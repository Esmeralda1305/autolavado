import supabase from './src/lib/supabase.js'

async function testConexion() {
  const { data, error } = await supabase
    .from('reg_servicio')    // pon el nombre de una tabla que ya tengas
    .select('*')
    .limit(1)

  if (error) {
    console.error('❌ Error al conectar con Supabase:', error.message)
  } else {
    console.log('✅ Conexión exitosa con Supabase:', data)
  }
}

testConexion()