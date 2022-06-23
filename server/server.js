const express = require('express')
const path = require('path')

const quizRoutes = require('./routes/quiz')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/', quizRoutes)

module.exports = server
