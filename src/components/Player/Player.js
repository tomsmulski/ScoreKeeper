import styled from "styled-components";
import { useState } from "react";

export default function Player({ player }) {
  const [scores, setScores] = useState(player);


  function increase() {
    let CurrentScore = scores.score;
    CurrentScore += 1;
    setScores({ ...scores, score: CurrentScore });
  }

  function decrease() {
    let CurrentScore = scores.score;
    CurrentScore -= 1;
    setScores({ ...scores, score: CurrentScore });
  }

  return (
    <PlayerWrapper key={scores.id}>
      {scores.name}
      <PlayerScore>
        <Button
          disabled={scores.score === 0}
          type="button"
          aria-label="Decrease score"
          onClick={decrease}
        >
          -
        </Button>
        <span>{scores.score}</span>
        <Button type="button" aria-label="Increase score" onClick={increase}>
          +
        </Button>
      </PlayerScore>
    </PlayerWrapper>
  );
}

const PlayerWrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: teal;
  color: white;
  padding: 5px 10px 6px;
  border: none;
  border-radius: 5px;
`;

const PlayerScore = styled.div`
  display: grid;
  place-items: center;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;
