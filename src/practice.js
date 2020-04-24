require('dotenv').config()

const knex = require('knex')

const folderService = require('../folders/folderService')
const notesService =require('../notes/notesService')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})

