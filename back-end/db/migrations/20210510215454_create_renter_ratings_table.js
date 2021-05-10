
exports.up = function(knex, Promise) {
  return knex.schema.createTable('renter_ratings', function(table) {
    table.increments('id');
    table.integer('owner_id').notNullable().references('id').inTable('users').onDelete('cascade');
    table.integer('renter_id').notNullable().references('id').inTable('users').onDelete('cascade');
    table.integer('rating').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('renter_ratings');
};
