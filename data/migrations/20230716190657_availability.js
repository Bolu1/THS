exports.up = knex =>
  knex.schema.createTable("availability", tbl => {
    tbl.increments();
    tbl.integer("provider_id", 128).notNullable();
    tbl.text("timestamp", 128).notNullable();
    tbl.boolean("is_available").notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists("availability");