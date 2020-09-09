exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 255).notNullable();
      tbl.string("password", 255).notNullable();
      tbl.string("name", 255).notNullable();
      tbl.string("email", 255).unique().notNullable();
    })
    .createTable("accounts", (tbl) => {
      tbl.increments();
      tbl.string("first_name", 255).notNullable();
      tbl.string("last_name", 255).notNullable();
      tbl.string("address", 255).notNullable();
      tbl.string("city", 255).notNullable();
      tbl.string("state", 255).notNullable();
      tbl.string("zip", 255).notNullable();
      tbl.string("case_number", 255);
      tbl.string("case_type", 255).notNullable();
      tbl.string("party_name", 255).notNullable();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("accounts").dropTableIfExists("users");
};
