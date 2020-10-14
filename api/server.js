const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// Routers and Middleware
const authRouter = require("../auth/auth-router.js");
const accountRouter = require("../accounts/accounts-router.js");

const authenticate = require("../auth/authenticate-middleware.js");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/account", authenticate, accountRouter);

server.get("/", (req, res) => {
  res.send("<h1>Propria Persona</h1>");
});

module.exports = server;
