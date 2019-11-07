const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const foundUsers = await User.find();
    res.status(200).json(foundUsers);
  } catch (err) {
    res.status(404).send(`Not found - ${err}`);
  }
});

router.post("/signup", (req, res) => {
  // // Check if input username already exists
  // if (User.find({ username: req.body.username })) {
  //   res.status(400).send({ success: false });
  //   return;
  // }
  // Hash password
  bcrypt.hash(req.body.password, 10, async (err, hash) => {
    // Create new user
    const newUser = new User({
      username: req.body.username,
      password: hash
    });

    // Save new user to DB
    try {
      const savedUser = await newUser.save();
      res.status(201).send({ success: true });
    } catch (err) {
      res.send(`Failed to create user - ${err}`);
    }
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const userCheck = await User.find({ username });
  if (userCheck.length === 0) {
    res.status(400).send({ success: false });
    return;
  }
  bcrypt.compare(password, userCheck[0].password, (err, correct) => {
    res.status(200).send({ success: correct });
  });
});

module.exports = router;
