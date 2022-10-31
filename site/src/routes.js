import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Usuario from "./Pages/Usuario";
//import Cadastro from "./Pages/Cadastro";
//import Home from "./Pages/Home";
//import Login from "./Pages/Login";
//import EscolhaPlano from "./Pages/Cadastro/EscolhaPlano";
//import Plataforma from "./Pages/Plataforma";
//import Barra from "./Pages/Barra";


    function Rotas(){
        return(
            <BrowserRouter>
            <Routes>
                
                <Route path="/usuario" element ={<Usuario />}/>
                
            </Routes>
            </BrowserRouter>
        )
    }
export default Rotas;
/*
<Route path="/escolhaplano" element ={<EscolhaPlano />}/>
<Route path="/plataforma" element ={<Plataforma />}/>
<Route path="/temp" element ={<Barra />}/>
<Route path="/cadastro" element ={<Cadastro />} />
<Route path="/home" element ={<Home />}/>
<Route path="/login" element ={<Login />}/>*/