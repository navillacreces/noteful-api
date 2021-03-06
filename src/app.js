require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const app = express()

const folderRouter = require('../folders/folder-router')
const notesRouter = require('../notes/notes-router')
//const notesService = require('../notes/notesService')

const morganOption = process.env.NODE_ENV === 'production' ? 'tiny' : 'common'
app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use('/notes',notesRouter)
app.use('/folders', folderRouter)

app.use(function errorHandler(error, req, res, next) {
   let response
   if (NODE_ENV === 'production') {
     response = { error: { message: 'server error' } }
   } else {
    response = { message: error.message, error }
   }
   console.error(error)
   res.status(500).json(response)
 })

 
    

module.exports = app