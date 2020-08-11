import axios from "axios";

// Want to use async/await? Add the `async` keyword to your outer function/method.
export async function authenticateUser(userEmail) {
  try {
    const response = await axios.get("/user", {
      params: {
        email: userEmail,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}
