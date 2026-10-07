const express = require('express');
const router = express.Router();

// INICIO
router.get('/', (req, res) => {
    const mensaje = 'Bienvenido a la pagina de inicio';
    const titulo = 'Inicio';
    res.render('inicio', { mensaje, titulo });
});

// SERVICIOS
router.get('/servicios', (req, res) => {
    const mensaje = 'Bienvenido a la pagina de Servicios';
    const titulo = 'Servicios';
    res.render('servicios', { mensaje, titulo });
});

// UBICACIÓN
router.get('/ubicacion', (req, res) => {
    const mensaje = 'Bienvenido a la pagina de Ubicación';
    const titulo = 'Ubicacion';
    res.render('ubicacion', { mensaje, titulo });
});

// CONTACTO
router.get('/contacto', (req, res) => {
    const mensaje = 'Bienvenido a la pagina de Contacto';
    const titulo = 'Contacto';
    res.render('contacto', { mensaje, titulo });
});


// 🔥 NUEVAS RUTAS DE SERVICIOS (IMPORTANTE)

// Servicio Express
router.get('/servicio-express', (req, res) => {
    res.render('servicio-express');
});

// Servicio Detallado
router.get('/servicio-detallado', (req, res) => {
    res.render('servicio-detallado');
});

// Servicio Completo
router.get('/servicio-completo', (req, res) => {
    res.render('servicio-completo');
});

router.get('/servicio-express-plus', (req, res) => {
  res.render('servicio-express-plus');
});

router.get('/servicio-detallado-premium', (req, res) => {
  res.render('servicio-detallado-premium');
});

router.get('/servicio-completo-plus', (req, res) => {
  res.render('servicio-completo-plus');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/registrodeservicio', (req, res) => {
  res.render('registrodeservicio');
});

module.exports = router;
