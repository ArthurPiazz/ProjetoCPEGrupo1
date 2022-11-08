import React from 'react';
import "./lancamentos.css";
import Barra from "../../Barra";

function Lancamentos(){
    return(
            <div className="background_plataforma">
            <Barra/>
            <div className="elementos_lancamentos">
                <link rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Iceland"/>
                <div className="retangulo_lancamentos">VEJA O QUE HÁ DE NOVO!</div>
            <div className= "container_lancamentos">
                  <img src = "/images/image 36.png" alt = "SpiderMan" />
                  <img src = "/images/image 11.png" alt = "Uncharted" />
                  <img src = "/images/Jogo 1.png" alt = "RDR2" />
                  <img src = "/images/image 12.png" alt = "FIFA23" />
            </div>

            <div className= "container_lancamentos">
                  <img src = "/images/halo.png" alt = "Halo" />
                  <img src = "/images/eso.png" alt = "Elders Scrolls Online" />
                  <img src = "/images/gowr.jpg" alt = "GOWR" />
                  <img src = "/images/hfw.jpg" alt = "hfw" />
            </div>

            <div className= "container_lancamentos">
                  <img src = "/images/image 16.png" alt = "Stray"/>
                  <img src = "/images/image 17.png" alt = "Scorn"/>
                  <img src = "/images/image 22.png" alt = "CIV" />
                  <img src = "/images/image 18.png" alt = "TWW" />
            </div>
            
            </div>
            </div>
    )
}

        

export default Lancamentos;