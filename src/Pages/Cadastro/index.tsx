import React from "react";
import Button from "../../Componentes/button";
import { Structure } from "../../Componentes/structure";
import { Input1 } from "./style";

export default function Cadastrar(){
  return(
  <Structure>
    <h1>Encontre sua conta do <span id="safe">Safe</span>Car</h1>

    <Input1
        placeholder="Nome"
    />

    <Input1
        placeholder="Email"
    />

    <Input1
        placeholder="Senha"
    />

    <Input1
        placeholder="Telefone"
    />

    <Input1
        placeholder="CPF"
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