const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;

const getRankingListRoute = require("./routes/getRankingList");
const postRankingResultRoute = require("./routes/postRankedData");

app.use(express.static("public"));

app.get("/user", getRankingListRoute);
app.post("/ranking", postRankingResultRoute);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
