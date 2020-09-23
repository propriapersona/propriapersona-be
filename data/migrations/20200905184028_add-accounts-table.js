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
      tbl.string("first_name", 255);
      tbl.string("last_name", 255);
      tbl.string("address", 255);
      tbl.string("city", 255);
      tbl.string("state", 255);
      tbl.string("zip", 255);
      tbl.string("case_number", 255);
      tbl.string("case_type", 255);
      tbl.string("party_name", 255);
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
