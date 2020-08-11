const express = require("express");
var router = express.Router();
const verifyController = require("../controllers/userVerification");

router.get("/user", (req, res) => {
  const sendData = verifyController.userVerification(req.query.email);
  res.send(sendData);
});

module.exports = router;
