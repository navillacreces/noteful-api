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
    .post(bodyParser,(req,res,next) =>{

        const {name,content,folder_id,modified} = req.body;

        if (!name || !content || !folder_id || !modified) {
            return res.status(400).send('invalid data');
        }

        const newNote = {
            name: name,
            content: content,
            folder_id: folder_id,
            modified: modified
        }
        
        const knexInstance = req.app.get('db')
        

        notesService.postNote(knexInstance,newNote)
            .then(note =>{
                res
                    .location(`https://localhost:8000/notes/${note.unique_id}`)
                    .status(201)
                    .json(note);
            })
            .catch(next)
            
    })
notesRouter
    .route('/:id')
    .delete((req,res,next) =>{

        const {id} = req.params;

        const knexInstance = req.app.get('db')

        notesService.deleteNote(knexInstance, unique_id)
        .then(note =>{
            res.status(204).end()
        })
        .catch(next)
    })
 


module.exports = notesRouter

