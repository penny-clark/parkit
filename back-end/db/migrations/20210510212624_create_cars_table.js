
exports.up = function(knex) {
  return knex.schema.createTable('cars', function(table) {
  table.increments('id');
  table.integer('user_id').notNullable().references('id').inTable('users').onDelete('cascade');
  table.string('make').notNullable();
  table.string('model').notNullable();
  table.string('colour').notNullable();
  table.string('plate_number').notNullable();
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('cars');
};
