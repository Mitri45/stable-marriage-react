const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.post("/ranking", (req, res) => {
  console.log(req.body);
  res.send("Post event");
});

module.exports = router;
