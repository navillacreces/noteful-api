

const notesService = {

    getAllNotes(knex){
        return knex.select('*').from('notes');
    },

    postNote(knex,newNote){
        return knex
            .insert(newNote)
            .into('notes')
            .returning('*')
            .then(rows =>{
                return rows[0]
            })
    },

    deleteNote(knex,unique_id){
        return knex('notes').where({unique_id}).delete()
            
    }

}


module.exports = notesService;