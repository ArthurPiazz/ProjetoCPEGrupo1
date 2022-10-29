import React from 'react';
import "./home.css";

function Home(){
    return(
    <div> <img src= "/images/BG_HOME.png" alt = "BG HOME"/>
        <div class="header">
            <a href="/home" > <Logo /> </a>
            <div class="header-right">
                 <a class="active" href="/cadastro">Vire um membro já!</a>
                <a href="/login">Acesse sua conta</a>
                </div>
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



export default Home;