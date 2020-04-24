const folderService = {


    insertFolder(knex,newFolder){
        return knex
            .insert(newFolder)
            .into('folders')
            .returning('*')
            .then(rows =>{
                return rows[0]
            })
    }

};


module.exports = folderService;