import styled from "styled-components";

export default styled.button`
  background-color: ${(props) =>
    props.background ? props.background : "black"};
  border-radius: 5px;
  width: 80%;
  border: none;
  padding: 5px 0 6px;
  height: 50px;
  bottom: 80px;
  font-size: 30px;
  margin-bottom: 5px;
`;
