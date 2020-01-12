const express = require('express')

const CafeController = require('../controllers/CafeController')

const routes = express.Router()

routes.get('/cafe', CafeController.mostrarTudo)
routes.get('/cafe/:nome', CafeController.mostrar)
routes.post('/cafe', CafeController.criar)

module.exports = routes