import React from "react"
import "./escolhaplano.css";

function EscolhaPlano(){
    return(
      <div className="background_planos">
        <div className="base">
          <div className="container"> 
            <h1> Selecione o plano de interesse</h1>
              <div className="planos">
                <div className="starter">
                <h2>Starter</h2>
                  <p>
                  - Biblioteca completa
                  <br/>
                  - Qualidade Full-HD
                  <br/>
                  - Catálogo atualizado constantemente
                  <br/>
                  </p>
                <input  id = "STR" type = "radio" name = "plano"/>
                </div>
                


                <div className="plano">
                <h2>Medium</h2>
                  <p>
                    - Acesso a 100 jogos
                    <br/>
                    - Qualidade Full-HD
                    <br/>
                    - Catálogo atualizado constantemente
                    <br/>
                    - Retrocompatibilidade
                    <br/>
                    - Descontos exclusivos
                    <br/>
                  </p>
                <input  id = "MID" type = "radio" name = "plano"/>
                </div>
                
                <div className="plano">
                <h2>Pro</h2>
                <p>
                    - Acesso a 100 jogos
                    <br/>
                    - Qualidade Full-HD
                    <br/>
                    - Catálogo atualizado constantemente
                    <br/>
                    - Retrocompatibilidade
                    <br/>
                    - Descontos exclusivos
                    <br/>
                    - Use em vários dispositivos
                    <br/>
                    - Jogos na nuvem
                    <br/>
                    - Lançamentos disponíveis no primeiro dia
                    <br/> 
                    - Acesso a serviços parceiros
                    <br/>
                    
                </p>
                <input  id = "PRO" type = "radio" name = "plano"/>
                </div>

                <div className="plano">
                <h2>Ultimate</h2>
                <input  id = "UTM" type = "radio" name = "plano"/>
                </div>
              </div>  
          </div>
        </div>
      </div>
    );
}

export default EscolhaPlano;