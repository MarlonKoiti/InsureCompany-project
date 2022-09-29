import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Componentes/button";
import {Layout, StyledInput } from "./style";

export interface LoginProps {}

const AppLogin: React.FunctionComponent<LoginProps> = (props) => {
  
  return (
    <Layout>
    <label>Login</label>
    <StyledInput placeholder="Digite seu login"/>
    <br /><br />
    <label>Senha</label>
    <StyledInput placeholder="Digite sua senha"/> <br />
    <Link to="/recover"> Esqueci minha senha</Link>
    <p>
      <Button
        border="3px"
        background="blue"
        height = "6vh"
        onClick={() => {alert("Botão funcionando")}}
        radius = "12%"
        width = "12vh"
        textcolor="white"
        children = "Entrar"
      />
      </p>
      </Layout>
  )
}

export default AppLogin;