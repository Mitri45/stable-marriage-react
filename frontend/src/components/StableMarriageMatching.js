import React, { useState } from "react";
import { matchingAlgorithmExec } from "../routes/matchingAlgorithmExec";
import { doMarriage } from "../utils/stableMarriage";

const StableMarriageMatching = () => {
  const [mentorsRanked, setMentorsRanked] = useState([]);
  const [menteesRanked, setMenteesRanked] = useState([]);
  const [marriageResults, setMarriageResults] = useState([]);
  const makeMatching = async () => {
    const matchingResult = await matchingAlgorithmExec();
    const mentorsRanked = matchingResult[0];
    const menteesRanked = matchingResult[1];
    const marriageResults = doMarriage(mentorsRanked, menteesRanked);
    setMentorsRanked(mentorsRanked);
    console.log(mentorsRanked);
    setMenteesRanked(menteesRanked);
    console.log(menteesRanked);
    setMarriageResults(marriageResults[0]);
    console.log(marriageResults);
  };

  return (
    <div className="App">
      <button
        type="button"
        style={{ fontSize: "1.3rem", padding: "1rem" }}
        onClick={makeMatching}
      >
        Submit
      </button>
      <h2>Mentors ranked by mentees:</h2>
      {mentorsRanked.map((el) => {
        return (
          <div>
            <h3 key={el._id}>{el.userEmail}:</h3>
            <ol>
              {el.rankedList.map((element) => {
                return <li key={element._id}>{element.rankedUserEmail}</li>;
              })}
            </ol>
          </div>
        );
      })}
      <h2>Mentees ranked by mentors:</h2>

      {menteesRanked.map((el) => {
        return (
          <div>
            <h3 key={el._id}>{el.userEmail}:</h3>
            <ol>
              {el.rankedList.map((element) => {
                return <li key={element._id}>{element.rankedUserEmail}</li>;
              })}
            </ol>
          </div>
        );
      })}
      <h2>Matching pairs:</h2>
      {marriageResults.map((el) => {
        return (
          <div>
            <ul>
              <li key={el.email}>
                {el.email} is engaged with {el.fiance.email}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default StableMarriageMatching;
