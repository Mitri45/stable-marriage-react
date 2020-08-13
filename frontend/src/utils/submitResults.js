import axios from "axios";

export async function submitResult(rankedList, currentUser) {
  const parsedRankedList = [];
  rankedList.forEach((el) => {
    parsedRankedList.push(el["email"]);
  });
  const rankingResults = [currentUser.email, parsedRankedList];
  try {
    const response = await axios.post("/ranking", rankingResults);
    return response.status;
  } catch (error) {
    return error;
  }
}
