//Este archivo define los esquemas y modelos de Mongoose para interactuar con MongoDB y las diferentes colecciones del proyecto.

//Importa la librería mongoose para manejar los datos de MongoDB
const mongoose = require('mongoose')


//Define el esquema y modelo para la colección 'usuarios'
const usuarioSchema = new mongoose.Schema(
    { user : String , pass : String },
    { collection : 'usuarios' }
)
const Usuario = mongoose.model( 'Usuario' , usuarioSchema)


//Define el esquema y modelo para la colección 'login'
const loginSchema = new mongoose.Schema(
    { srcCanon : String , altCanon : String , srcPort : String , altPort : String  },
    { collection : 'login'}
)
const Login = mongoose.model( 'Login' , loginSchema )


//Define el esquema y modelo para la colección 'iniciarsesion'
const iniciarSchema = new mongoose.Schema(
    { htmlUserI : String , labelUserI : String , typeUserI : String , nameUserI : String , placeholderUserI : String ,  htmlPassI : String , labelPassI : String , typePassI : String , namePassI : String , placeholderPassI : String , typeI : String , valueI : String ,  },
    { collection : 'iniciarsesion'}
)
const Iniciar = mongoose.model( 'Iniciar' , iniciarSchema )


//Define el esquema y modelo para la colección 'crearcuenta'
const crearSchema = new mongoose.Schema(
    { htmlUserC : String , labelUserC : String , typeUserC : String , nameUserC : String , placeholderUserC : String , htmlEmailC : String , labelEmailC : String , typeEmailC : String , nameEmailC : String , placeholderEmailC : String , htmlPassC : String , labelPassC : String , typePassC : String , namePassC : String , placeholderPassC : String , typeC : String , valueC : String ,  },
    { collection : 'crearcuenta'}
)
const Crear = mongoose.model( 'Crear' , crearSchema )


//Define el esquema y modelo para la colección 'headerlogo'
const headerLogoSchema = new mongoose.Schema(
    { bonanza : String , partner : String , canonAlt : String , canonSrc : String},
    { collection : 'headerlogo' }
)
const HeaderLogo = mongoose.model('HeaderLogo' , headerLogoSchema)


//Define el esquema y modelo para la colección 'headernav'
const headerNavSchema = new mongoose.Schema(
    { href : String , title : String},
    { collection : 'headernav' }
)
const HeaderNav = mongoose.model( 'HeaderNav' , headerNavSchema)


//Define el esquema y modelo para la colección 'carrousel'
const carrouselSchema = new mongoose.Schema(
    { src : String , alt : String },
    { collection : 'carrousel' }
)
const Carrousel = new mongoose.model( 'Carrousel' , carrouselSchema)


//Define el esquema y modelo para la colección 'inicio'
const inicioSchema = new mongoose.Schema(
    { inicio : String , subInicio : String , srcA : String , srcB : String , altInicio : String , ofrecer : String , ofrecerP : String },
    { collection : 'inicio' }
)
const Inicio = new mongoose.model( 'Inicio' , inicioSchema)

//Define el esquema y modelo para la colección 'inicioOffer'
const inicioOfferSchema = new mongoose.Schema(
    { xlmns : String , viewBox : String , d : String  , offer : String , offerP : String },
    { collection : 'inicioOffer' }
)
const InicioOffer = new mongoose.model( 'InicioOffer' , inicioOfferSchema)


//Define el esquema y modelo para la colección 'listagestor'
const tonerSchema = new mongoose.Schema(
    { color : String , comentario : String },
    {collection : 'toner'}
)
const Toner = new mongoose.model( 'Toner' , tonerSchema)



//Define el esquema y modelo para la colección 'personalfotos'
const personalFotosSchema = new mongoose.Schema(
    { src: String , alt : String},
    {collection : 'personalfotos'}
)
const PersonalFotos = new mongoose.model( 'PersonaFotos' , personalFotosSchema)


//Define el esquema y modelo para la colección 'quienestexto'
const quienesTextoSchema = new mongoose.Schema(
    { quienesH : String , QuienesP : String , valoresH : String , valoresP : String , srcEquipo: String , altEquipo : String },
    {collection : 'quienestexto'}
)
const QuienesTexto = new mongoose.model( 'QuienesTexto' , quienesTextoSchema)


//Define el esquema y modelo para la colección 'quienesvalores'
const quienesValoresSchema = new mongoose.Schema(
    { valor : String },
    {collection : 'quienesvalores'}
)
const QuienesValores = new mongoose.model( 'QuienesValores' , quienesValoresSchema)

//Define el esquema y modelo para la colección 'contacto'
const contactoSchema = new mongoose.Schema(
    {contacta : String, esperamos : String, calle : String, ciudad : String, telefono : String, numero : String, correo : String, emailCanon : String, emailBonanza : String},
    {collection : 'contacto'}
)
const Contacto = new mongoose.model( 'Contacto' , contactoSchema)

//Define el esquema y modelo para la colección 'productos'
const productosSchema = new mongoose.Schema(
    { h2 : String, p : String, href : String, precio : String, src : String, alt : String },
    {collection : 'productos'}
)
const Productos = new mongoose.model( 'Productos' , productosSchema)

//Define el esquema y modelo para la colección 'footer'
const footerSchema = new mongoose.Schema(
    { bonanzaPie : String, silverPie : String , pPie : String , infoPie : String },
    {collection : 'footer'}
)
const Footer = new mongoose.model( 'Footer' , footerSchema)

//Define el esquema y modelo para la colección 'footerOficina'
const footerOficinaSchema = new mongoose.Schema(
    { pA : String, pB : String , pC : String },
    {collection : 'footerOficina'}
)
const FooterOficina = new mongoose.model( 'FooterOficina' , footerOficinaSchema)


//Exporta todos los modelos creados para su uso en otros archivos.
module.exports = {Usuario , Login , Iniciar , Crear , HeaderLogo , HeaderNav , Carrousel , PersonalFotos , QuienesTexto , QuienesValores , Contacto , Productos , Toner , Inicio , InicioOffer , Footer , FooterOficina}