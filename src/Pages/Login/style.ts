import styled from "styled-components";
//import * as Image from "../../Assets/fundo.jpg";

export const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2%;
  background: rgba(100, 100, 100, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  text-transform: uppercase;
  @media only screen and (max-width: 320px) {
    width: 4vw;
    height: 9vh;
    hr {
      margin-bottom: 0.2rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 4vw;
    height: 9vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 6vh;
    height: 12vh;
  }

  @media only screen and (min-width: 768px) {
    width: 20vw;
    height: 30vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 25vw;
    height: 30vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 25vw;
    height: 35vh;
  }

`;


export const StyledInput = styled.input`
 box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3vh;
  padding: 1vh;
  border: none;
  outline: none;
  color: black;
  font-size: 1rem;
  font-weight: bold;

  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 1rem;
  }
  &::placeholder {
    color: black;
    font-weight: 45;
    font-size: 1rem;
  }
`;
 
