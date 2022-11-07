import React from "react"
import "./escolhaplano.css";

function EscolhaPlano(){
    return(
      <div className="background_planos">
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Iceland"></link>
        <div className="base">
          <div className="container_planos">
            <h1 className="selecione"> Selecione o plano de interesse</h1>
              <div className="planos">
                
                <div className="plano">
                  <h2>Starter</h2>
                    <p>
                    - Acesso a 100 jogos
                    <br/>
                    - Qualidade Full-HD
                    <br/>
                    - Catálogo atualizado constantemente
                    <br/>
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h4>
                    R$ 14,90
                    </h4>
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
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <h4>
                    R$ 24,90
                    </h4>
                <input  id = "MID" type = "radio" name = "plano"/>
                </div>
                

                <div className="plano">
                <h2>Pro</h2>
                <p>
                    - Biblioteca completa
                    <br/>
                    - Qualidade Full-HD
                    <br/>
                    - Catálogo atualizado constantemente
                    <br/>
                    - Retrocompatibilidade
                    <br/>
                    - Descontos exclusivos
                    <br/>
                    - Use em vários dispositivos simultaneamente
                    <br/>
                    - Lançamentos disponíveis no primeiro dia
                    <br/> 
                    - Acesso a serviços parceiros
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h4>
                    R$ 32,90
                    </h4>     
                </p>
                <input  id = "PRO" type = "radio" name = "plano"/>
                </div>


                <div className="plano">
                  <h2>Ultimate</h2>
                  <p>
                      - Biblioteca completa
                      <br/>
                      - Qualidade 4K
                      <br/>
                      - Catálogo atualizado constantemente
                      <br/>
                      - Retrocompatibilidade
                      <br/>
                      - Descontos exclusivos
                      <br/>
                      - Use em vários dispositivos simultaneamente
                      <br/>
                      - Jogos na nuvem
                      <br/>
                      - Lançamentos disponíveis no primeiro dia
                      <br/> 
                      - Acesso a serviços parceiros
                      <br/>
                      - Acesso vitalício a 2 jogos todo mês     
                  </p>
                  <br/>
                      <h4>
                      R$ 39,90
                      </h4>
                <input  id = "UTM" type = "radio" name = "plano">
                  
                </input>
                </div>

              </div>  
          </div>
        </div>
      </div>
    );
}

export default EscolhaPlano;