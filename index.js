const server = require("./api/server.js");
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

// yarn init --yes
// fix package json
// add deps
// make index.js
// make server.js
// knex init
// fix knexfile
// knex migrate:make first
// write migration
// knex migrate:latest
// knex seed:make 00-cleanup
// etc etc
// knex seed:run
// make dbconfig
// make helpers
// make endpoints
