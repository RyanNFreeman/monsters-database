
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('nightmares_monsters').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('nightmares_monsters').insert([
        {monster_id: 1, nightmare_id: 1},
        {monster_id: 1, nightmare_id: 2},
        {monster_id: 1, nightmare_id: 3}
      ]);
    });
};
