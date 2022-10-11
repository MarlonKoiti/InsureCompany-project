import React from "react";
import Button from "../../Componentes/button";
import { Structure } from "../../Componentes/structure";
import { Link } from "react-router-dom";
import { Layout , StyledInput , SpanForgot } from "./style";

export default function Register(){
  return(
  <Layout>
    <Link style={{ textDecoration: 'none' }} to="/login"><SpanForgot>X</SpanForgot></Link>
    <h1>Cadastrar Cliente</h1>
    <span>Preencha os dados</span>
    <StyledInput
        placeholder="Nome"
    />

    <StyledInput
        placeholder="Email"
    />
    <StyledInput 
        placeholder="Serviço"
    />

    <StyledInput
        placeholder="Carro"
    />

    <StyledInput
        placeholder="Telefone"
    />

    <StyledInput
        placeholder="CPF"
    />

    <Button
        display =""
        margin="0px 0px 20px 0px"
        padding="1vh"
        border="none"
        background="#72CCAA"
        height = "45px"
        width = "320px"
        onClick={() => {alert("Botão funcionando")}}
        radius = "5px"
        textcolor="white"
        children = "Cadastrar Cliente"
      />
  </Layout>
  
  )
}