const folderService = {


    insertFolder(knex,newFolder){
        return knex
            .insert(newFolder)
            .into('folders')
            .returning('*')
            .then(rows =>{
                return rows[0]
            })
    },

    getFolders(knex){
        return knex
            .select('*')
            .from('folders')
        
    }

};


module.exports = folderService;