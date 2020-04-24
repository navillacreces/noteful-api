const express = require('express')


const notesRouter = express.Router()
const bodyParser = express.json()


notesRouter
    .route('/notes')
    .get((req,res,next) =>{
        
        const knexInstance = req.app.get('db')
        notesService.getAllNotes(knexInstance)
            .then(notes =>{
            res.json(notes)
            })
        .catch(next)
    })

    .post(bodyParser,(req,res) =>{

        const {name,content,folder_id,modifiedDate} = req.body;

        if (!name || !content || !folder_id || !modifiedDate){
            es.status(400).send('invalid data');
        }
        
    })

module.exports = notesRouter

