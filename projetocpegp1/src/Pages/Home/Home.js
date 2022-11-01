import React from 'react';
import "./home.css";

function Home(){
    return(
        <div> <div class="header">
        <a href="/home" > <Logo /> </a>
        <div class="header-right">
             <a class="active" href="/cadastro">Vire um membro já!</a>
            <a href="/login">Acesse sua conta</a>
        </div>
        <div className="quadradoCinza"></div>
        <div className="crash4"></div>
        <div className="retanguloCinza1"></div>
        <div className="retanguloJogo1"></div>
        <div className="retanguloJogo2"></div>
        <div className="retanguloJogo3"></div>
        <div className="retanguloJogo4"></div>
        <div className="elipseFarCry"></div>
        <div className="quadradoMenorJogoDireita"></div>
        <div className="quadradoMenorJogoEsquerda"></div>
        <div className="quadradoMenorJogoAcima"></div>
        <div className="quadradoMenorJogoAbaixo"></div>
        <div className="quadradoRoxoCentral"></div>

    </div>
    <div className="background">
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