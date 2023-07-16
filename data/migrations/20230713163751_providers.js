exports.up = knex =>
  knex.schema.createTable("providers", tbl => {
    tbl.increments();
    tbl.text("name", 128).notNullable();
    tbl.text("expertise", 128).notNullable();
    tbl.text("information", 128).notNullable();
    tbl.text("appointment_type", 128).notNullable();
    tbl.text("photo", 128).notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists("providers");