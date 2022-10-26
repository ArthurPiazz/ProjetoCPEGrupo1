import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Usuario from "./Pages/Usuário";

    function Rotas(){
        return(
            <BrowserRouter>
            <Routes>
                <Route path="/cadastro" component ={Cadastro} />
                <Route path="/home" component ={Home}/>
                <Route path="/login" component ={Login}/>
                <Route path="/usuario" component ={Usuario}/>
            </Routes>
            </BrowserRouter>
        )
    }
export default Rotas;