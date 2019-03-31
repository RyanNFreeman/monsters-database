
exports.up = function(knex, Promise) {
    return knex.schema.createTable('nightmares', (tbl) => {
        tbl
            .increments();
        
        tbl
            .string('type', 128)
            .unique()
            .notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('nightmares')
};
