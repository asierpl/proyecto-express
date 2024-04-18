//Este archivo configura y arranca el servidor de Express

//Limpia la consola
console.clear()

//Importa las librerías necesarias para el servidor
const express = require('express')
const cors    = require('cors')
const mongoose = require('mongoose')
const { router } = require('./router/router')

//Define la URL de Mongo mediante la URL de las variables de entorno o, si no, la URL local
let URL_ATLAS = process.env.URL_ATLAS || 'mongodb://127.0.0.1:27017/proyectofinal'
// let URL_ATLAS = 'mongodb+srv://asierpl210395:brocoli21@cluster0.7yzz5by.mongodb.net/proyectofinal'

//Crea una instancia de la aplicación Express
const app = express()

//Función asíncrona para conectar la aplicación a MongoDB
const conectar = async () => await mongoose.connect(URL_ATLAS)
    .then( ()=> console.log('Conectado a BBDD'))
    .catch( error => console.log( error ))

//Llamada a la función anterior para hacer la conexión a Mongo
conectar()

//Middleware para permitir solicitudes desde cualquier dominio.
app.use( cors() )
//Middleware para analizar solicitudes en formato JSON
app.use( express.json() )
//Middleware para analizar solicitudes con datos codificados de la URL
app.use( express.urlencoded({ extended : false }) )
//Middleware para asociar el enrutador de router.js con Express
app.use(router)

//Inicia el servidor en el puerto 3000, mostrando un mensaje en consola.
app.listen( 3000 , ()=> console.log('Iniciando API'))








