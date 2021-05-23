const express = require('express')
const bodyParser = require('body-parser')

const { resolve } = require('path')

require('dotenv').config()
const PORT = process.env.PORT || 5000

const server = express()

server.use(express.static(resolve(__dirname, '../dist')))

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))


server.listen(PORT, () => {
  console.log(`Server has been started at http://localhost:${PORT}...`)
})

