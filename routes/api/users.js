const express = require("express");
const router = express.Router();

const User = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const foundUsers = await User.find();
    res.status(200).json(foundUsers);
  } catch (err) {
    res.status(404).send(`Not found - ${err}`);
  }
});

router.post("/", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.send(`Failed to create user - ${user}`);
  }
});

module.exports = router;
