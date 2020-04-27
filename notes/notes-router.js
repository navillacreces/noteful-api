const express = require('express')

const notesService = require('./notesService')
const notesRouter = express.Router()
const bodyParser = express.json()


notesRouter
    .route('/')
    .get((req,res,next) =>{
        
        const knexInstance = req.app.get('db')
        notesService.getAllNotes(knexInstance)
            .then(notes =>{
            res.json(notes)
            })
        .catch(next)
    })

    .post(bodyParser,(req,res) =>{


        const {note_name,note_content,folder_id,folder_name,modified} = req.body;


        if (!note_name || !note_content || !folder_id || !modified || !folder_name){
            return res.status(400).send('invalid data')
        }

        const newNote = {
            note_name: note_name,
            note_content: note_content,
            folder_name: folder_name,
            folder_id: folder_id,
            modified: modified
        }
        

        const knexInstance = req.app.get('db')

        notesService.postNote(knexInstance,newNote)
            .then(note =>{
                res.send(201).location(`https://localhost:8000/notes/${modified}`)
            })
            .catch(
                res.send("NOT POSTED")
            )
    })


module.exports = notesRouter

