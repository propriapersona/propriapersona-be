const express = require("express");
const router = express.Router();

const Tasks = require("./tasks-model.js");

router.post("/", (req, res) => {
  const task = req.body;
});
