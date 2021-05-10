
exports.up = function(knex, Promise) {
  return knex.schema.createTable('spot_ratings', function(table) {
    table.increments('id');
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('cascade');
    table.integer('spot_id').notNullable().references('id').inTable('spots').onDelete('cascade');
    table.integer('rating').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('spot_ratings');
};
