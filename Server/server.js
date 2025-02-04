// const express = require('express')
// const server = express()
// const cors = require('cors')
// const Router = require('./router/index')
// var bodyParser = require('body-parser')
// const mongoose = require('mongoose')
// const path = require('path')

// //middleware

// server.use(cors())
// server.use(express.json())
// server.use(bodyParser.json())
// server.use('/api', Router)
// server.use('/uploads', express.static(path.join(__dirname, 'uploads')))
// // app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// const DBconnection = mongoose.connect(
//   'mongodb+srv://techeg007:Fegg007@cluster0.p0ygw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// )

// DBconnection.then(() => {
//   server.listen(8006, (req, res) => {
//     console.log('server Listner is running')
//     console.log('DB connected')
//   })
// }).catch((error) => console.log('server error:' + error))

require('dotenv').config()
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


app.get('/', (req, res) => {
  res.send('Hello, World!');
});



// DB connection
const DBconnection = mongoose.connect(process.env.MONGODB_URI)

DBconnection.then(() => {
  server.listen(process.env.PORT, () => {
    console.log('server Listener is running')
    console.log('DB connected')
  })
}).catch((error) => console.log('server error:' + error))
