import React from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHome from './Pages/Init/index'
import AppLogin from './Pages/Login/index'
import AppRecover from './Pages/EsqueciSenha/index'
import Register from "./Pages/Cadastro/index";
import List from "./Pages/ListaClientes/index";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppHome />}></Route> 
        <Route path="/login" element={<AppLogin />}></Route> 
        <Route path="/register" element={<Register />}></Route>
        <Route path="/recover" element={<AppRecover />} ></Route>
        <Route path="/list" element={<List />}></Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default Application;