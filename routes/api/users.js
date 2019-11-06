const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const foundUsers = await User.find();
    res.status(200).json(foundUsers);
  } catch (err) {
    res.status(404).send(`Not found - ${err}`);
  }
});

router.post("/", (req, res) => {
  // No. of saltrounds
  const saltRounds = 10;

  // Hash password
  bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
    // Create new user
    const newUser = new User({
      username: req.body.username,
      password: hash
    });

    // Save new user to DB
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.send(`Failed to create user - ${user}`);
    }
  });
});

module.exports = router;
