const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;
const path = require("path");

const getRankingListRoute = require("./routes/getRankingList");
const postRankingResultRoute = require("./routes/postRankedData");

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});
app.get("/user", getRankingListRoute);
app.post("/ranking", postRankingResultRoute);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
