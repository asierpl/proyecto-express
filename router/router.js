//Este archivo define el enrutamiento asociadas a Express

//Importa la librería
const express = require('express')
//Importa los controladores utilizados en controller.js
const { postLogin, getLogin, getInicio, getQuienes, getContacto , getProductos, getToner, postToner, deleteToner, putToner } = require('../controller/controller')

//Define un enrutador de Express
const router = express.Router()

//Ruta principal para el login de usuarios
router.route('/')
    .get(getLogin)   //Método GET para inicio de sesión
    .post(postLogin) //Método POST para procesar el inicio de sesión
    
//Ruta para el endpoint "/inicio"
router.route('/inicio')
    .get(getInicio)         //Método GET para obtener información sobre la página de inicio.
    

//Ruta para el endpoint "/quienes-somos"
router.route('/quienes-somos')
    .get(getQuienes)           ////Método GET para obtener información sobre "quienes somos"

//Ruta para el endpoint "/contacto"
router.route('/contacto')
    .get(getContacto)           ////Método GET para obtener información sobre "contacto"

//Ruta para el endpoint "/productos"
router.route('/productos')
    .get(getProductos)           ////Método GET para obtener información sobre "productos"

//Ruta para el endpoint "/mantenimiento"
router.route('/mantenimiento')
    .get(getToner)           ////Método GET para obtener información sobre "mantenimiento"
    .post(postToner)         ////Método GET para añadir información sobre "mantenimiento"

router.route('/mantenimiento/:id') 
    .delete(deleteToner)       ////Método DELETE para eliminar información sobre "mantenimiento"
    .put(putToner)             ////Método PUT para editar información sobre "mantenimiento"








//Exporta el enrutador
module.exports = { router }