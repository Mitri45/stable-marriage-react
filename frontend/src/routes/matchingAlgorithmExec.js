import axios from "axios";

export async function matchingAlgorithmExec() {
  try {
    const response = await axios.get("/match");
    return response.data;
  } catch (error) {
    return error;
  }
}
