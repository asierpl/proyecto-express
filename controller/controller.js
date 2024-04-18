//Este archivo define los controladores que manejan las solicitudes HTTP para la aplicación Express.

//Importa los modelos definidos en 'schema.js' para interactuar con MongoDB
const { Usuario, Login, Iniciar, Crear, HeaderLogo, HeaderNav, Carrousel, PersonalFotos , QuienesTexto , QuienesValores, Contacto, Productos, Toner, InfoToner , Inicio , InicioOffer, Footer, FooterOficina , FooterNav } = require("../schema/schema")

//Controlador para gestionar solicitudes GET relacionadas con el inicio de sesión y crear cuenta.
const getLogin  = async ( req , res , next )=>{

    try {
        //Realiza consultas a diferentes modelos para obtener datos del login.
        const buscar = await Usuario.find()
        const login  = await Login.findOne()
        const iniciar = await Iniciar.findOne()
        const crear  = await Crear.findOne()
        
        //Combina los resultados anteriores en un solo objeto y los envía como respuesta.
        const loginData = {buscar , login , crear , iniciar}
    
        res.status(200).json(loginData)
        
    //Gestiona los errores internos de la API.
    } catch(error){
        next(error)
    }
}

//Controlador para gestionar solicitudes POST relacionadas con el inicio de sesión.
const postLogin = async ( req , res , next) =>{

    try {
        //Extrae el usuario y contraseña del body de la solicitud.
        const { user , pass } = req.body

        //Busca en MongoDB un usuario que coincida con el usuario y contraseña escritas.
        const buscar = await Usuario.findOne({ user , pass})
        
        //Envía la respuesta con los resultados de la búsqueda.
        res.status(201).json(buscar)

    //Gestiona los errores internos de la API.
    } catch(error) {
        next(error)
    } 
}

//Controlador para gestionar solicitudes GET relacionadas con el header, carrousel e inicio.
const getInicio = async (req , res , next) => {
    
    try {
        //Realiza consultas a diferentes modelos para obtener datos del header, carrousel,  inicio y footer
        const headerLogo = await HeaderLogo.findOne()
        const headerNav  = await HeaderNav.find()
        const carrousel = await Carrousel.find()
        const inicio = await Inicio.findOne()
        const inicioOffer = await InicioOffer.find()
        const footer = await Footer.findOne()
        const footerNav = await FooterNav.find()
        const footerOficina = await FooterOficina.find()
        
        
         //Combina los resultados anteriores en un solo objeto y los envía como respuesta.
        const datos = {headerLogo , headerNav, carrousel , inicio , inicioOffer , footer , footerOficina , footerNav}
        
        res.status(200).json(datos)

    //Gestiona los errores internos de la API.
    } catch(error) {
        next(error)
    } 
}



//Controlador para gestionar solicitudes GET relacionadas con el endpoint "/mantenimiento"
const getToner = async ( req , res , next ) => {

    try {
        //Realiza consultas a estos modelos para obtener datos relacionado con 'mantenimiento'
        const toner = await Toner.find()
        const infoToner = await InfoToner.findOne()
        //Combina los modelos en un objeto y los envía como respuesta.
        const tonerData = {toner , infoToner}
    
        res.status(200).json(tonerData)
    
    //Gestiona los errores internos de la API.
    } catch(error) {
        next(error)
    }
}

//Controlador para gestionar solicitudes POST relacionadas con el endpoint "/mantenimiento"
const postToner = async( req , res , next ) => {

    try {
        //Extrae la solicitud de suministro de toner y el comentario del body de la solicitud(request)
        const { color , comentario } = req.body

        //Crea un nuevo documento en la colección 'listagestor'
        const toner = new Toner({ color , comentario })
        
        //Guarda dicho documento en la base de datos.
        await toner.save()
        
        //Realiza una consulta para obtener los documentos de la nueva lista.
        const añadirToner = await Toner.find()
        
        //Envía la respuesta con los resultados de la consulta.
        res.status(201).json(añadirToner)

    //Gestiona los errores internos de la API.
    } catch(error) {
        next(error)
    } 
}

//Controlador para gestionar solicitudes DELETE relacionadas con el mantenimiento
const deleteToner = async(req , res , next) => {

    try {
        //Extrae el ID de los parámetros de la solicitud.
        const {id} = req.params


        //Elimina el documento de la colección 'toner' con el ID proporcionado.
        await Toner.findByIdAndDelete(id)


        //Realiza una consulta para obtener la lista nueva de la colección.
        const eliminarToner = await Toner.find()

        //Envía la respuesta con los resultados de la consulta.
        res.status(200).json(eliminarToner)
    
    //Gestiona los errores internos de la API.
    } catch (error) {
        console.log(error)
        res.status(500).json({error : 'Error interno del servidor'})
    }
}

//Controlador para gestionar solicitudes PUT relacionadas con mantenimiento
const putToner = async( req , res , next ) => {

    try {

        //Extrae el ID y los datos actualizados del body de la solicitud.
        const {id} = req.params
        const {color , comentario} = req.body



        //Actualiza el documento en la colección 'toner'
        await Toner.findByIdAndUpdate( id , {color , comentario})

    
       //Realiza una consulta para obtener los documentos actualizados de la colección.
        const editarToner = await Toner.find()

        //Envía una respuesta con los resultados de la consulta.
        res.status(200).json(editarToner)
    
    //Gestiona los errores internos de la API.
    } catch (error) {
        console.log(error)
        res.status(500).json({error : "Error interno del servidor"})
    }
}




//Controlador para gestionar solicitudes GET relacionadas con el endpoint "/quienes-somos"
const getQuienes = async ( req , res , next ) => {

    try {
        //Realiza consultas a estos modelos para obtener datos relacionado con 'quienes somos'
        const personalFotos = await PersonalFotos.find()
        const quienesTexto = await QuienesTexto.findOne()
        const quienesValores = await QuienesValores.find()
        
        //Combina los modelos en un objeto y los envía como respuesta.
        const quienes = {personalFotos , quienesValores , quienesTexto}
    
        res.status(200).json(quienes)
    
    //Gestiona los errores internos de la API.
    } catch(error) {
        next(error)
    }
}

//Controlador para gestionar solicitudes GET relacionadas con el endpoint "/contacto"
const getContacto = async ( req , res , next ) => {

    try {
        //Realiza consultas a estos modelos para obtener datos relacionado con 'contacto'
        const contacto = await Contacto.findOne()
        
        
        //Combina los modelos en un objeto y los envía como respuesta.
        const contactoData = {contacto}
    
        res.status(200).json(contactoData)
    
    //Gestiona los errores internos de la API.
    } catch(error) {
        next(error)
    }
}

//Controlador para gestionar solicitudes GET relacionadas con el endpoint "/productos"
const getProductos = async ( req , res , next ) => {

    try {
        //Realiza consultas a estos modelos para obtener datos relacionado con 'productos'
        const productos = await Productos.find()
        
        
        //Combina los modelos en un objeto y los envía como respuesta.
        const productosData = {productos}
    
        res.status(200).json(productosData)
    
    //Gestiona los errores internos de la API.
    } catch(error) {
        next(error)
    }
}





//Exporta todas las funciones anteriores definidas como controladores para su uso en otros archivos.
module.exports = {
    getLogin,
    postLogin,
    getInicio,
    getQuienes,
    getContacto,
    getProductos,
    getToner,
    postToner,
    deleteToner,
    putToner
}