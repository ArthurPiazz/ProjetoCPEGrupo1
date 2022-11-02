import React from 'react';
import "./maisjogados.css";
import Barra from "../../Barra";

function MaisJogados(){

    return(
        <div> <div class="header">
        <div class="header-right">
            <Logo/>
        </div>
    </div>

            <div className="background_plataforma">
            <Barra/>
            <h1>MAIS JOGADOS</h1>
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

export default MaisJogados;