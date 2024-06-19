const express = require("express");
const router = express.Router();
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Credentials } = require("../../db/collections");

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const cred = await Credentials.findOne({ userId: username });
  if (!cred) {
    res.send({ result: "ude" });
    return;
  }
  if (await bcrypt.compare(password, cred.password)) {
    var token = jwt.sign({ role: "user", username: username }, "secret");
    res.send({ result: "success", token: token });
  } else {
    res.send({ result: "wp" });
  }
});

router.get("/is-authenticated", (req, res) => {
  const token = req.query.token;
  jwt.verify(token, "secret", function (err, decoded) {
    if (!err) {
      res.send(decoded);
    } else {
      res.send(err.name);
    }
  });
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const User = await Credentials.findOne({ userId: username });
  if (User) {
    return res.json({ msg: "Username already Taken", status: "error" });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    Credentials.insertOne({
      userId: username,
      password: hashedPassword,
    });
  }
  return res.json({ msg: "Registration Success", status: "success" });
});

module.exports = router;
