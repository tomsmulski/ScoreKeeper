import styled from "styled-components";
import { useState } from "react";
import { nanoid } from "nanoid";
import { getCurrentDate } from "../getCurrentDate";



export default function FormAddNewGame({onCreateNewGame}) {
  const [gameName, setGameName] = useState("");
  const [playerName, setPlayerName] = useState("");

  function handelSubmit(e){
    e.preventDefault();
  
    let Players = []; 
    let PlayerNamen = playerName.split(",");
  
    if (PlayerNamen.length > 1) {
      PlayerNamen.forEach((pName) => {
        if (pName.length !== 0) {
          Players.push({ id: nanoid(), name: pName, score: 0 });
        }
      });
  
      onCreateNewGame({
        Players,
        id: nanoid(),
        gamename: gameName,
        gamedate: getCurrentDate(),
      });
    
    }
  }


  return (
    <>
      <form onSubmit={handelSubmit}>
        <StyledInput type="text" required placeholder="New Game" value={gameName} onChange={(e)=>{
          setGameName(e.target.value)
        }}></StyledInput>
        <StyledInput type="text" required placeholder="Name, Name2, Name3" value={playerName} onChange={(e)=>{
          setPlayerName(e.target.value)
        }}></StyledInput>
        <StyledButton>Start New Game</StyledButton>
      </form>
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
