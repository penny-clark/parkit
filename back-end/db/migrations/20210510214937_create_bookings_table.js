
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bookings', function(table) {
    table.increments('id');
    table.integer('spot_id').notNullable().references('id').inTable('spots').onDelete('cascade');
    table.integer('car_id').notNullable().references('id').inTable('cars').onDelete('cascade');
    table.timestamp('start_date_time').notNullable();
    table.timestamp('end_date_time').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bookings');
};
