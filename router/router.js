//Este archivo define el enrutamiento asociadas a Express

//Importa la librería
const express = require('express')
//Importa los controladores utilizados en controller.js
const { postLogin, getLogin, getGestor, getQuienes, postGestor, putGestor, deleteGestor } = require('../controller/controller')

//Define un enrutador de Express
const router = express.Router()

//Ruta principal para el login de usuarios
router.route('/')
    .get(getLogin)   //Método GET para inicio de sesión
    .post(postLogin) //Método POST para procesar el inicio de sesión
    
//Ruta para el endpoint "/gestor"
router.route('/gestor')
    .get(getGestor)         //Método GET para obtener información del gestor, concretamente una lista de las solicitudes de asistencia técnica del usuario.
    .post(postGestor)       //Método POST para añadir nuevas solicitudes
    .put(putGestor)         //Método PUT para actualizar la información de una solicitud
    .delete(deleteGestor)   //Método DELETE eliminar solicitudes de la lista

//Ruta para el endpoint "/quienes-somos"
router.route('/quienes-somos')
    .get(getQuienes)           ////Método GET para obtener información sobre "quienes somos"


//Exporta el enrutador
module.exports = { router }