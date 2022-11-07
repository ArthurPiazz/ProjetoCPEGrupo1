import React from 'react';
import "./lancamentos.css";
import Barra from "../../Barra";

function Lancamentos(){
    return(
            <div className="background_plataforma">
            <Barra/>
            <h1>LANÇAMENTOS</h1>
            <div className= "container">
            <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Iceland"/>


                <div className= "aventura">
                <div className='jogo'><img src = "./images/image 30.png" alt = "GTAV" />
                  <p className='titulo'>Grand Theft Auto V</p>
                </div>
                 
                <div className='jogo'>  <img src = "./images/Jogo 3.png" alt = "MINECRAFT" />
                  <p className='titulo'>Minecraft</p>
                </div>

                <div className='jogo'>  <img src = "./images/Jogo 4.png" alt = "AMONGUS" />
                  <p className='titulo'>Among Us</p>
                </div>

                <div className='jogo'><img src = "./images/Jogo 1.png" alt = "RDR2" />
                  <p className='titulo'>Red Dead Redemption 2</p>
                </div>
                </div>
                </div>
            </div>
    )
}

        

export default Lancamentos;