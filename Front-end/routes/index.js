const router = require('express').Router();
const express = require('express')
const app = express('')
const axios = require('axios')
const passport = require('passport');
require('../configuration/urlBackEnd')

router.get('/', (req, res, next) => {
  res.render('signin');
});

router.get('/signin', (req, res, next) => {
  res.render('signin');
});

router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.get('/CrearCuenta', (req, res, next) => {
  res.render('CrearCuenta');
});

router.get('/Bienvenida', (req, res, next) => {
  res.render('Bienvenida');
});

app.get('/singin', (req, res) => {
  axios.post(urlBackEnd + '/singin')
  .then(function (response) {
    const data = response.data.data;
    let user = req.user;
    res.render('singin', user)  
  })
})


// router.post('/signin', passport.authenticate('local-signin', {
   
//   successRedirect: '/Bienvenida',
  
//   failureRedirect: '/signin',
  
//   failureFlash: true
// }));

// router.post('/signup', passport.authenticate('local-signup', {
   
//   successRedirect: '/signin',
  
//   failureRedirect: '/signup',
  
//   failureFlash: true
// }));


// router.get('/logout', (req, res, next) => {//para cerrar la sesión
//   req.logout();
//   res.redirect('/');//lo devuelvo a la pagina principal de mi aplicacion
// });


function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }

  res.redirect('/')
}

router.get('/olvidoContrasenia', (req, res, next) => {
  res.render('olvidoContrasenia');
});

router.get('/CrearCuenta', (req, res, next) => {
  res.render('CrearCuenta');
});

router.get('/img', function(req, res,next){
  res.render( `public/${img}` );
}); 

router.get('/crearGrupo', (req, res, next) => {
  res.render('crearGrupo');
});

router.get('/chatGrupo', (req, res, next) => {
  res.render('chatGrupo');
});

router.get('/editarGrupo', (req, res, next) => {
  res.render('editarGrupo');
});

router.get('/chat', (req, res, next) => {
  res.render('chat');
});

router.get('/alumnosTutor', (req, res, next) => {
  res.render('alumnosTutor');
});

router.get('/verPerfil', (req, res, next) => {
  res.render('verPerfil');
});

router.get('/Grupo', (req, res, next) => {
  res.render('Grupo');
});

router.get('/editarPerfil', (req, res, next) => {
  res.render('editarPerfil');
});

router.get('/verGrupos', (req, res, next) => {
  res.render('verGrupos');
});

router.get('/solicitudesTutor', (req, res, next) => {
  res.render('solicitudesTutor');
});

router.get('/solicitudesGrupo', (req, res, next) => {
  res.render('solicitudesGrupo');
});

router.get('/unirseGrupo', (req, res, next) => {
  res.render('unirseGrupo');
});

router.get('/perfilTutor', (req, res, next) => {
  res.render('perfilTutor');
});
module.exports = router;
