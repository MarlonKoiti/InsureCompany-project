import styled from "styled-components";

export const SpanForgot = styled.div`
    display: block;
    align-self: center;
    text-align: center;
    margin: 0px 0px 0px 550px;
    border-radius: 2rem;
    color: #C0C0C0;
    border: 2px solid #C0C0C0;
    width: 25px;
    height: 25px;
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
    width: 650px;
    height: 500px;
    h1 {
        margin-top: 0px;
        font-weight: bold;
        color: #72CCAA;
        font-size: 25px;
    }
    span {
        font-weight: bold;
        color: #C0C0C0;
        margin-bottom: 1rem;
    }
`

export const StyledInput = styled.input`
    display: block;
    margin-bottom: 1rem;
    text-align: center;
    width: 350px;
    height: 45px;
    border: none;
    outline: none;
    background-color: #F5F5F5;
    transition: 0.5s;

    &:focus {
        display: inline-block;
        backdrop-filter: blur(12rem);
    }
    &:hover{
        place-content:none;
        box-shadow: 0 0 0 0.2rem #72CCAA;
        border-radius: 1rem;
        &::placeholder {
            color: #72CCAA;
            text-align: center;
            font-size: 1rem;
            font-weight: bold;
    }
}
&::placeholder {
        color: #8E8A8A;
        font-weight: bold;
    }
`