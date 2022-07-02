import styled from "styled-components";
import { useState, useEffect } from "react";

import { nanoid } from "nanoid";
import {
  getLocalStorage,
  setLocalStorage,
  LocalStorageKeyNameGame,
} from "../LocalStorage/Storage";
import { getCurrentDate } from "../getCurrentDate";
import { useNavigate } from "react-router-dom";

export default function FormAddNewGame() {
  const [message, setMessage] = useState(null);
  const [game, setGame] = useState(
    getLocalStorage(LocalStorageKeyNameGame) !== null
      ? getLocalStorage(LocalStorageKeyNameGame)
      : null
  );

  let navigate = useNavigate();

  useEffect(() => {
    setLocalStorage(LocalStorageKeyNameGame, game);

    if (getLocalStorage(LocalStorageKeyNameGame) !== null) {
      navigate("/game");
    }
  }, [game, navigate]);

  function handelClick(event) {
    const Form = event.target.parentElement;
    const GameTitleTextInput = Form.elements[0].value;
    const PlayerNameTextInput = Form.elements[1].value;
    let PlayerNamen = PlayerNameTextInput.split(",");

    let GameName = GameTitleTextInput;
    let GameID = nanoid();

    let Players = [];

 

    if (PlayerNamen.length > 1) {
      PlayerNamen.forEach((pName) => {
        if (pName.length !== 0) {
          Players.push({ id: nanoid(), name: pName, score: 0 });
        }
      });

      Form.reset();

      setGame({
        Players,
        id: GameID,
        gamename: GameName,
        gamedate: getCurrentDate(),
      });

    }else if (GameTitleTextInput === "") {
      setMessage("Enter a Gamename");
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    }else {
      setGame(null);
      setMessage("Enter more players, playing solo is boring");
      setTimeout(() => {
        setMessage(null);
      }, 4000);
    }
  }

  return (
    <>
      <form>
        <StyledInput required={true} placeholder="New Game"></StyledInput>
        <StyledInput
          required={true}
          placeholder="Name, Name2, Name3"
        ></StyledInput>
        <StyledButton
          type="button"
          onClick={(event) => {
            handelClick(event);
          }}
        >
          Start New Game
        </StyledButton>
      </form>
      {message && <StyledErrorBox>{message}</StyledErrorBox>}
    </>
  );
}

const StyledInput = styled.input`
  margin-top: 10px;
  border-radius: 5px;
  width: 100%;
  border: none;
  padding: 5px 10px 6px;
  height: 50px;
  border: 1px solid black;
`;

const StyledButton = styled.button`
  margin-top: 10px;
  border-radius: 5px;
  width: 100%;
  padding: 5px 0 6px;
  height: 50px;
  border: 1px solid black;
  font-size: larger;
`;

const StyledErrorBox = styled.div`
  text-align: center;
  background: red;
  z-index: 100;
  position: relative;
  margin-top: 10px;
  border-radius: 5px;
  width: 100%;
  padding: 5px 0 6px;
  height: auto;
  font-size: larger;
`;
