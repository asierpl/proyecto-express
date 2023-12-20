console.clear()

const express = require('express')
const cors    = require('cors')
const mongoose = require('mongoose')

let URL_ATLAS = process.env.URL_ATLAS || 'mongodb://127.0.0.1:27017/proyectofinal'
// let URL_ATLAS = 'mongodb+srv://asierpl210395:brocoli21@cluster0.7yzz5by.mongodb.net/proyectofinal'

const app = express()

const conectar = async () => await mongoose.connect(URL_ATLAS)
    .then( ()=> console.log('Conectado a BBDD'))
    .catch( error => console.log( error ))

conectar()

// const usuarioSchema = new mongoose.Schema(
//     { user : String , pass : String },
//     { collection : 'usuarios' }
// )

// const Usuario = mongoose.model( 'usuario' , usuarioSchema)

app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded({ extended : false }) )

// app.get ('/' , async ( req , res , next )=>{

//     const buscar = await Usuario.find()

//     res.json(buscar)
   
// })

app.get ('/' ,  ( req , res , next )=>{

   

    res.json('Haciendo get')
   
})


app.post( '/' , async ( req , res , next) =>{
    const { user , pass } = req.body

    const buscar = await Usuario.findOne({
        user , pass
    })

    res.json(buscar)
})

app.listen( 3000 , ()=> console.log('Iniciando API'))