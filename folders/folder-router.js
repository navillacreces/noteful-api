const express = require('express')
const folderService = require('./folderService')
const folderRouter = express.Router()
const bodyParser = express.json()

folderRouter
    .route('/')
    .post(bodyParser, (req,res, next) =>{

        const {folder_name, folder_id} = req.body;

        if (!folder_id){
            res.status(400).send('needs ID');
        }
        if (!folder_name){
            res.status(400).send('need name');
        }

        const newFolder = {
            folder_name: foldre_name,
            folder_id: folder_id,
        };
        

        folderService.insertFolder(
            req.app.get('db'), newFolder
        )
            .then(folder =>{
                res
                    .status(201)
                    .location(`/folders/${folders.folder_id}`)
                    .json(folder)
            })
            .catch(next)

    })

module.exports = folderRouter