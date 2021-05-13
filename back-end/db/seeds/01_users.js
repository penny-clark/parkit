
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Eggert', last_name: 'Eggerson', email: 'egg@egg.com', avatar: 'https://pr.sssagent.com/img/a1.png'},
        {first_name: 'Tilda', last_name: 'Tildy', email: 'tildy@gmail.com', avatar: 'https://pr.sssagent.com/img/a2.png'},
        {first_name: 'Bob', last_name: 'Boberson', email: 'bob@bob.com', avatar: 'https://pr.sssagent.com/img/a3.png'},
        {first_name: 'Frank', last_name: 'Faststuff', email: 'franky@frank.com', avatar: 'https://pr.sssagent.com/img/a4.png'},
        {first_name: 'Beth', last_name: 'Betilda', email: 'bethy@gmail.com', avatar: 'https://pr.sssagent.com/img/a5.png'},
        {first_name: 'Esther', last_name: 'Catchemall', email: 'essie@gmail.com', avatar: 'https://pr.sssagent.com/img/a6.png'},
        {first_name: 'John', last_name: 'Stamos', email: 'jayjay@gmail.com', avatar: 'https://pr.sssagent.com/img/a7.png'},
        {first_name: 'Hilda', last_name: 'Sprockets', email: 'ideehilda@gmail.com', avatar: 'https://pr.sssagent.com/img/a8.png'},
        {first_name: 'TeeJay', last_name: 'Grammar', email: 'tj@gmail.com', avatar: 'https://pr.sssagent.com/img/a9.png'},
        {first_name: 'Greg', last_name: 'Gregerson', email: 'gregly@gmail.com', avatar: 'https://pr.sssagent.com/img/a10.png'},
        {first_name: 'Noah', last_name: 'Jin', email: 'noahjinn@gmail.com', avatar: 'https://pr.sssagent.com/img/a11.png'},
        {first_name: 'Brad', last_name: 'Wong', email: 'bwong@gmail.com', avatar: 'https://pr.sssagent.com/img/a12.png'},
        {first_name: 'Amy', last_name: 'Schindler', email: 'aamys@hey.com', avatar: 'https://pr.sssagent.com/img/a13.png'},
        {first_name: 'Marie', last_name: 'Barker', email: 'mariebarker22@gmail.com', avatar: 'https://pr.sssagent.com/img/a14.png'},
      ]);
    });
};
