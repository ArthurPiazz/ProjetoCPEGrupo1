import React from 'react';
import "./recomendados.css";
import Barra from "../../Barra";

function Recomendados(){
    return(
            <div className="background_plataforma">
            <Barra/>
            <div className="elementos_recomendados">
                <link rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Iceland"/>
                <div className="retangulo_recomendados">RECOMENDADOS COM BASE NO QUE VOCÊ JOGOU</div>
            <div className= "container_lancamentos">
                  <img src = "/images/Jogo 3.png" alt = "MINECRAFT" />
                  <img src = "/images/image 33.png" alt = "Destiny" />
                  <img src = "/images/image 23.png" alt = "WOW" />
            </div>

            <div className= "container_recomendados">
                  <img src = "/images/image 21.png" alt = "DOTA2" />
                  <img src = "/images/halo.png" alt = "halo" />
                  <img src = "/images/mw2.png" alt = "Battlegrounds" />
            </div>

            <div className= "container_recomendados">
                  <img src = "/images/image 18.png" alt = "TWW"/>
                  <img src = "/images/gowr.jpg" alt = "GOWR"/>
                  <img src = "/images/image 22.png" alt = "CIV" />
            </div>
            
            </div>
            </div>
    )
}


export default Recomendados;