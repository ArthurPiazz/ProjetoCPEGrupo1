import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Usuario from "./pages/Usuario";
import EscolhaPlano from "./pages/Cadastro/EscolhaPlano";
import Plataforma from "./pages/Plataforma";
import Barra from "./pages/Barra";
import Favoritos from "./pages/Plataforma/Favoritos";
import Lançamentos from "./pages/Plataforma/Lançamentos";
import MaisJogados from "./pages/Plataforma/Maisjogados";
import Recomendados from "./pages/Plataforma/Recomendados";
import { Switch } from "@mui/material";

    function Rotas(){
        return(
            <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Home />}/>
                <Route path="/cadastro" element ={<Cadastro />} />
                <Route path="/home" element ={<Home />}/>
                <Route path="/login" element ={<Login />}/>
                <Route path="/usuario" element ={<Usuario />}/>
                <Route path="/cadastro/escolhaplano" element ={<EscolhaPlano />}/>
                <Route path="/plataforma" element ={<Plataforma />}/>
                <Route path="/maisjogados" element ={<MaisJogados />}/>
                <Route path="/favoritos" element ={<Favoritos />}/>
                <Route path="recomendados" element ={<Recomendados />}/>
                <Route path="/lançamentos" element ={<Lançamentos />}/>
                <Route path="/temp" element ={<Barra />}/>
            </Routes>
            </BrowserRouter>
        )
    }
export default Rotas;