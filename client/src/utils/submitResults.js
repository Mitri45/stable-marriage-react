import axios from "axios";

export function submitResult(rankedList, currentUser) {
  const parsedRankedList = [];
  rankedList.forEach((el) => {
    parsedRankedList.push(el["email"]);
  });
  const resultForMarriage = [currentUser.email, parsedRankedList];

  axios
    .post("/ranking", resultForMarriage)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}
