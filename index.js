const express = require("express");
const app = express();
const verifyController = require("./controllers/userVerification");
const PORT = process.env.PORT || 9000;

app.use(express.static("public"));

app.get("/user", (req, res) => {
  const sendData = verifyController.userVerification(req.query.email);
  res.send(sendData);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
