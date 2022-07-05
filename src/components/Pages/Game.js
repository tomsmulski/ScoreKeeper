import Player from "../Player/Player.js";
import Button from "../Button/Button.js";

import styled from "styled-components";


export function GamePage({currentGame}) {


  return (
    <>
      <h2>{currentGame.gamename}</h2>

      {currentGame.Players.map((player) => {
        return <Player key={player.id} player={player} />;
      })}

      <StyledDiv>
        <Button background={"lightseagreen"}>
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
