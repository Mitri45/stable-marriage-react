const express = require("express");
var router = express.Router();
const rankedModels = require("../models/userRankingResult.model");

router.get("/match", (req, res) => {
  const mentors = rankedModels.mentorsRankedModel;
  const mentees = rankedModels.menteesRankedModel;
  const queryMentors = mentors.find();
  const queryMentees = mentees.find();

  Promise.all([queryMentors, queryMentees]).then((data) => {
    res.send(data);
  });
});

module.exports = router;
