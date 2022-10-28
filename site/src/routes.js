import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Usuario from "./Pages/Usuario";

    function Rotas(){
        return(
            <BrowserRouter>
            <Routes>
                <Route path="/Cadastro" element ={<Cadastro />} />
                <Route path="/Home" element ={<Home />}/>
                <Route path="/Login" element ={<Login />}/>
                <Route path="/Usuario" element ={<Usuario />}/>
            </Routes>
            </BrowserRouter>
        )
    }
export default Rotas;