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

router.get("/verifyuser", (req, res) => {
  const token = req.query.token;
  jwt.verify(token, "secret", function (err, decoded) {
    if (!err) {
      return res.send(true);
    } else {
      return res.send(false);
    }
  });
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const User = await Credentials.findOne({ userId: username });
  if (User) {
    return res.json({ status: "USERNAME_TAKEN", statusCode: 3 });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    Credentials.insertOne({
      userId: username,
      password: hashedPassword,
    });
  }
  return res.json({ msg: "SUCCESS", statusCode: 0 });
});

module.exports = router;
