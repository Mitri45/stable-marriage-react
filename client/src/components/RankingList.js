import React, { useState } from "react";
import styled from "styled-components";
import reorderImg from "../img/reorder.svg";
import userAvatar from "../img/userAvatar.png";
import { submitResult } from "../utils/submitResults";
import { ReactSortable } from "react-sortablejs";
import { Link } from "react-router-dom";

// Styles section with styled-components library (initial adaptation for mobile)

const Container = styled.div`
  max-width: 500px;
  margin: 1em auto;
`;
const StyledHeader = styled.h1`
  text-align: center;
  font-size: 1.5rem;
`;
const CardsWrapper = styled(ReactSortable)`
  display: flex;
  flex-flow: column nowrap;
  width: 90%;
  margin: 0 auto;
`;
const UserCard = styled.div`
  max-height: 100px;
  min-width: 360px;
  border: 1px solid #eeeeee;
  box-shadow: 4px 3px 3px 0px rgb(28 27 33 / 55%);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1em;
  padding: 1em 0;
  background-color: white;

  &.sortable-swap-highlight {
    background-color: #f9c7c8;
  }

  &:hover {
    cursor: move;
    cursor: -webkit-grabbing;
  }
`;
const StyledImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  flex: 0 0 auto;
  border: solid 1px #cec4c4;
`;
const UserName = styled.h2`
  max-width: 150px;
  flex: 1 1 auto;
  font-size: 1.2rem;
  margin: 0 1em;
  overflow-wrap: break-word;
  hyphens: auto;
`;
const Hamburger = styled.img`
  max-width: 50px;
  min-width: 25px;
  height: 100%;
`;
const UserRating = styled.div`
  flex: 0 1 auto;
  margin: 0 1em;

  & p {
    font-size: 1.5em;
    color: red;
  }
`;

// User list component accept location object with state info about current user and data from GraphQL query
export default function RankingList() {
  let currentUser = JSON.parse(localStorage.getItem("validUser"));

  // Make this function stateful with React useState hook
  // If current user already have changed something in ranking list this info should be
  // in local storage. So we take it and make it our initial state by converting it to the object,
  // otherwise use data from GraphQL initial query
  const [state, setState] = useState(() => {
    const localData = localStorage.getItem("rankingList");
    return JSON.parse(localData);
  });
  // Every time moving/dragging triggered in the list - save current order to local storage
  const sortEvent = (el) => {
    let sortUserDataToStore = [];
    state.forEach((el) => {
      sortUserDataToStore.push({
        name: el.name,
        surname: el.surname,
        photo: el.photo,
        email: el.email,
      });
    });
    localStorage.setItem("rankingList", JSON.stringify(sortUserDataToStore));
  };

  // When we going back to first screen delete all data in local storage to prevent redirect
  const wipeCurrentUserDetails = () => {
    localStorage.removeItem("validUser");
    localStorage.removeItem("rankingList");
  };

  // TODO - organizing and submitting results of raking to somewhere
  const submitHandler = () => {
    submitResult(state, currentUser);
  };
  return (
    <Container>
      <StyledHeader>
        {`Hi, ${currentUser.name}! Please rate this  
        ${currentUser.role === "mentor" ? "mentees" : "mentors"}:`}
      </StyledHeader>
      <CardsWrapper
        tag="div"
        list={state}
        setList={setState}
        onSort={sortEvent}
        animation={200}
        easing="cubic-bezier(1, 0, 0, 1)"
      >
        {state.map((item, index) => (
          <UserCard key={item.email}>
            <UserRating>
              <p className="user-rating">{index + 1}</p>
            </UserRating>
            {item.photo.length === 0 ? (
              <StyledImg src={userAvatar} alt="User avatar" />
            ) : (
              <StyledImg src={item.photo} alt="User avatar" />
            )}
            <UserName>{`${item.name} ${item.surname}`}</UserName>
            <Hamburger src={reorderImg} alt="reorderList" />
          </UserCard>
        ))}
      </CardsWrapper>

      <button
        type="button"
        style={{ display: "block", margin: "1em 0", padding: "1em" }}
        onClick={submitHandler}
      >
        Submit ranking results
      </button>
      <Link to="/" onClick={wipeCurrentUserDetails}>
        Choose another account
      </Link>
    </Container>
  );
}
