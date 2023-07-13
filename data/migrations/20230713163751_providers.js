exports.up = knex =>
  knex.schema.createTable("providers", tbl => {
    tbl.increments();
    tbl.text("provider", 128).notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists("providers");