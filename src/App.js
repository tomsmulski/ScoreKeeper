import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import { HistoryPage } from "./components/Pages/History.js";
import { HomePage } from "./components/Pages/Home.js";
import { GamePage } from "./components/Pages/Game.js";

import { Navigation } from "./components/Navigation/Navigation.js";
import { useState } from 'react';
import { useEffect } from 'react';


import { useNavigate } from "react-router-dom";







function App() {
  const [currentGame, setCurrentGame] = useState(null)

  let navigate = useNavigate();
  useEffect(()=>{

    currentGame === null ? navigate("/") : navigate("/game");

  },[currentGame,navigate])






  return (
    <>
      <header>
        <H1>Scorekeeper</H1>
      </header>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage onCreateNewGame={setCurrentGame}/>} />                   
          <Route path="/game" element={<GamePage currentGame={currentGame}/>} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </Main>

      <Navigation/>
    </>
  );
}

export default App;

const Main = styled.main`
  display: grid;
  gap: 10px;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 200px;
`;

const H1 = styled.h1`
  text-align: center;
`;
