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
            return res.status(400).send('invalid data');
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
                res.location(`https://localhost:8000/notes/${note.unique_id}`).sendStatus(201);
            })
            .catch( err => {
                res.send("NOT POSTED" ) //+ JSON.stringify(error)
            });
    })
notesRouter
    .route('/:unique_id')
    .delete((req,res,next) =>{

        const {unique_id} = req.params;

        const knexInstance = req.app.get('db')

        notesService.deleteNote(knexInstance, unique_id)
        .then(note =>{
            res.status(204).end()
        })
        .catch(next)
    })
 


module.exports = notesRouter

