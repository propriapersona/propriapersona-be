const express = require("express");
const router = express.Router();

const Events = require("./events-model.js");
const Users = require("../users/users-model.js");

router.post("/", (req, res) => {
  const event = req.body;

  Events.add(event)
    .then((newEvent) => {
      res.status(201).json(newEvent);
    })
    .catch((err) => {
      res.status(500).json({
        message: "There was an error adding the event to your calendar.",
      });
    });
});

router.get("/:username", (req, res) => {
  const { username } = req.params;
  Users.findByUsername(username)
    .then((user) => {
      Events.findByUserId(user.id)
        .then((events) => {
          res.status(200).json(events);
        })
        .catch((err) => {
          res
            .status(500)
            .json({
              message:
                "There was an error retrieving the events from the database.",
            });
        });
    })
    .catch((err) => {
      res.status(500).json({ message: "Could not find user in the database." });
    });
});
