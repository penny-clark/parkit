
exports.up = function(knex, Promise) {
  return knex.schema.createTable('spots', function(table) {
  table.increments('id');
  table.integer('user_id').notNullable().references('id').inTable('users').onDelete('cascade');
  table.string('street_address').notNullable();
  table.string('city').notNullable();
  table.string('province').notNullable();
  table.string('country').notNullable();
  table.string('postal_code').notNullable();
  table.string('picture').defaultTo('https://pr.sssagent.com/img/parkingspot1.png');
  table.integer('price').notNullable();
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('spots');
};
