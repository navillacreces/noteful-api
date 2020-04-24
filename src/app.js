require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const app = express()

//const folderRouter = require('../folders/folder-router')
const notesRouter = require('../notes/notes-router')
const notesService = require('../notes/notesService')

app.post('/notes', (req,res,next) =>{

  const knexInstance = req.app.get('db')

  const {note_name, folder_id,content,modified} = req.body;

  const newNote = {
      note_name: note_name,
      content: content,
      folder_id: folder_id,
      modified: modified,
  }

  notesService.postNote(knexInstance, newNote)
    .then(note =>{
      res.json(note)
    })
    .catch(next)

})




const morganOption = (NODE_ENV === 'production')


//app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())
app.use(express.json())
//app.use(notesRouter)
//app.use('/folders', folderRouter)

app.use(function errorHandler(error, req, res, next) {
   let response
   if (NODE_ENV === 'production') {
     response = { error: { message: 'server error' } }
   } else {
     console.error(error)
    response = { message: error.message, error }
   }
   res.status(500).json(response)
 })
    

module.exports = app