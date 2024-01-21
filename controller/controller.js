//Este archivo define los controladores que manejan las solicitudes HTTP para la aplicación Express

//Importa los modelos definidos en 'schema.js' para interactuar con MongoDB
const { Usuario, Login, Iniciar, Crear, HeaderLogo, HeaderNav, Carrousel, PersonalFotos , QuienesTexto , QuienesValores, ActualizarGestor, AñadirGestor, ListaGestor } = require("../schema/schema")

//Controlador para gestionar solicitudes GET relacionadas con el inicio de sesión y crear cuenta.
const getLogin  = async ( req , res , next )=>{

    try {
        //Realiza consultas a diferentes modelos para obtener datos del login.
        const buscar = await Usuario.find()
        const login  = await Login.find()
        const iniciar = await Iniciar.find()
        const crear  = await Crear.find()
        
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

//Controlador para gestionar solicitudes GET relacionadas con el header, carrousel y gestor.
const getGestor = async (req , res , next) => {
    
    try {
        //Realiza consultas a diferentes modelos para obtener datos del header, carrousel y gestor.
        const headerLogo = await HeaderLogo.findOne()
        const headerNav  = await HeaderNav.find()
        const carrousel = await Carrousel.find()
        const listaGestor = await ListaGestor.find()
        const añadirGestor = await AñadirGestor.find()
        const actualizarGestor = await ActualizarGestor.find()
        
         //Combina los resultados anteriores en un solo objeto y los envía como respuesta.
        const datos = {headerLogo , headerNav, carrousel, listaGestor , añadirGestor , actualizarGestor}
        
        res.status(200).json(datos)

    //Gestiona los errores internos de la API.
    } catch(error) {
        next(error)
    } 
}


//Controlador para gestionar solicitudes POST relacionadas con el gestor
const postGestor = async( req , res , next ) => {

    try {
        //Extrae la solicitud de asistencia técnica y el comentario del body de la solicitud(request)
        const { solicitud , comment } = req.body

        //Crea un nuevo documento en la colección 'listagestor'
        const nuevo = new ListaGestor({ solicitud , comment })
        
        //Guarda dicho documento en la base de datos.
        await nuevo.save()
        
        //Realiza una consulta para obtener los documentos de la nueva lista.
        const añadirSolicitud = await ListaGestor.find()
        
        //Envía la respuesta con los resultados de la consulta.
        res.status(201).json(añadirSolicitud)

    //Gestiona los errores internos de la API.
    } catch(error) {
        next(error)
    } 
}


//Controlador para gestionar solicitudes PUT relacionadas con el gestor
const putGestor = async( req , res , next ) => {

    try {

        //Extrae el ID y los datos actualizados del body de la solicitud.
        const {_id, ...datos} = req.body


        //Actualiza el documento en la colección 'listagestor'
        await ListaGestor.findByIdAndUpdate( _id , {...datos})

    
       //Realiza una consulta para obtener los documentos actualizados de la colección.
        const actualizarSolicitud = await ListaGestor.find()

        //Envía una respuesta con los resultados de la consulta.
        res.status(200).json(actualizarSolicitud)
    
    //Gestiona los errores internos de la API.
    } catch (error) {
        console.log(error)
        res.status(500).json({error : "Error interno del servidor"})
    }
}


//Controlador para gestionar solicitudes DELETE relacionadas con el gestor
const deleteGestor = async(req , res , next) => {

    try {
        //Extrae el ID de los parámetros de la solicitud.
        const {_id} = req.params


        //Elimina el documento de la colección 'listagestor' con el ID proporcionado.
        await ListaGestor.findByIdAndDelete(_id)


        //Realiza una consulta para obtener la lista nueva de la colección.
        const eliminarSolicitud = await ListaGestor.find()

        //Envía la respuesta con los resultados de la consulta.
        res.status(200).json(eliminarSolicitud)
    
    //Gestiona los errores internos de la API.
    } catch (error) {
        console.log(error)
        res.status(500).json({error : 'Error interno del servidor'})
    }
}


//Controlador para gestionar solicitudes GET relacionadas con el endpoint "/quienes-somos"
const getQuienes = async ( req , res , next ) => {

    try {
        //Realiza consultas a estos modelos para obtener datos relacionado con 'quienes somos'
        const personalFotos = await PersonalFotos.find()
        const quienesTexto = await QuienesTexto.find()
        const quienesValores = await QuienesValores.find()
        
        //Combina los modelos en un objeto y los envía como respuesta.
        const quienes = {personalFotos , quienesValores , quienesTexto}
    
        res.status(200).json(quienes)
    
    //Gestiona los errores internos de la API.
    } catch(error) {
        next(error)
    }
}


//Exporta todas las funciones anteriores definidas como controladores para su uso en otros archivos.
module.exports = {
    getLogin,
    postLogin,
    getGestor,
    postGestor,
    putGestor,
    deleteGestor,
    getQuienes
}