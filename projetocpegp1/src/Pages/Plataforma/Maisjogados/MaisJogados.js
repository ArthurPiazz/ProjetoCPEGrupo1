import React from 'react';
import "./maisjogados.css";
import Barra from "../../Barra";

function MaisJogados(){

    return(
       

            <div className="background_plataforma">
            <Barra/>
            <div className="elementos_recomendados">
                <link rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Iceland"/>
                <div className="retangulo_recomendados">QUERIDINHOS DA GALERA</div>
            <div className= "container_lancamentos">
                  <img src = "/images/gowr.jpg" alt = "GOWR" />
                  <img src = "/images/hk.png" alt = "HollowKnight" />
                  <img src = "/images/Jogo 3.png" alt = "MINECRAFT" />
            </div>

            <div className= "container_recomendados">
                  <img src = "/images/image 12.png" alt = "Fifa23" />
                  <img src = "/images/sv.png" alt = "StardewValley" />
                  <img src = "/images/vava.png" alt = "Valorant" />
            </div>

            <div className= "container_recomendados">
                  <img src = "/images/mw2.png" alt = "Battlegrounds"/>
                  <img src = "/images/image 34.png" alt = "TheWitcher3"/>
                  <img src = "/images/Jogo 4.png" alt = "AMONGUS" />
            </div>
            
            </div>
            </div>
        
);
}


export default MaisJogados;