import Player from "../Player/Player.js";
import Button from "../Button/Button.js";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import {
  getLocalStorage,
  setLocalStorage,
  LocalStorageKeyNameGame,
  LocalStorageKeyNameHistory,
} from "../LocalStorage/Storage";
import { useState, useEffect } from "react";

export function GamePage() {
  let navigate = useNavigate();
  const [game, setGame] = useState(getLocalStorage(LocalStorageKeyNameGame));


  // NO WORK if you navigate to /game without any datas. localstorage are null. but will not return to main page
  useEffect(() => {
    if (getLocalStorage(LocalStorageKeyNameGame) === null) {
      navigate("/");
    }
  }, [navigate]);

  let StorageArray = [];

  function handelClick() {
    const gameStorage = getLocalStorage(LocalStorageKeyNameGame);

    let historyStorage = getLocalStorage(LocalStorageKeyNameHistory);

    if (historyStorage !== null) {
      StorageArray = [gameStorage, ...historyStorage];
    } else {
      StorageArray = [gameStorage];
    }

    setLocalStorage(LocalStorageKeyNameHistory, StorageArray);
    setLocalStorage(LocalStorageKeyNameGame, null);
    navigate("/");
  }

  return (
    <>
      <h2>{game.gamename}</h2>

      {game.Players.map((player) => {
        return <Player key={player.id} player={player} />;
      })}

      <StyledDiv>
        <Button background={"lightseagreen"} onClick={handelClick}>
          end game
        </Button>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 10%;
  width: 100%;
`;
