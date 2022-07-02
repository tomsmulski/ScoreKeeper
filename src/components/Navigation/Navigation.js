import { NavLink } from "react-router-dom";
import styled from "styled-components";

export function Navigation() {
  return (
    <>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/history">History</StyledNavLink>
      </StyledNav>
    </>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  background: green;
  width: 100%;
  text-align: center;
  height: 60px;
  font-size: larger;
  text-decoration: none;
  padding-top: 15px;
  border: 1px solid black;

  &.active {
    background: red;
    font-weight: bold;
  }
`;
