import React from "react";
import Button from "../../Componentes/button";
import { Home } from "./style";

export default function AppLogin(){
  
  return (
  <Home>
    <label>Login</label>
    <input type="text" placeholder="Digite seu login"/>

    <label>Senha</label>
    <input type="password" placeholder="Digite sua senha"/>
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
  </Home>
  )
}