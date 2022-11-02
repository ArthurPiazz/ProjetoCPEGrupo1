import React from 'react';
import "./plataforma.css";
import Barra from '../Barra/Barra';
//import {useNavigate} from "react-router-dom";

 
function Plataforma(){

    return(
        <div> <div class="header">
        <div class="header-right">
            <Logo/>
        </div>
    </div>

            <div className="background_plataforma">
            <Barra/>
            <h1>Plataforma</h1>
            </div>
            </div>
        
);
}

function Logo(){
    return(
    <div>
    <div class="logo"></div>
    <div class="logo-parte-roxa"></div>
    <div class="logo-parte-branca"></div>
    <div class="logo-texto">GAMECASTING</div>
    </div>
    );
}

export default Plataforma;