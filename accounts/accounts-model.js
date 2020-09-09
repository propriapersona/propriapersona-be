const db = require("../data/db-config.js");

async function add(account) {
  const [id] = await db("accounts").returning("id").insert(account);

  return findById(id);
}

async function findById(id) {
  return await db("accounts").where({ id }).first();
}

module.exports = {
  add,
  findById,
};
