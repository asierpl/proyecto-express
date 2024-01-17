const express = require('express')
const { postLogin, getLogin, getGestor } = require('../controller/controller')

const router = express.Router()


router.route('/')
    .get(getLogin)
    .post(postLogin)

router.route('/gestor')
    .get(getGestor)

// router.route('/productos')
//     .get(getProductos)

// router.route('/alquiler')
//     .get(getAlquiler)

// router.route('/quienes-somos')
//     .get(getQuienes)

// router.route('/reparacion')
//     .get(getReparacion)

// router.route('/contacto')
//     .get(getContacto)

module.exports = { router }