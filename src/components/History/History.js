import styled from "styled-components";

export default function History({ game }) {
  return (
    <StyledSection key={game.id}>
      <StyledH3>
        <StyledSpan>{game.gamename}</StyledSpan>
        <StyledSpan>{game.gamedate}</StyledSpan>
      </StyledH3>
      <StyledUl>
        {game.Players.map((player) => {
          return (
            <ListItem key={player.id}>
              <span>{player.name}</span>
              <span>{player.score}</span>
            </ListItem>
          );
        })}
      </StyledUl>
    </StyledSection>
  );
}

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding-right: 25px;
`;

const StyledSpan = styled.span`
  display: flex;
  justify-content: space-between;
`;

const StyledSection = styled.section`
  border: 1px solid black;
`;

const StyledH3 = styled.h3`
  border: 1px solid black;
  padding: 5px;
`;

const StyledUl = styled.ul`
  padding: 5px;
`;
