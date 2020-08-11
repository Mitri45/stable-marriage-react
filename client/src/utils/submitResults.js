import axios from "axios";

export function submitResult(rankingResults) {
  axios
    .post("/user", rankingResults)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}
