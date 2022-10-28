import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Usuario from "./pages/Usuario";

    function Rotas(){
        return(
            <BrowserRouter>
            <Routes>
                <Route path="/cadastro" element ={<Cadastro />} />
                <Route path="/home" element ={<Home />}/>
                <Route path="/login" element ={<Login />}/>
                <Route path="/usuario" element ={<Usuario />}/>
            </Routes>
            </BrowserRouter>
        )
    }
export default Rotas;