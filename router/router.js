const express = require('express')
const { postLogin, getLogin, getGestor } = require('../controller/controller')

const router = express.Router()


router.route('/')
    .get(getLogin)
    .post(postLogin)

router.route('/gestor')
    .get(getGestor)

module.exports = { router }