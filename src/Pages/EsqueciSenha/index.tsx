import React from "react";
import Button from "../../Componentes/button";
import { Structure } from "../../Componentes/structure";
import { Input1 } from "./style";

export default function AppForget(){
  return(
  <Structure>
    <h1>Encontre sua conta do <span id="safe">Safe</span>Car</h1>
    <Input1
        placeholder="Digite seu e-mail"
    />
    <Button
        margin-top="2rem"
        border="3px"
        background="blue"
        height = "6vh"
        onClick={() => {alert("Botão funcionando")}}
        radius = "12%"
        width = "12vh"
        textcolor="white"
        children = "Entrar"
      />
  </Structure>
  
  )
}