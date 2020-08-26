const express = require("express");
const app = express();
if (app.get("env") == "development") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
const PORT = process.env.PORT || 9000;
const path = require("path");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database"));

const getRankingListRoute = require("./routes/getRankingList");
const postRankingResultRoute = require("./routes/postRankedData");
const matchingPerformRoute = require("./routes/matchPairs");

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});
app.get("/user", getRankingListRoute);
app.post("/ranking", postRankingResultRoute);
app.get("/match", matchingPerformRoute);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
