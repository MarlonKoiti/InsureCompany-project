import styled from "styled-components";
//import * as Image from "../../Assets/fundo.jpg";

export const SpanForgot = styled.span`
  display: flex;
  color:#72CCAA;
  font-size: 12px;
`

export const Layout = styled.div`
  font-family: Poppins, sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2%;
  background: white;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  h1 {
    font-weight: 300;
    text-align: center;
    color: #72CCAA;
  }
  span {
    font-weight: bold;
  }

  @media only screen and (min-width: 1280px) {
    width: 500px;
    height: 400px;
    left: 248px;
    top: 240px;
  }
`;

export const StyledInput = styled.input`
  background-color:#F5F5F5;
  border-radius: 5px;
  width: 308px;
  height: 43px;
  padding: 1vh;
  border: none;
  outline: none;
  color: black;
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 20px;
  transition: 0.5s;
  text-align: center;

  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #72CCAA;
    backdrop-filter: blur(12rem);
    border-radius: 1rem;
  }
  &::placeholder {
    color: #72CCAA;
    font-size: 1rem;
    text-align:center;
    font-weight: bold;
  }
`;
 
