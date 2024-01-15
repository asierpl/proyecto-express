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

const usuarioSchema = new mongoose.Schema(
    { user : String , pass : String },
    { collection : 'usuarios' }
)

const Usuario = mongoose.model( 'Usuario' , usuarioSchema)



const headerLogoSchema = new mongoose.Schema(
    { bonanza : String , partner : String , canonAlt : String , canonSrc : String},
    { collection : 'headerlogo' }
)
const HeaderLogo = mongoose.model('HeaderLogo' , headerLogoSchema)


const headerNavSchema = new mongoose.Schema(
    { href : String , title : String},
    { collection : 'headernav' }
)
const HeaderNav = mongoose.model( 'HeaderNav' , headerNavSchema)

const carrouselSchema = new mongoose.Schema(
    { src : String , alt : String },
    { collection : 'carrousel' }
)
const Carrousel = new mongoose.model( 'Carrousel' , carrouselSchema)



app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded({ extended : false }) )



app.get ('/' , async ( req , res , next )=>{

   const buscar = await Usuario.find()

    res.json(buscar)
   
})


app.post( '/' , async ( req , res , next) =>{
    const { user , pass } = req.body

    const buscar = await Usuario.findOne({
        user , pass
    })

    res.json(buscar)
})




app.get('/gestor' , async (req , res , next) => {
    
    const headerLogo = await HeaderLogo.findOne()
    const headerNav  = await HeaderNav.find()
    const carrousel = await Carrousel.find()
    
    const datos = {headerLogo , headerNav, carrousel}
    
    res.status(200).json(datos)
})


// app.get('/gestor' , async (req , res , next) => {
    
//     const headerLogo = await HeaderLogo.findOne()
//     const headerNav  = await HeaderNav.find()
//     const carrousel = await Carrousel.find()
//     const headerDatos = {headerLogo , headerNav}
    
//     res.status(200).json(headerDatos , carrousel)
// })






app.listen( 3000 , ()=> console.log('Iniciando API'))