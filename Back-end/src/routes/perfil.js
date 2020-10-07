const express = require('express');
const router = express.Router();
const Perfil = require('../models/perfil');

router.get('/perfil/', async (req, res, next) => {
  const perfiles = await Perfil.find(req.usuario.id);
  res.status(200)
  res.send(perfiles)
});

router.get('/perfil/:id', async (req, res, next) => {
  const perfiles = await Perfil.findById(req.params.id).populate(usuario);
  console.log(perfiles)
  res.status(200)
  res.send(perfiles)
});

router.post('/perfil/add', async (req, res, next) => {
  console.log('POST /perfil/add')
  const perfiles = new Perfil(req.body)
  perfiles.nombre=req.body.nombre
  perfiles.carrera=req.body.carrera
  perfiles.cursandoActualmente=req.body.cursandoActualmente
  perfiles.preparandoFinales=req.body.preparandoFinales
  // perfiles.usuario = req.usuario.id

 
  console.log(req.body)
  await perfiles.save();
  
 /* const perfiles = new Perfil(req.body);
  perfiles.user = req.user.id;//tengo a que usuario le pertenece el perfil creado recientemente
  await perfiles.save();
  console.log(perfiles)
  res.redirect('/perfil/miaccount');*/
});

router.get('/perfil/turn/:id', async (req, res, next) => {
  let { id } = req.params;
  const perfiles = await Perfil.findById(id).populate('usuario');
  perfiles.status = !perfiles.status;
  await perfiles.save();
  res.status(200)
});

router.get('/perfil/:id', async (req, res, next) => {
  const perfiles = await Perfil.findById(req.params.id).populate('usuario');
  console.log(perfiles)
  res.status(200)
  res.send(perfiles)

});

router.put('/perfil/update/:id', async (req, res, next) => {
  const { id } = req.params;
  await Perfil.update({_id: id}, req.body);
  res.status(200)
  res.send(perfiles)

});

router.delete('perfil/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Perfil.remove({_id: id}).populate('usuario');
  res.status(200)
  res.send(perfiles)
}); 

module.exports = router;