const express = require('express')
const folderService = require('./folderService')
const folderRouter = express.Router()
const bodyParser = express.json()

folderRouter
    .route('/')
    .post(bodyParser,(req,res) =>{

        const {folder_name, folder_id} = req.body;

        if (!folder_name || !folder_id){
            return res.status(400).send('invalid data');
        }

        const newFolder = {
            folder_name: folder_name,
            folder_id: folder_id,
        };
        
        const knexInstance = req.app.get('db')

        folderService.insertFolder(
            knexInstance, newFolder
        )
            .then(folder =>{
                
                res.location(`https://localhost:8000/folders/${folder.unique_id}`).sendStatus(201);  
            })
            .catch(err => {
                res.send("not posted" + JSON.stringify(err))
            });

    })

module.exports = folderRouter