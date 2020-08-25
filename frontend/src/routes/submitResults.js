import axios from "axios";

export async function submitResult(rankedList, currentUser) {
  const parsedRankedList = [];
  rankedList.forEach((el, index) => {
    parsedRankedList.push({ rankedUserEmail: el["email"], rank: index });
  });
  const rankingResults = {
    userEmail: currentUser.email,
    userRole: currentUser.role,
    rankedList: parsedRankedList,
  };
  try {
    const response = await axios.post("/ranking", rankingResults);
    return response.status;
  } catch (error) {
    return error;
  }
}
