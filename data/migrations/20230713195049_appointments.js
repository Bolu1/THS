exports.up = knex =>
  knex.schema.createTable("appointments", tbl => {
    tbl.increments();
    tbl.integer("provider_id", 128).notNullable();
    tbl.text("duration", 128).notNullable();
    tbl.text("reminder_email", 128).notNullable();
    tbl.text("timestamp").notNullable();

  });

exports.down = knex => knex.schema.dropTableIfExists("appointments");