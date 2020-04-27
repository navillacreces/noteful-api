

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
    }

}


module.exports = notesService;