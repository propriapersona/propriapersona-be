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
      tbl.string("address2", 255);
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
    })
    .createTable("events", (tbl) => {
      tbl.increments();
      tbl.string("event_name", 255).notNullable();
      tbl.string("event_type", 255).notNullable();
      tbl.string("description", 255);
      tbl.string("start_date", 255).notNullable();
      tbl.string("end_date", 255).notNullable();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("task_name", 255).notNullable();
      tbl.string("task_description", 255).notNullable();
      tbl.timestamps();
      tbl.string("date_due", 255).notNullable();
      tbl.boolean("isComplete").notNullable();
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
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("events")
    .dropTableIfExists("accounts")
    .dropTableIfExists("users");
};
