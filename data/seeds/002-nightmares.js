
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('nightmares').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('nightmares').insert([
        {type: 'Horror Movie'},
        {type: 'Coding Nightmares'},
        {type: 'Five Minutes Left Spring Challenge'},
        {type: 'Whiteboard Interviews'}
      ]);
    });
};
