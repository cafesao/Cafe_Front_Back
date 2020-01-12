const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const routes = require('./routes/routes')

const api = express()

mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

api.use(cors())
api.use(express.json())
api.use(routes)

api.listen(3333)