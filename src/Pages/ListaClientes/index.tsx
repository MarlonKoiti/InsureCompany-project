import React from "react";
import Button from "../../Componentes/button";
import { Layout, StyledInput } from "./style";

export default function List(){
  return(
  <Layout>
    <h1>Clientes</h1>
    <Button
        display = ""
        margin="0px 0px 20px 500px"
        padding="1vh"
        border="1px solid black"
        background="#C0C0C0"
        width = "150px"
        height = "40px"
        onClick={() => {alert("Botão funcionando")}}
        radius = "5px"
        textcolor="white"
        children = "Simular cotação"
      />
    <Button
        display = ""
        margin="0px 0px 0px 570px"
        padding="1vh"
        border="1px solid black"
        background="#7E7E7E"
        width = "80px"
        height = "30px"
        onClick={() => {alert("Botão funcionando")}}
        radius = "16px"
        textcolor="white"
        children = "Novo"
      />
      <Button
        display = "block"
        margin="10px 0px 0px 570px"
        padding="1vh"
        border="1px solid black"
        background="#72CCAA"
        width = "80px"
        height = "30px"
        onClick={() => {alert("Botão funcionando")}}
        radius = "16px"
        textcolor="white"
        children = "Atualizar"
      />
      <Button
        display = "block"
        margin="10px 0px 0px 570px"
        padding="1vh"
        border="1px solid black"
        background="#72CCAA"
        width = "80px"
        height = "30px"
        onClick={() => {alert("Botão funcionando")}}
        radius = "16px"
        textcolor="white"
        children = "Deletar"
      />
      
  </Layout>
  )
}