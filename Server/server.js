const express = require('express')
const server = express()
const cors = require('cors')
const Router = require('./router/index')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

//middleware

server.use(cors())
server.use(express.json())
server.use(bodyParser.json())
server.use('/api', Router)
server.use('/uploads', express.static(path.join(__dirname, 'uploads')))
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const DBconnection = mongoose.connect(
  'mongodb+srv://ssstechnologies91:SSSweb@sssdatabase.kc77k.mongodb.net/?retryWrites=true&w=majority&appName=SSSdatabase'
)

DBconnection.then(() => {
  server.listen(8006, (req, res) => {
    console.log('server Listner is running')
    console.log('DB connected')
  })
}).catch((error) => console.log('server error:' + error))
