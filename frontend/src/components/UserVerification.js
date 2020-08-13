import React, { useState } from "react";
import { authenticateUser } from "../utils/authenticateUser";
import { useHistory } from "react-router-dom";

const UserVerification = () => {
  const [userEmail, setUserEmail] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
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
      userNotFound.innerText = "Please, check the spelling and try once again";
    }
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Please identify yourself with your email address, that you used for
          register to this event: <br />
          <input
            name="email"
            type="email"
            id="email"
            required
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            style={{ fontSize: "1.3rem", padding: "1rem", marginTop: "1rem" }}
          />
        </label>
        <button type="submit" style={{ fontSize: "1.3rem", padding: "1rem" }}>
          Submit
        </button>
        <span
          id="userNotFound"
          style={{ marginLeft: "1rem", fontStyle: "italic" }}
        ></span>
      </form>
    </div>
  );
};
export default UserVerification;
