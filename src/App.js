import styled from "styled-components";
import { HistoryPage } from "./components/Pages/History.js";
import { HomePage } from "./components/Pages/Home.js";
import { GamePage } from "./components/Pages/Game.js";

import { Route, Routes } from "react-router-dom";

import { Navigation } from "./components/Navigation/Navigation.js";

function App() {
  return (
    <>
      <header>
        <H1>Scorekeeper</H1>
      </header>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </Main>

      <Navigation />
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
