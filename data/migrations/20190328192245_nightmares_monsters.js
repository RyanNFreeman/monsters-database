
exports.up = function(knex, Promise) {
    return knex.schema.createTable('nightmares_monsters', (tbl) => {
        tbl
            .increments();

        tbl
            .integer('monster_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('monsters')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl
            .integer('nightmare_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('nightmares')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('nightmares_monsters')
};
