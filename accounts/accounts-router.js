const express = require("express");
const router = express.Router();

const Accounts = require("./accounts-model.js");

router.post("/", (req, res) => {
  const account = req.body;

  Accounts.add(account)
    .then((newAccount) => {
      res.status(201).json(newAccount);
    })
    .catch((err) => {
      res
        .status(500)
        .json({
          message: "There was an error adding information to your account",
        });
    });
});

module.exports = router;
