import React from "react";
import RankingList from "./components/RankingList";
import UserVerification from "./components/UserVerification";
import { Route, Redirect } from "react-router-dom";

const validUser = localStorage.getItem("validUser");

function App() {
  return (
    <>
      <Route exact path="/">
        {validUser ? <Redirect to="/ranking" /> : <UserVerification />}
      </Route>
      <Route exact path="/ranking">
        <RankingList />
      </Route>
    </>
  );
}
export default App;
