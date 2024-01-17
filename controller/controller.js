const { Usuario, Login, Iniciar, Crear, HeaderLogo, HeaderNav, Carrousel } = require("../schema/schema")



const getLogin  = async ( req , res , next )=>{

    const buscar = await Usuario.find()
    const login  = await Login.find()
    const iniciar = await Iniciar.find()
    const crear  = await Crear.find()

    const loginData = {buscar , login , crear , iniciar}

    res.json(loginData)
   
}


const postLogin = async ( req , res , next) =>{
    const { user , pass } = req.body

    const buscar = await Usuario.findOne({
        user , pass
    })

    res.json(buscar)
}


const getGestor = async (req , res , next) => {
    
    const headerLogo = await HeaderLogo.findOne()
    const headerNav  = await HeaderNav.find()
    const carrousel = await Carrousel.find()
    
    const datos = {headerLogo , headerNav, carrousel}
    
    res.status(200).json(datos)
}



module.exports = {
    getLogin,
    postLogin,
    getGestor,
}