import React, { useState } from "react";
import { authenticateUser } from "../routes/authenticateUser";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const UserVerification = () => {
  const [userEmail, setUserEmail] = useState("");
  const history = useHistory();
  const userNotFound = document.getElementById("userNotFound");
  const handleSubmit = async (e) => {
    userNotFound.style.display = "none";
    e.preventDefault();
    const processedEmail = userEmail.trim().toLocaleLowerCase();
    const validUser = await authenticateUser(processedEmail);
    if (validUser) {
      localStorage.setItem("validUser", JSON.stringify(validUser[0]));
      const rankingList = [];
      validUser[1].forEach((el) => {
        rankingList.push({
          id: el["Order ID"],
          name: el["First Name"],
          surname: el["Last Name"],
          photo: el["A recent photo of yourself"],
          email: el["Email"],
        });
      });
      localStorage.setItem("rankingList", JSON.stringify(rankingList));
      history.push("/ranking");
    } else {
      const userNotFound = document.getElementById("userNotFound");
      userNotFound.style.display = "initial";
    }
  };
  return (
    <Container
      maxWidth="sm"
      className="App"
      style={{
        backgroundColor: "#cfe8fc",
        height: "100vh",
      }}
    >
      <Typography variant="h3" gutterBottom align="center">
        Stable marriage app
      </Typography>
      <Typography variant="h6" gutterBottom align="center">
        Please identify yourself with email address you used for register to
        this event:
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          name="email"
          type="email"
          variant="outlined"
          id="email"
          label="email"
          required
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          style={{ marginTop: "2em" }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: "2em" }}
        >
          Check the email
        </Button>

        <Alert
          severity="error"
          id="userNotFound"
          style={{
            display: "none",
            marginTop: "2em",
          }}
        >
          Sorry, we have not found given email, please try another one
        </Alert>
      </form>
    </Container>
  );
};
export default UserVerification;
