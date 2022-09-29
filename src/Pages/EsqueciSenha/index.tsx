import React from "react";
import Button from "../../Componentes/button";
import { Layout , StyledInput } from "./style";

export default function AppForget(){
  return(
  <Layout>
    <h1>Encontre sua conta do Safe<span>Car</span></h1>
    <StyledInput
        placeholder="Digite seu e-mail ou nome de usuário"
    />
    <Button
        margin="0px 0px 20px 0px"
        padding="1vh"
        border="none"
        background="#72CCAA"
        width = "350px"
        height = "45px"
        onClick={() => {alert("Botão funcionando")}}
        radius = "5px"
        textcolor="white"
        children = "Buscar"
      />
  </Layout>
  
  )
}