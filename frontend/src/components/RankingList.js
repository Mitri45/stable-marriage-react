import React, { useState } from "react";
import styled from "styled-components";
import reorderImg from "../img/reorder.svg";
import userAvatar from "../img/userAvatar.png";
import { submitResult } from "../routes/submitResults";
import { ReactSortable } from "react-sortablejs";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
// Styles section with styled-components library (initial adaptation for mobile)

const IconButtonStyled = styled(IconButton)`
  cursor: grab;
`;
const ButtonBlock = styled(Button)`
  display: block;
  width: 240px;
  margin-top: 4em;
`;
const ListStyled = styled(List)`
  margin-bottom: 2em;
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

  // organizing and submitting results of raking to somewhere
  const submitHandler = async () => {
    const submitted = await submitResult(state, currentUser);
    if (submitted === 200) {
      alert("200");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1">
        {`Hi, ${currentUser.name}! Please rate this
        ${currentUser.role === "mentor" ? "mentees" : "mentors"}:`}
      </Typography>
      <ListStyled>
        <ReactSortable
          list={state}
          setList={setState}
          onSort={sortEvent}
          animation={200}
          easing="cubic-bezier(1, 0, 0, 1)"
        >
          {state.map((item, index) => (
            <ListItem key={item.email} alignItems="flex-start" divider>
              {item.photo.length === 0 ? (
                <ListItemAvatar>
                  <Avatar alt={item.name} src={userAvatar} />
                </ListItemAvatar>
              ) : (
                <ListItemAvatar>
                  <Avatar alt={item.name} src={item.photo} />
                </ListItemAvatar>
              )}
              <ListItemText
                primary={`${item.name} ${item.surname}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {`Current rank: ${index + 1}`}
                    </Typography>
                  </React.Fragment>
                }
              />
              <ListItemSecondaryAction>
                <IconButtonStyled edge="end" aria-label="drag">
                  <DragIndicatorIcon />
                </IconButtonStyled>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </ReactSortable>
      </ListStyled>
      <Button
        variant="contained"
        color="primary"
        onClick={submitHandler}
        endIcon={<Icon>send</Icon>}
      >
        Submit ranking results
      </Button>
      <ButtonBlock
        color="secondary"
        variant="contained"
        href="/"
        onClick={wipeCurrentUserDetails}
      >
        Choose another account
      </ButtonBlock>
    </Container>
  );
}
