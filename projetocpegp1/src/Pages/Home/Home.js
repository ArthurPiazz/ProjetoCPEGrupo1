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
        </div>
        <div class="page">

        <div className="containerQuadradoeCrash">
            <div className="quadradoCinza"></div>
            <div className="crash4"></div>
        </div>
       
       <div className="container2RetanguloeJogos">

             <div className="retanguloCinza1"></div>

        <div className="containerRetangulosJogosHome"> 
                <div className="retanguloJogo1"></div>
                <div className="retanguloJogo2"></div>
                <div className="retanguloJogo3"></div>
                <div className="retanguloJogo4"></div>
            </div>
       </div>
    
        <div className="containerFarCryeJogos">

            <div className="elipseFarCry"></div>

        </div>

        <div className="containerJogosDebaixo">
                    <div className="quadradoMenorJogoAcima"></div>
                    <div className="quadradoMenorJogoAbaixo"></div>
                    <div className="quadradoMenorJogoDireita"></div>
                    <div className="quadradoMenorJogoEsquerda"></div>
                </div>

        

        <div className="quadradoRoxoCentral"></div>
        <div className="quadradoBrancoPlanos1"></div>
        <div className="quadradoBrancoPlanos2"></div>
        <div className="quadradoBrancoPlanos3"></div>
        <div className="quadradoBrancoPlanos4"></div>3

        <div className="quadradoFeedback">
            <div class="feedback1"></div>

            <div class="feedback2"></div>

            <div class="feedback3"></div>

            <div class="feedback4"></div>

            <div class="feedback5"></div>
        </div>
      
      <div className="retânguloCinzaAbaixo"></div>

      <div className="footer"></div>
      <a href="/home" > <Logo /> </a>
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
