import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Usuario from "./Pages/Usuario";
import EscolhaPlano from "./Pages/EscolhaPlano";
import Plataforma from "./Pages/Plataforma";
import Barra from "./Pages/Barra";
import Favoritos from "./Pages/Plataforma/Favoritos";
import Lançamentos from "./Pages/Plataforma/Lançamentos";
import MaisJogados from "./Pages/Plataforma/Maisjogados";
import Recomendados from "./Pages/Plataforma/Recomendados";
//import { Switch } from "@mui/material";

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