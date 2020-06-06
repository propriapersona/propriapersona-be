const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>Propria Persona</h1>");
});

module.exports = server;
