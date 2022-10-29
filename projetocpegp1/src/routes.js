import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Usuario from "./Pages/Usuario";
import EscolhaPlano from "./Pages/Cadastro/EscolhaPlano";
import Plataforma from "./Pages/Plataforma";

    function Rotas(){
        return(
            <BrowserRouter>
            <Routes>
                <Route path="/cadastro" element ={<Cadastro />} />
                <Route path="/home" element ={<Home />}/>
                <Route path="/login" element ={<Login />}/>
                <Route path="/usuario" element ={<Usuario />}/>
                <Route path="/escolhaplano" element ={<EscolhaPlano />}/>
                <Route path="/plataforma" element ={<Plataforma />}/>
            </Routes>
            </BrowserRouter>
        )
    }
export default Rotas;