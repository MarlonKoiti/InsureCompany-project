import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Componentes/button";
import {Layout, StyledInput, SpanForgot } from "./style";


export interface LoginProps {}

const AppLogin: React.FunctionComponent<LoginProps> = (props) => {
  
  return (
    <Layout>
    <h1>Entrar no Safe<span>Car</span></h1>
    <StyledInput placeholder="Usuário/Email"/>
    <StyledInput placeholder="Senha"/>
      <Button
        margin="0px 0px 20px 0px"
        padding="1vh"
        border="none"
        background="#72CCAA"
        height = "45px"
        width = "320px"
        onClick={() => {alert("Botão funcionando")}}
        radius = "5px"
        textcolor="white"
        children = "Entrar"
      />
      <Link style={{ textDecoration: 'none' }} to="/recover"><SpanForgot>Esqueci minha senha</SpanForgot></Link>
      </Layout>
  )
}

export default AppLogin;