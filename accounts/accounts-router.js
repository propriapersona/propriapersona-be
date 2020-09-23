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
      res.status(500).json({
        message: "There was an error adding information to your account",
      });
    });
});

router.get("/", (req, res) => {
  //
});

// router.put("/", (req, res) => {
//   // To edit account information
// })

// router.delete("/" (req, res) => {
//   // For deleting the entire record. Think if that is a good idea.
// })

module.exports = router;
