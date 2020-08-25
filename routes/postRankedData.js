const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const rankedModels = require("../models/userRankingResult.model");

router.use(bodyParser.json());

router.post("/ranking", (req, res) => {
  const userEmail = req.body.userEmail;
  const userRole = req.body.userRole;
  const rankedList = req.body.rankedList;
  let newRankingResult;

  if (userRole === "mentee") {
    newRankingResult = new rankedModels.mentorsRankedModel({
      userEmail,
      rankedList,
    });
  } else {
    newRankingResult = new rankedModels.menteesRankedModel({
      userEmail,
      rankedList,
    });
  }
  newRankingResult
    .save({})
    .then(() => res.send("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
