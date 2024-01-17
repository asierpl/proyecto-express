const mongoose = require('mongoose')


const usuarioSchema = new mongoose.Schema(
    { user : String , pass : String },
    { collection : 'usuarios' }
)
const Usuario = mongoose.model( 'Usuario' , usuarioSchema)


const loginSchema = new mongoose.Schema(
    { srcCanon : String , altCanon : String , srcPort : String , altPort : String  },
    { collection : 'login'}
)
const Login = mongoose.model( 'Login' , loginSchema )


const iniciarSchema = new mongoose.Schema(
    { htmlUserI : String , labelUserI : String , typeUserI : String , nameUserI : String , placeholderUserI : String ,  htmlPassI : String , labelPassI : String , typePassI : String , namePassI : String , placeholderPassI : String , typeI : String , valueI : String ,  },
    { collection : 'iniciarsesion'}
)
const Iniciar = mongoose.model( 'Iniciar' , iniciarSchema )


const crearSchema = new mongoose.Schema(
    { htmlUserC : String , labelUserC : String , typeUserC : String , nameUserC : String , placeholderUserC : String , htmlEmailC : String , labelEmailC : String , typeEmailC : String , nameEmailC : String , placeholderEmailC : String , htmlPassC : String , labelPassC : String , typePassC : String , namePassC : String , placeholderPassC : String , typeC : String , valueC : String ,  },
    { collection : 'crearcuenta'}
)
const Crear = mongoose.model( 'Crear' , crearSchema )


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

module.exports = {Usuario , Login , Iniciar , Crear , HeaderLogo , HeaderNav , Carrousel}