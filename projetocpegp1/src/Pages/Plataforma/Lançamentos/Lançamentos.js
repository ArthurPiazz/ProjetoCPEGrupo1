import React from 'react';
import "./lançamentos.css";
import Barra from "../../Barra";

function Lançamentos(){
    return(
        <div> <div class="header">
        <div class="header-right">
            <Logo/>
        </div>
    </div>

            <div className="background_plataforma">
            <Barra/>
            <h1>LANÇAMENTOS</h1>
            </div>
            </div>
    )
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
        

export default Lançamentos;