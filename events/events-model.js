const db = require("../data/db-config.js");

async function add(event) {
  const [id] = await db("events").returning("id").insert(event);

  return findByEventId(id);
}

async function findByEventId(id) {
  return await db("events").where({ id }).first();
}

async function findByUserId(id) {
  return await db("events").where({ user_id: id }).first();
}

async function updateEvent(id, changes) {
  await db("events").where({ id }).update(changes);

  const changedEvent = await findByEventId(id);
  return changedEvent;
}

async function deleteEvent(id) {
  const deleted = await db("events").where({ id }).del();

  return deleted;
}

module.exports = {
  add,
  findByEventId,
  findByUserId,
  updateEvent,
  deleteEvent,
};
