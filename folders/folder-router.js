const express = require('express')
const folderService = require('./folderService')
const folderRouter = express.Router()
const bodyParser = express.json()

folderRouter
    .route('/')
    .get((req,res,next) =>{

        const knexInstance = req.app.get('db')

        folderService.getFolders(knexInstance)
            .then(folders => {
                res.json(folders)
            })
            .catch(next)


    })


    .post(bodyParser,(req,res) =>{

        const {folder_name, id} = req.body;

        if (!folder_name || !id){
            return res.status(400).send('invalid data');
        }

        const newFolder = {
            folder_name: folder_name,
            id: id,
        };
        
        const knexInstance = req.app.get('db')

        folderService.insertFolder(
            knexInstance, newFolder
        )
            .then(folder =>{
                
                res
                .location(`https://localhost:8000/folders/${folder.id}`)
                .status(201)
                .json(folder);  
            })
            .catch(err => {
                res.send("not posted" + JSON.stringify(err))
            });

    })

module.exports = folderRouter