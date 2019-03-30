
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('monsters').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('monsters').insert([
        {name: 'Freddy Kreuger'},
        {name: 'Bigfoot'},
        {name: 'Student Debt'},
        {name: 'Elmo'}
      ]);
    });
};
