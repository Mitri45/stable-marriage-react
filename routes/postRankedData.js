const express = require("express");
var router = express.Router();

router.post("/ranking", (req, res) => {
  console.log("Post event");
  res.send(res);
});

module.exports = router;
