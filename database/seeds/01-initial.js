
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'user1', password: '12345', department:'information technology'},
        {username: 'user2', password: '12345', department:'customer service'},
        {username: 'user3', password: '12345', department:'human resources'}
      ]);
    });
};
