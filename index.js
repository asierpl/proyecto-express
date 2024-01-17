console.clear()

const express = require('express')
const cors    = require('cors')
const mongoose = require('mongoose')
const { router } = require('./router/router')

let URL_ATLAS = process.env.URL_ATLAS || 'mongodb://127.0.0.1:27017/proyectofinal'
// let URL_ATLAS = 'mongodb+srv://asierpl210395:brocoli21@cluster0.7yzz5by.mongodb.net/proyectofinal'

const app = express()

const conectar = async () => await mongoose.connect(URL_ATLAS)
    .then( ()=> console.log('Conectado a BBDD'))
    .catch( error => console.log( error ))

conectar()



app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded({ extended : false }) )
app.use(router)



app.listen( 3000 , ()=> console.log('Iniciando API'))











// console.clear()

// const express = require('express')
// const cors    = require('cors')
// const mongoose = require('mongoose')

// let URL_ATLAS = process.env.URL_ATLAS || 'mongodb://127.0.0.1:27017/proyectofinal'
// // let URL_ATLAS = 'mongodb+srv://asierpl210395:brocoli21@cluster0.7yzz5by.mongodb.net/proyectofinal'

// const app = express()

// const conectar = async () => await mongoose.connect(URL_ATLAS)
//     .then( ()=> console.log('Conectado a BBDD'))
//     .catch( error => console.log( error ))

// conectar()

// const usuarioSchema = new mongoose.Schema(
//     { user : String , pass : String },
//     { collection : 'usuarios' }
// )

// const Usuario = mongoose.model( 'Usuario' , usuarioSchema)



// const loginSchema = new mongoose.Schema(
//     { srcCanon : String , altCanon : String , srcPort : String , altPort : String  },
//     { collection : 'login'}
// )

// const Login = mongoose.model( 'Login' , loginSchema )


// // const botonesLoginSchema = new mongoose.Schema(
// //     { btn : String  },
// //     { collection : 'botoneslogin'}
// // )

// // const BotonesLogin = mongoose.model( 'BotonesLogin' , botonesLoginSchema )



// const iniciarSchema = new mongoose.Schema(
//     { htmlUserI : String , labelUserI : String , typeUserI : String , nameUserI : String , placeholderUserI : String ,  htmlPassI : String , labelPassI : String , typePassI : String , namePassI : String , placeholderPassI : String , typeI : String , valueI : String ,  },
//     { collection : 'iniciarsesion'}
// )

// const Iniciar = mongoose.model( 'Iniciar' , iniciarSchema )


// const crearSchema = new mongoose.Schema(
//     { htmlUserC : String , labelUserC : String , typeUserC : String , nameUserC : String , placeholderUserC : String , htmlEmailC : String , labelEmailC : String , typeEmailC : String , nameEmailC : String , placeholderEmailC : String , htmlPassC : String , labelPassC : String , typePassC : String , namePassC : String , placeholderPassC : String , typeC : String , valueC : String ,  },
//     { collection : 'crearcuenta'}
// )

// const Crear = mongoose.model( 'Crear' , crearSchema )

// const headerLogoSchema = new mongoose.Schema(
//     { bonanza : String , partner : String , canonAlt : String , canonSrc : String},
//     { collection : 'headerlogo' }
// )
// const HeaderLogo = mongoose.model('HeaderLogo' , headerLogoSchema)


// const headerNavSchema = new mongoose.Schema(
//     { href : String , title : String},
//     { collection : 'headernav' }
// )
// const HeaderNav = mongoose.model( 'HeaderNav' , headerNavSchema)

// const carrouselSchema = new mongoose.Schema(
//     { src : String , alt : String },
//     { collection : 'carrousel' }
// )
// const Carrousel = new mongoose.model( 'Carrousel' , carrouselSchema)



// app.use( cors() )
// app.use( express.json() )
// app.use( express.urlencoded({ extended : false }) )



// app.get ('/' , async ( req , res , next )=>{

//     const buscar = await Usuario.find()
//     const login  = await Login.find()
//     const iniciar = await Iniciar.find()
//     const crear  = await Crear.find()

    

//     const loginData = {buscar , login , crear , iniciar}

//     res.json(loginData)
   
// })


// app.post( '/' , async ( req , res , next) =>{
//     const { user , pass } = req.body

//     const buscar = await Usuario.findOne({
//         user , pass
//     })

//     res.json(buscar)
// })


// app.get('/gestor' , async (req , res , next) => {
    
//     const headerLogo = await HeaderLogo.findOne()
//     const headerNav  = await HeaderNav.find()
//     const carrousel = await Carrousel.find()
    
//     const datos = {headerLogo , headerNav, carrousel}
    
//     res.status(200).json(datos)
// })



// app.listen( 3000 , ()=> console.log('Iniciando API'))